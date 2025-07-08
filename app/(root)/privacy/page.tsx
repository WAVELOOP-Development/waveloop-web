'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users, FileText, Clock, Mail, Phone, CheckCircle } from 'lucide-react';

const privacySections = [
  {
    id: 1,
    title: "Information We Collect",
    icon: <FileText className="w-6 h-6" />,
    content: [
      {
        subtitle: "Personal Information",
        details: "We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us. This may include your name, email address, phone number, and any other information you choose to provide."
      },
      {
        subtitle: "Usage Information", 
        details: "We automatically collect certain information about your use of our services, including your IP address, browser type, operating system, access times, and the pages you view."
      },
      {
        subtitle: "Cookies and Tracking",
        details: "We use cookies and similar tracking technologies to collect information about your browsing activities and to provide personalized experiences."
      }
    ]
  },
  {
    id: 2,
    title: "How We Use Your Information",
    icon: <Users className="w-6 h-6" />,
    content: [
      {
        subtitle: "Service Provision",
        details: "To provide, maintain, and improve our services, process transactions, and communicate with you about your account or our services."
      },
      {
        subtitle: "Personalization",
        details: "To personalize your experience, provide customized content, and make recommendations based on your preferences and usage patterns."
      },
      {
        subtitle: "Communications",
        details: "To send you technical notices, updates, security alerts, and support messages, as well as marketing communications with your consent."
      }
    ]
  },
  {
    id: 3,
    title: "Information Sharing and Disclosure",
    icon: <Eye className="w-6 h-6" />,
    content: [
      {
        subtitle: "Third-Party Service Providers",
        details: "We may share your information with trusted third-party service providers who assist us in operating our website and providing our services."
      },
      {
        subtitle: "Legal Requirements",
        details: "We may disclose your information if required to do so by law or in response to valid requests by public authorities."
      },
      {
        subtitle: "Business Transfers",
        details: "In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity."
      }
    ]
  },
  {
    id: 4,
    title: "Data Security",
    icon: <Lock className="w-6 h-6" />,
    content: [
      {
        subtitle: "Security Measures",
        details: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
      },
      {
        subtitle: "Data Encryption",
        details: "We use industry-standard encryption protocols to protect sensitive data during transmission and storage."
      },
      {
        subtitle: "Access Controls",
        details: "We maintain strict access controls and regularly review our security practices to ensure your data remains protected."
      }
    ]
  }
];

const userRights = [
  "Access your personal information",
  "Correct inaccurate information", 
  "Delete your personal information",
  "Restrict processing of your data",
  "Data portability",
  "Object to processing",
  "Withdraw consent"
];

export default function PrivacyPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const sectionVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 bg-gradient-to-br from-[#00081C] via-gray-900 to-[#00081C]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6"
          >
            <Shield className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-gray-300"
          >
            <Clock className="w-5 h-5" />
            <span>Last updated: January 15, 2024</span>
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Commitment to Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  At Waveloop, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our 
                  website or use our services. We believe transparency is key to building trust with our users.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {privacySections.map((section, index) => (
            <motion.div
              key={section.id}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#00081C] rounded-full flex items-center justify-center text-white">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
              </div>
              <div className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-l-4 border-gray-200 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{item.subtitle}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.details}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-[#00081C] to-gray-900 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">Your Rights and Choices</h3>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              You have several rights regarding your personal information. We respect these rights and provide easy ways for you to exercise them.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {userRights.map((right, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">{right}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Account Information</h4>
                <p className="text-gray-600">We retain your account information for as long as your account is active or as needed to provide you services.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Usage Data</h4>
                <p className="text-gray-600">We typically retain usage data for up to 2 years for analytics and service improvement purposes.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Marketing Data</h4>
                <p className="text-gray-600">Marketing-related data is retained until you unsubscribe or for a maximum of 3 years.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Legal Requirements</h4>
                <p className="text-gray-600">Some data may be retained longer when required by law or for legitimate business purposes.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h3>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us using the information below:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00081C] rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">info@waveloop.dev</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00081C] rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">+94 1234 5678</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h3>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, 
              legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this 
              page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically to stay 
              informed about how we are protecting your information.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
