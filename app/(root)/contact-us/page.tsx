"use client";

import React, { useState } from "react";
import { Paperclip, Upload, X } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { motion } from "framer-motion";

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
      // Allow common file types (images, documents, archives)
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
      const maxSize = 10 * 1024 * 1024; // 10MB

      if (!allowedTypes.includes(file.type)) {
        alert(`File type ${file.type} is not allowed`);
        return false;
      }

      if (file.size > maxSize) {
        alert(`File ${file.name} is too large. Maximum size is 10MB`);
        return false;
      }

      return true;
    });

    setAttachedFiles((prev) => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", {
      ...formData,
      selectedTags,
      attachedFiles,
    });
  };
  return (
    <>
      <main className="bg-white">
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Contact Us heading centered */}
            <div className="text-center mb-16">
              <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl md:text-7xl font-semibold text-[#00081C] mb-6 mt-30"
              >
                Contact Us
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              >
                We&apos;re here to help you bring your ideas to life. Let&apos;s
                discuss your project and how we can assist you.
              </motion.p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-20">
              {/* Left Side - Project Images with Text */}
              <div className="lg:col-span-2 flex flex-col mt-8 lg:mt-20 gap-2.5 order-2 lg:order-1">
                <div className="relative overflow-hidden mr-4 sm:mr-6 lg:mr-10 shadow-xl">
                  <img
                    src="/contact.jpg"
                    alt="Project"
                    className="w-full h-24 sm:h-28 lg:h-30 object-cover object-top"
                  />
                  <div className="absolute inset-0 flex items-center">
                    <div className="text-white mt-4 sm:mt-8 lg:mt-12 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold ml-2 sm:ml-3 lg:ml-4">
                      Have a
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden ml-6 sm:ml-10 lg:ml-14 shadow-xl">
                  <img
                    src="/contact.jpg"
                    alt="Project"
                    className="w-full h-16 sm:h-18 lg:h-20 object-cover"
                    style={{ objectPosition: "0 -120px" }}
                  />
                  <div className="absolute inset-0 flex items-center">
                    <div className="text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold ml-2 sm:ml-3 lg:ml-4">
                      Project?
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden mr-8 sm:mr-16 lg:mr-24 ml-4 sm:ml-6 lg:ml-8 shadow-xl">
                  <img
                    src="/contact.jpg"
                    alt="Project"
                    className="w-full h-32 sm:h-38 lg:h-46 object-cover"
                    style={{ objectPosition: "0 -200px" }}
                  />
                </div>
                <div className="relative overflow-hidden ml-6 sm:ml-10 lg:ml-14 shadow-xl">
                  <img
                    src="/contact.jpg"
                    alt="Project"
                    className="w-full h-10 sm:h-12 lg:h-14 object-cover"
                    style={{ objectPosition: "0 -380px" }}
                  />
                </div>
                <div className="relative overflow-hidden mr-6 sm:mr-10 lg:mr-14 shadow-xl">
                  <img
                    src="/contact.jpg"
                    alt="Project"
                    className="w-full h-16 sm:h-18 lg:h-20 object-cover"
                    style={{ objectPosition: "0 -420px" }}
                  />
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="lg:col-span-3 bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl relative order-1 lg:order-2">
                <BorderBeam
                  size={350}
                  duration={8}
                  delay={0}
                  colorFrom="#021443"
                  colorTo="#60a5fa"
                  borderWidth={2}
                />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">
                  Start Your Project
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
                          Images, PDF, DOC, XLS, TXT, ZIP (Max 10MB)
                        </span>
                      </label>
                    </div>

                    {/* Display attached files */}
                    {attachedFiles.length > 0 && (
                      <div className="mt-3 space-y-2">
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
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#021443] text-white mt-4 sm:mt-6 py-2.5 sm:py-3 px-6 rounded-lg font-semibold hover:bg-[#021443]/90 focus:ring-2 focus:ring-[#021443] focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    Send Message
                  </button>
                </form>

                <p className="text-xs text-gray-500 mt-3 sm:mt-4 text-center">
                  We&apos;ll get back to you within 24 hours. For urgent
                  matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
