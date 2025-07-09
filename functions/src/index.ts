import { onRequest } from "firebase-functions/v2/https";
import { setGlobalOptions } from "firebase-functions/v2";
import { Resend } from "resend";

// Load environment variables for local development
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Set global options
setGlobalOptions({ maxInstances: 10 });

export const contact = onRequest(
  {
    cors: true,
  },
  async (request, response) => {
    // Initialize Resend with environment variable
    // For local development, use .env file or process.env
    // For production, Firebase will inject the environment variable
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY environment variable is not set");
      response.status(500).json({ error: "Server configuration error" });
      return;
    }

    const resend = new Resend(apiKey);
    if (request.method !== "POST") {
      response.status(405).json({ error: "Method not allowed" });
      return;
    }

    try {
      const { name, email, phone, message, selectedTags, attachments } = request.body;

      // Log incoming request for debugging
      console.log("Received contact form submission:", {
        name,
        email,
        phone,
        selectedTags,
        attachmentsCount: attachments?.length || 0,
        attachmentSizes: attachments?.map((att: any) => ({
          filename: att.filename,
          size: att.size,
          type: att.type
        })) || []
      });

      // Validate required fields
      if (!name || !email || !message) {
        response.status(400).json({ error: "Missing required fields" });
        return;
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        response.status(400).json({ error: "Invalid email address" });
        return;
      }

      // Sanitize inputs to prevent XSS
      const sanitizedName = name.replace(/[<>]/g, "");
      const sanitizedEmail = email.trim();
      const sanitizedPhone = phone ? phone.replace(/[<>]/g, "") : "Not provided";
      const sanitizedMessage = message.replace(/[<>]/g, "");
      const sanitizedTags = selectedTags && Array.isArray(selectedTags) 
        ? selectedTags.map((tag: string) => tag.replace(/[<>]/g, "")).join(", ") 
        : "Not specified";

      // Process attachments for Resend API
      const emailAttachments = attachments && Array.isArray(attachments) 
        ? attachments.map((file: any) => {
            const attachment: any = {
              filename: file.filename,
              content: Buffer.from(file.content, 'base64') // Convert base64 string to Buffer
            };
            
            // Only add content_type if it's a valid MIME type
            if (file.type && file.type.includes('/')) {
              attachment.content_type = file.type;
            }
            
            return attachment;
          })
        : [];

      // Log attachment info for debugging
      if (emailAttachments.length > 0) {
        console.log("Processing attachments:", emailAttachments.map(att => ({
          filename: att.filename,
          content_type: att.content_type || 'auto-detect',
          contentLength: att.content?.length || 0,
          isBuffer: Buffer.isBuffer(att.content)
        })));
      }

      // Validate total attachment size (Resend has a 40MB limit)
      const totalAttachmentSize = attachments && Array.isArray(attachments)
        ? attachments.reduce((total: number, file: any) => total + (file.size || 0), 0)
        : 0;
      
      if (totalAttachmentSize > 40 * 1024 * 1024) { // 40MB limit
        response.status(400).json({ 
          error: "Total attachment size exceeds 40MB limit. Please reduce file sizes or number of files." 
        });
        return;
      }

      // Get current date and time
      const currentDate = new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "UTC+05:30",
      });

      const emailTemplate = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
            <div style="background-color: white; padding: 30px; border-radius: 8px;">
                <div style="width: 100%; display: flex; justify-content: center; margin-bottom: 20px;">
                    <img src="https://firebasestorage.googleapis.com/v0/b/waveloop-development.firebasestorage.app/o/logo%2Flogo-secondary-T.png?alt=media&token=75188ea4-d7b1-4bae-8b26-61af30a2dff2" style="width: 100px;" alt="logo">
                </div>
                <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 3px solid #2563eb;">
                    <h1 style="color: #2563eb; margin: 0; font-size: 24px; font-weight: 600;">Project Request from Official Web-site</h1>
                    <p style="color: #6b7280; margin: 4px 0 0 0; font-size: 14px;">Received on ${currentDate}</p>
                </div>
                
                <div style="margin-bottom: 25px;">
                    <div style="margin-bottom: 15px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #2563eb; border-radius: 4px;">
                        <span style="font-weight: 600; color: #2563eb; display: block; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Client Name</span>
                        <p style="color: #374151; font-size: 16px; margin: 0;">${sanitizedName}</p>
                    </div>
                    
                    <div style="margin-bottom: 15px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #2563eb; border-radius: 4px;">
                        <span style="font-weight: 600; color: #2563eb; display: block; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</span>
                        <p style="color: #374151; font-size: 16px; margin: 0;">${sanitizedEmail}</p>
                    </div>
                    
                    <div style="margin-bottom: 15px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #2563eb; border-radius: 4px;">
                        <span style="font-weight: 600; color: #2563eb; display: block; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Phone Number</span>
                        <p style="color: #374151; font-size: 16px; margin: 0;">${sanitizedPhone}</p>
                    </div>
                    
                    <div style="margin-bottom: 15px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #2563eb; border-radius: 4px;">
                        <span style="font-weight: 600; color: #2563eb; display: block; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Project Category</span>
                        <p style="color: #374151; font-size: 16px; margin: 0;">${sanitizedTags}</p>
                    </div>
                    
                    ${attachments && Array.isArray(attachments) && attachments.length > 0 ? `
                    <div style="margin-bottom: 15px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #2563eb; border-radius: 4px;">
                        <span style="font-weight: 600; color: #2563eb; display: block; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Attached Files</span>
                        <div style="color: #374151; font-size: 16px; margin: 0;">
                            ${attachments.map((file: any) => `
                                <div style="margin: 5px 0; padding: 8px; background-color: #e5e7eb; border-radius: 4px;">
                                    <strong>${file.filename}</strong> (${(file.size / 1024 / 1024).toFixed(2)} MB)
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                </div>
                
                <div style="height: 2px; background: linear-gradient(to right, #2563eb, #60a5fa); margin: 20px 0; border-radius: 1px;"></div>
                
                <div style="background-color: #eff6ff; padding: 20px; border-radius: 6px; border: 1px solid #bfdbfe;">
                    <span style="font-weight: 600; color: #1e40af; display: block; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Project Details</span>
                    <p style="color: #374151; font-size: 16px; margin: 0; white-space: pre-wrap;">${sanitizedMessage}</p>
                </div>
                
                <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
                    <p>Waveloop official website contact section</p>
                </div>
            </div>
        </div>
      `;

      const userEmailTemplate = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; width: 100%; margin: 0 auto; background-color: #f8f9fa;">
            <div style="background-color: white; padding: 20px; border-radius: 8px;">
                <div style="width: 100%; display: flex; justify-content: center; margin-bottom: 20px;">
                    <img src="https://firebasestorage.googleapis.com/v0/b/waveloop-development.firebasestorage.app/o/logo%2Flogo-secondary-T.png?alt=media&token=75188ea4-d7b1-4bae-8b26-61af30a2dff2" style="width: 100px;" alt="logo">
                </div>

                <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 3px solid #2563eb;">
                    <h1 style="color: #2563eb; margin: 0; line-height: 1.4; font-size: 24px; font-weight: 600;">Thank You for Staying Connected with Us</h1>
                </div>
                
                <div style="margin-bottom: 25px;">
                    <p style="color: #374151; font-size: 16px; margin-bottom: 15px;">Dear ${sanitizedName},</p>
                    
                    <p style="color: #374151; font-size: 16px; margin-bottom: 15px;">Thank you for reaching out to us regarding your project inquiry. We have successfully received your message and wanted to acknowledge that we are now in touch.</p>
                    
                    <div style="background-color: #eff6ff; padding: 20px; border-radius: 6px; border: 1px solid #bfdbfe; margin: 20px 0;">
                        <p style="color: #1e40af; font-size: 16px; margin: 0; font-weight: 500;">✓ Your inquiry has been received</p>
                        <p style="color: #1e40af; font-size: 16px; margin: 5px 0 0 0; font-weight: 500;">✓ We will respond as soon as possible</p>
                    </div>
                    
                    <p style="color: #374151; font-size: 16px; margin-bottom: 15px;">Our team is currently reviewing your project details and will get back to you with a detailed response within the next 24-48 hours.</p>
                    
                    <p style="color: #374151; font-size: 16px; margin-bottom: 15px;">If you have any urgent questions or need to provide additional information, please don't hesitate to contact us.</p>
                </div>
                
                <div style="height: 2px; background: linear-gradient(to right, #2563eb, #60a5fa); margin: 20px 0; border-radius: 1px;"></div>
                
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 6px; border-left: 4px solid #2563eb;">
                    <p style="color: #2563eb; font-size: 14px; font-weight: 600; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.5px;">Contact Information</p>
                    <p style="color: #374151; font-size: 14px; margin: 0;">Email: info@waveloop.dev</p>
                    <p style="color: #374151; font-size: 14px; margin: 5px 0 0 0;">Phone: +94 71 996 7276</p>
                </div>
                
                <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                    <p style="color: #6b7280; font-size: 14px; margin: 0;">Thank you for choosing us for your project needs.</p>
                    <p style="color: #2563eb; font-size: 16px; font-weight: 600; margin: 10px 0 0 0;">Best regards,<br>WAVELOOP (Pvt) Ltd</p>
                </div>
                
            </div>
        </div>
      `;

      // Send email using Resend
      const emailPayload: any = {
        from: "WAVELOOP Contact Form <info@waveloop.dev>",
        to: ["info@waveloop.dev"],
        subject: `New Project Inquiry from ${sanitizedName} - ${sanitizedTags !== "Not specified" ? sanitizedTags : "General Inquiry"}`,
        html: emailTemplate,
        replyTo: sanitizedEmail,
      };

      const userEmailPayload: any = {
        from: "WAVELOOP Contact Form Submission <info@waveloop.dev>",
        to: [sanitizedEmail],
        subject: `Thank You for Staying Connected with Us - ${sanitizedName}`,
        html: userEmailTemplate,
        replyTo: "info@waveloop.dev",
      };

      // Add attachments if they exist
      if (emailAttachments.length > 0) {
        emailPayload.attachments = emailAttachments;
        console.log("Email payload with attachments:", {
          ...emailPayload,
          attachments: emailAttachments.map(att => ({
            filename: att.filename,
            content_type: att.content_type,
            hasContent: !!att.content
          }))
        });
      }

      console.log("Sending email with Resend...");
      try {
        const data = await resend.emails.send(emailPayload);
        console.log("Email sent successfully:", data);
        
        // Send confirmation email to the user
        console.log("Sending confirmation email to user...");
        try {
          const userEmailData = await resend.emails.send(userEmailPayload);
          console.log("User confirmation email sent successfully:", userEmailData);
        } catch (userEmailError) {
          console.error("Failed to send user confirmation email:", userEmailError);
          // Don't fail the main request if user email fails
        }
        
        response.status(200).json({
          message: "Email sent successfully",
          data,
          attachmentCount: emailAttachments.length
        });
      } catch (emailError) {
        console.error("Resend API error:", emailError);
        // If it's an attachment-related error, try sending without attachments
        if (emailAttachments.length > 0 && (emailError as any)?.message?.includes('attachment')) {
          console.log("Retrying without attachments...");
          const fallbackPayload = { ...emailPayload };
          delete fallbackPayload.attachments;
          
          const fallbackData = await resend.emails.send(fallbackPayload);
          console.log("Email sent without attachments:", fallbackData);
          
          // Send confirmation email to the user even in fallback case
          console.log("Sending confirmation email to user...");
          try {
            const userEmailData = await resend.emails.send(userEmailPayload);
            console.log("User confirmation email sent successfully:", userEmailData);
          } catch (userEmailError) {
            console.error("Failed to send user confirmation email:", userEmailError);
          }
          
          response.status(200).json({
            message: "Email sent successfully (attachments failed to send)",
            data: fallbackData,
            attachmentError: (emailError as any)?.message
          });
        } else {
          throw emailError;
        }
      }
    } catch (error) {
      console.error("Error sending email:", error);
      response.status(500).json({
        error: "Failed to send email",
      });
    }
  }
);
