"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  Lock,
  Users,
  FileText,
  Clock,
  Mail,
  Phone,
  CheckCircle,
} from "lucide-react";

const privacySections = [
  {
    id: 1,
    title: "Information We Collect",
    icon: <FileText className="w-6 h-6" />,
    content: [
      {
        subtitle: "Personal Information",
        details: `We collect contact details directly from you when you register for a service, subscribe to email
notifications, utilize our products, participate in our events, download our content, sign up for our
newsletters, or submit a query requiring our response. The personal data we collect may include, but
is not restricted to, your name, email address, employer, job title, and geographical location.`,
      },
      {
        subtitle: "Usage Information",
        details: `We automatically collect information concerning your usage of our websites, platforms, and/or
products. Both we and our external service providers employ cookies and other tracking mechanisms
to automatically acquire information about your interactions with our websites, platforms, and/or
products. This includes data pertaining to the pages you visit on our website, the services or details
you search for, and the links and content you opt to access within our websites, services, and
products.`,
      },
      {
        subtitle: "Technical Data",
        details: `We and our third-party service providers automatically collect data about the device(s) you use to
access our website. This encompasses information about the device model you are using, as well as
distinct mobile device identifiers or internet protocol (IP) address online identifiers. We also gather
information regarding your internet service provider, domain name, and the browser and operating
system types you are using.`,
      },
      {
        subtitle: "Cookies and Tracking",
        details: `WAVELOOP uses 'cookies'. These cookies are utilized to store data including visitors' preferences, and
the specific pages on the website that the visitor accessed or viewed. We also employ log files that
document visitors when they browse websites, including internet protocol (IP) addresses, browser
type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and potentially the
number of clicks.`,
      },
    ],
  },
  {
    id: 2,
    title: "How We Use Your Information",
    icon: <Users className="w-6 h-6" />,
    content: [
      {
        subtitle: "Service Provision",
        details: `To deliver, operate, and maintain our websites, products, and/or services, facilitate the creation of an
account for you, process payments for provided products and services, enable us to respond to your
communications, address support inquiries, and confirm the legitimate use of our products and tools.`,
      },
      {
        subtitle: "Personalization",
        details: `To enhance, customize, and broaden our websites, products, and/or services, understand and analyze
how you use our website, products, and/or services, and innovate new products, services, features,
and capabilities.`,
      },
      {
        subtitle: "Communications",
        details: `To communicate with you, either directly or through one of our affiliates, for purposes such as
customer support, providing website-related updates and other information, and for marketing and
promotional initiatives. We may also send you emails/notifications and inform you of product updates
and resolutions.`,
      },
    ],
  },
  {
    id: 3,
    title: "Information Sharing and Disclosure",
    icon: <Eye className="w-6 h-6" />,
    content: [
      {
        subtitle: "Third-Party Service Providers",
        details: `We may share your information with trusted third-party service providers who assist us in operating
our website and providing our services. Third-party ad servers or ad networks employ technologies
such as cookies, JavaScript, or Web Beacons, which are integrated into their respective advertisements
and links displayed on WAVELOOP.`,
      },
      {
        subtitle: "Legal Requirements",
        details: `We will reveal your information if mandated by law. We may disclose your information to law
enforcement authorities upon their request, or to an unrelated third party within the context of actual
or impending legal proceedings, provided such disclosure aligns with data protection legislation.`,
      },
      {
        subtitle: "Business Transfers",
        details: `We will never commercialize your information to external parties under normal circumstances.`,
      },
    ],
  },
  {
    id: 4,
    title: "Data Security",
    icon: <Lock className="w-6 h-6" />,
    content: [
      {
        subtitle: "Security Measures",
        details: `We have implemented measures to ensure that our hosting provider employs the requisite level of
protection for your information and maintain appropriate technical and organizational security
measures.`,
      },
      {
        subtitle: "Data Encryption",
        details: `We use industry-standard technologies to protect sensitive data during transmission and storage.`,
      },
      {
        subtitle: "Access Controls",
        details: `We maintain strict access controls and regularly review our security practices to ensure your data
remains protected, including measures to detect and prevent fraudulent activities.`,
      },
    ],
  },
];

const userRights = [
  "The Right to Access",
  "The Right to Rectification",
  "The Right to Erasure",
  "The Right to Restrict Processing",
  "The Right to Object to Processing",
  "The Right to Data Portability",
  "Withdraw consent",
];

export default function PrivacyPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const sectionVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 bg-white"
      >
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 max-w-4xl mx-auto mt-16 text-center">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-black mb-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray mb-8 max-w-2xl mx-auto"
          >
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-gray"
          >
            <Clock className="w-5 h-5" />
            <span>Last updated: July 11, 2025</span>
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 pb-16"
      >
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Our Commitment to Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  At WAVELOOP, accessible from www.waveloop.dev, we are
                  committed to protecting your privacy and ensuring the security
                  of your personal information. This Privacy Policy describes
                  how we collect, use, disclose, and safeguard your information
                  when you visit our website or use our services. We believe
                  transparency is key to building trust with our users. WAVELOOP
                  acts as the data controller for any personal data you supply
                  to us.
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
                <h3 className="text-2xl font-bold text-gray-900">
                  {section.title}
                </h3>
              </div>
              <div className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="border-l-4 border-gray-200 pl-4"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {item.subtitle}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.details}
                    </p>
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
            <h3 className="text-3xl font-bold mb-6 text-center">
              Your Rights and Choices
            </h3>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              You have several rights regarding your personal information. We
              respect these rights and provide easy ways for you to exercise
              them.
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
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Data Retention
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Account Information
                </h4>
                <p className="text-gray-600">
                  We retain your account information for as long as your account
                  is active or as needed to provide you services.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Usage Data</h4>
                <p className="text-gray-600">
                  Personal information is processed exclusively based on our
                  legitimate interest in delivering products and services to
                  you, and in continuously monitoring and enhancing the
                  usability and satisfaction levels of our website, services,
                  and products.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  International Transfers
                </h4>
                <p className="text-gray-600">
                  Personal data within the European Union is safeguarded by data
                  protection laws, however, other nations do not necessarily
                  provide equivalent protection for your personal data. Our
                  website and certain products, services, or their components
                  may be hosted in the United States, which implies that any
                  information you submit may be transferred outside the European
                  Economic Area.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Legal Requirements
                </h4>
                <p className="text-gray-600">
                  If you submit a request, we are obliged to respond within one
                  month. Some data may be retained longer when required by law
                  or for legitimate business purposes.
                </p>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Us
            </h3>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy or our privacy
              practices, please contact us using the information below:
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
                  <p className="text-gray-600">+94 71 996 7276</p>
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
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Changes to This Policy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              WAVELOOP periodically reviews its privacy policy and publishes any
              updates on this web page. We will notify you of any material
              changes by posting the new Privacy Policy on this page and
              updating the &quot;Last updated&quot; date. We encourage you to review this
              Privacy Policy periodically to stay informed about how we are
              protecting your information.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
