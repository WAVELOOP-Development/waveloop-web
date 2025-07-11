"use client";

import React, { useState } from "react";
import { Paperclip, Upload, X, Phone, Mail } from "lucide-react";
import { TextAnimate } from "@/components/magicui/text-animate";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const projectTags = [
  "Software Development",
  "Mobile Application",
  "CyberSecurity",
  "AI Solutions",
  "Cloud Services",
  "UI/UX Design",
  "Other",
];

export default function ContactPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter((file) => {
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "text/plain",
        "application/zip",
        "application/x-rar-compressed",
      ];
      const maxSize = 10 * 1024 * 1024; // 10MB per file

      if (!allowedTypes.includes(file.type)) {
        alert(`File type ${file.type} is not allowed`);
        return false;
      }

      if (file.size > maxSize) {
        alert(`File ${file.name} is too large. Maximum size is 10MB per file`);
        return false;
      }

      return true;
    });

    // Check total size including existing files
    const existingSize = attachedFiles.reduce(
      (total, file) => total + file.size,
      0
    );
    const newFilesSize = validFiles.reduce(
      (total, file) => total + file.size,
      0
    );
    const totalSize = existingSize + newFilesSize;
    const maxTotalSize = 40 * 1024 * 1024; // 40MB total

    if (totalSize > maxTotalSize) {
      alert(
        `Total file size would exceed 40MB limit. Current: ${(existingSize / 1024 / 1024).toFixed(1)}MB, Adding: ${(newFilesSize / 1024 / 1024).toFixed(1)}MB`
      );
      return;
    }

    setAttachedFiles((prev) => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Show processing message for files
      if (attachedFiles.length > 0) {
        setSubmitStatus({
          type: null,
          message: "Processing attachments...",
        });
      }

      // Convert files to base64
      const attachments = await Promise.all(
        attachedFiles.map(async (file) => {
          return new Promise<{
            filename: string;
            content: string;
            type: string;
            size: number;
          }>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
              const base64 = reader.result as string;
              // Remove the data:mime/type;base64, prefix
              const base64Content = base64.split(",")[1];
              resolve({
                filename: file.name,
                content: base64Content,
                type: file.type,
                size: file.size,
              });
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        })
      );

      // Clear processing message
      setSubmitStatus({ type: null, message: "" });

      // Prepare form data
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        selectedTags,
        attachments,
      };

      console.log("Submission Data:", submissionData);

      // Send to cloud function
      const response = await fetch("https://contact-gmtyo3zr6a-uc.a.run.app", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. We'll get back to you soon.",
        });

        // Reset form
        setFormData({ name: "", email: "", phone: "", message: "" });
        setSelectedTags([]);
        setAttachedFiles([]);
      } else {
        const errorData = await response.json();
        setSubmitStatus({
          type: "error",
          message:
            errorData.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <main className="bg-white">
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <div className=" mx-auto py-6 sm:py-12">
            <div className="z-10 max-w-4xl lg:px-0 px-4 mx-auto lg:mb-12 mb-4 mt-8 lg:mt-12 py-4">
              <TextAnimate
                animation="slideLeft"
                by="word"
                className="lg:text-6xl text-4xl font-bold py-4 text-center"
                once
              >
                Stay connected with us
              </TextAnimate>
              <TextAnimate
                animation="slideLeft"
                by="word"
                className="lg:text-xl text-sm text-gray-600 max-w-2xl mx-auto text-center"
                once
              >
                Ideas that spark innovation, Powered by WAVELOOP.
              </TextAnimate>
            </div>

            <div className="flex flex-col lg:flex-row p-4 lg:p-0 justify-between gap-8 m-auto max-w-6xl items-start">
              <div className="w-full ">
                {/* Contact Cards */}
                <div className="space-y-6 flex flex-col lg:flex-row items-start justify-between mb-16 lg:mb-8">
                  <div className="flex flex-col w-full lg:w-fit lg:items-start items-center px-4 gap-2">
                    <div className="p-3 w-fit bg-blue-50 rounded-lg">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="text-center lg:text-left">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Contact Numbers
                        </h3>
                        <p className="text-gray-600">
                          Main: +94 71 996 7276
                          <br />
                          Support: +94 70 128 9704
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:w-fit lg:items-start items-center px-4 gap-2">
                    <div className="p-3 w-fit bg-blue-50 rounded-lg">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="text-center lg:text-left">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Email Addresses
                        </h3>
                        <p className="text-gray-600">
                          General: info@waveloop.dev
                          <br />
                          Marketing: marketing@waveloop.dev
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <iframe
                  className="w-full h-96 lg:h-190 rounded-lg shadow-lg mb-8"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.80392194352!2d79.81500584501902!3d6.921922084853732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1752225962164!5m2!1sen!2slk"
                  width="600"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              {/* Main Content */}
              <div className="flex justify-center items-start max-w-6xl m-auto">
                {/* Right Side - Contact Form */}
                <div className="lg:col-span-3 bg-white rounded-2xl p-4 border lg:p-8 w-full shadow-lg mb-8 relative order-1 lg:order-2">
                  <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6">
                    Let us know what you’re working on
                  </h2>

                  {/* Project Tags */}
                  <div className="mb-4 lg:mb-6">
                    <p className="text-sm text-gray-600 mb-3 font-medium">
                      What&apos;s your project about?
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {projectTags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => handleTagClick(tag)}
                          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border text-xs sm:text-sm font-medium transition-all duration-200 ${
                            selectedTags.includes(tag)
                              ? "bg-gray-800 text-white border-blue-600 shadow-lg"
                              : "border-gray-300 text-gray-700 hover:border-blue-400 hover:text-gray-800"
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contact Form */}
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-3 sm:space-y-4"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm mt-3 sm:mt-4 font-medium text-gray-700"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-2 py-1 sm:py-1.5 border-b-2 border-gray-300 bg-transparent focus:border-[#021443] focus:outline-none transition-colors text-gray-900 text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm mt-3 sm:mt-4 font-medium text-gray-700"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-2 py-1 sm:py-1.5 border-b-2 border-gray-300 bg-transparent focus:border-[#021443] focus:outline-none transition-colors text-gray-900 text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mt-3 sm:mt-4"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-2 py-1 sm:py-1.5 border-b-2 border-gray-300 bg-transparent focus:border-[#021443] focus:outline-none transition-colors text-gray-900 text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mt-3 sm:mt-4"
                      >
                        Tell us about your project *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full px-2 py-1 sm:py-1.5 border-b-2 border-gray-300 bg-transparent focus:border-[#021443] focus:outline-none transition-colors resize-none text-gray-900 text-sm sm:text-base"
                      />
                    </div>

                    {/* File Upload Section */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 mt-3 sm:mt-4">
                        Attachments (Optional)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-blue-400 transition-colors">
                        <input
                          type="file"
                          id="file-upload"
                          multiple
                          onChange={handleFileChange}
                          className="hidden"
                          accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt,.zip,.rar"
                        />
                        <label
                          htmlFor="file-upload"
                          className="cursor-pointer flex flex-col items-center justify-center"
                        >
                          <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 mb-2" />
                          <span className="text-xs sm:text-sm text-gray-600">
                            Click to upload or drag and drop
                          </span>
                          <span className="text-xs text-gray-500 mt-1">
                            Images, PDF, DOC, XLS, TXT, ZIP (Max 10MB per file,
                            40MB total)
                          </span>
                        </label>
                      </div>

                      {/* Display attached files */}
                      {attachedFiles.length > 0 && (
                        <div className="mt-3">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">
                              Attached Files ({attachedFiles.length})
                            </span>
                            <span className="text-xs text-gray-500">
                              Total:{" "}
                              {(
                                attachedFiles.reduce(
                                  (total, file) => total + file.size,
                                  0
                                ) /
                                1024 /
                                1024
                              ).toFixed(1)}{" "}
                              MB / 40 MB
                            </span>
                          </div>
                          <div className="space-y-2">
                            {attachedFiles.map((file, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between p-2 bg-gray-50 rounded-md"
                              >
                                <div className="flex items-center space-x-2 flex-1 min-w-0">
                                  <Paperclip className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                  <span className="text-xs sm:text-sm text-gray-700 truncate">
                                    {file.name}
                                  </span>
                                  <span className="text-xs text-gray-500 flex-shrink-0">
                                    ({(file.size / 1024 / 1024).toFixed(1)} MB)
                                  </span>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removeFile(index)}
                                  className="text-red-500 hover:text-red-700 p-1 flex-shrink-0"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Status Messages */}
                    {submitStatus.type && (
                      <div
                        className={`p-4 rounded-lg text-sm ${
                          submitStatus.type === "success"
                            ? "bg-green-50 text-green-800 border border-green-200"
                            : "bg-red-50 text-red-800 border border-red-200"
                        }`}
                      >
                        {submitStatus.message}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full mt-4 sm:mt-6 py-2.5 sm:py-3 px-6 rounded-lg font-semibold focus:ring-2 focus:ring-[#021443] focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base ${
                        isSubmitting
                          ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                          : "bg-[#021443] text-white hover:bg-[#021443]/90 cursor-pointer"
                      }`}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl text-left font-bold text-gray-900 mb-2">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-lg text-left text-gray-600">
                    Find answers to common questions about our services and
                    process.
                  </p>
                </div>

                <Accordion
                  type="single"
                  collapsible
                  className="w-full py-2 space-y-4"
                >
                  <AccordionItem
                    value="response-time"
                    className="bg-white border border-gray-200 rounded-lg px-6 hover:border-blue-200 transition-colors"
                  >
                    <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-gray-700">
                      What&apos;s your response time?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      We typically respond to all inquiries within 24 hours
                      during business days. For urgent matters, you can call our
                      main line at +94 71 996 7276 for immediate assistance.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="free-consultations"
                    className="bg-white border border-gray-200 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-gray-700">
                      Do you offer free consultations?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      Yes! We offer a complimentary 30-minute consultation to
                      discuss your project needs, goals, and how we can help.
                      During this session, we&apos;ll provide initial recommendations
                      and a rough project timeline. Schedule your free
                      consultation by calling us or filling out the contact form
                      above.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="services"
                    className="bg-white border border-gray-200 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-gray-700">
                      What services do you provide?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      We specialize in a wide range of technology solutions
                      including:
                      <ul className="mt-2 space-y-1 list-disc list-inside">
                        <li>Custom web development and e-commerce solutions</li>
                        <li>Mobile app development (iOS and Android)</li>
                        <li>AI/ML solutions and data analytics</li>
                        <li>Digital transformation consulting</li>
                        <li>UI/UX design and user experience optimization</li>
                        <li>Cloud infrastructure and DevOps</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="pricing"
                    className="bg-white border border-gray-200 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-gray-700">
                      How does your pricing work?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      Our pricing is project-based and depends on scope,
                      complexity, and timeline. We offer:
                      <ul className="mt-2 space-y-1 list-disc list-inside">
                        <li>Fixed-price projects for well-defined scopes</li>
                        <li>Time and materials for evolving requirements</li>
                        <li>Retainer agreements for ongoing support</li>
                        <li>Transparent pricing with no hidden fees</li>
                      </ul>
                      We&apos;ll provide a detailed quote after understanding your
                      specific needs during the consultation.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="support"
                    className="bg-white border border-gray-200 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-gray-700">
                      What kind of support do you provide after project
                      completion?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      We provide comprehensive post-launch support including:
                      <ul className="mt-2 space-y-1 list-disc list-inside">
                        <li>1 Year warranty period for bug fixes</li>
                        <li>Ongoing maintenance and updates</li>
                        <li>Technical support and troubleshooting</li>
                        <li>Performance monitoring and optimization</li>
                        <li>Feature enhancements and scaling</li>
                        <li>Training for your team on system usage</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
