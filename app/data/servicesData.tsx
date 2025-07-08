import {
  LucideIcon,
  Code,
  Smartphone,
  Cloud,
  Brain,
  LayoutDashboard,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import uiUxBanner from "@/public/uiux.jpg";
import cyberBanner from "@/public/security.jpg";
import cloudServicesBanner from "@/public/cloud-com-2.jpg";

export interface Service {
  name: string;
  description: string;
  href: string;
  cta: string;
  className: string;
  background: React.ReactNode;
  Icon: LucideIcon;
  detailedDescription: string;
  keyFeatures: string[];
  benefits: string[];
  process: string[];
  industries: string[];
  whyChooseUs: string[];
}

export const services: Service[] = [
  {
    name: "Web Development",
    description:
      "Custom web applications built with modern technologies and best practices.",
    href: "/services/web-development",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <video
        preload="none"
        loop
        autoPlay
        controlsList="false"
        muted
        className="w-full h-96 object-cover"
      >
        <source src="./web-dev-2.m4v" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
    Icon: Code,
    detailedDescription:
      "Transform your digital presence with cutting-edge web applications that deliver exceptional user experiences. Our full-stack development team specializes in creating scalable, secure, and high-performance web solutions using modern frameworks and industry best practices. From concept to deployment, we ensure your web application not only meets current needs but is built to evolve with your business.",
    keyFeatures: [
      "Responsive Design & Mobile-First Approach",
      "Progressive Web App (PWA) Development",
      "Single Page Application (SPA) & Multi-Page Application (MPA)",
      "API Development & Third-party Integrations",
      "Database Design & Management",
      "Performance Optimization & SEO",
      "Security Implementation & Data Protection",
      "Content Management Systems",
      "E-commerce Solutions",
      "Real-time Features & WebSocket Integration",
    ],
    benefits: [
      "Increased online visibility and brand recognition",
      "Enhanced user engagement and conversion rates",
      "Scalable architecture that grows with your business",
      "Cross-platform compatibility and accessibility",
      "Improved search engine rankings",
      "Reduced maintenance costs with clean code",
      "Fast loading times and optimal performance",
      "Secure data handling and user privacy protection",
    ],
    process: [
      "Discovery & Requirements Analysis",
      "UI/UX Design & Wireframing",
      "Frontend Development & Styling",
      "Backend Development & Database Setup",
      "API Integration & Testing",
      "Performance Optimization",
      "Security Implementation",
      "Quality Assurance & Testing",
      "Deployment & Launch",
      "Post-Launch Support & Maintenance",
    ],
    industries: [
      "E-commerce & Retail",
      "Healthcare & Medical",
      "Finance & Banking",
      "Education & E-learning",
      "Real Estate",
      "Travel & Hospitality",
      "Professional Services",
      "Non-profit Organizations",
    ],
    whyChooseUs: [
      "Expert team",
      "On-time delivery",
      "Agile project management approach",
      "24/7 technical support and maintenance",
      "Transparent communication",
      "Modern dev methodologies",
      "Post-launch optimization and updates",
    ],
  },
  {
    name: "UI/UX Design",
    description:
      "Beautiful and intuitive user interfaces that enhance user experience.",
    href: "/services/ui-ux-design",
    cta: "View designs",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Image
        src={uiUxBanner}
        alt="UI/UX Design"
        fill
        className="object-cover"
      />
    ),
    Icon: LayoutDashboard,
    detailedDescription:
      "Create compelling digital experiences that captivate users and drive business success. Our UI/UX design team combines creativity with data-driven insights to craft interfaces that are not only visually stunning but also intuitive and conversion-focused. We specialize in user-centered design methodologies that ensure your digital products resonate with your target audience while achieving your business objectives.",
    keyFeatures: [
      "User Research & Persona Development",
      "Wireframing & Prototyping",
      "Visual Design & Brand Integration",
      "Interaction Design & Micro-animations",
      "Responsive & Mobile-First Design",
      "Accessibility & Inclusive Design",
      "Design Systems & Component Libraries",
      "Usability Testing & Optimization",
      "Information Architecture",
      "Cross-Platform Design Consistency",
    ],
    benefits: [
      "Increased user engagement and retention",
      "Higher conversion rates and sales",
      "Reduced development costs through clear design specifications",
      "Improved brand perception and credibility",
      "Better accessibility and user satisfaction",
      "Faster time-to-market with design systems",
      "Data-driven design decisions",
      "Competitive advantage through superior user experience",
    ],
    process: [
      "User Research & Discovery",
      "Information Architecture & User Flow",
      "Wireframing & Low-Fidelity Prototyping",
      "Visual Design & Style Guide Creation",
      "High-Fidelity Prototyping",
      "User Testing & Feedback Integration",
      "Design System Development",
      "Handoff & Developer Collaboration",
      "Post-Launch Optimization",
      "Ongoing Design Support",
    ],
    industries: [
      "E-commerce & Retail",
      "Healthcare & Medical",
      "Finance & Banking",
      "Education & E-learning",
      "SaaS & Technology",
      "Media & Entertainment",
      "Travel & Hospitality",
      "Non-profit & Government",
    ],
    whyChooseUs: [
      "Talented design team",
      "Modern design tools",
      "Comprehensive design research",
      "User-centered design approach",
      "Collaborative workflows",
      "Technical expertise",
      "Scalable design",
      "Optimization",
      "Transparent communication and feedback loops",
    ],
  },
  {
    name: "Cyber Security",
    description:
      "Comprehensive security solutions to protect your digital assets and infrastructure.",
    href: "/services/cyber-security",
    cta: "Secure now",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Image
        src={cyberBanner}
        alt="Cyber Security"
        fill
        className="object-cover"
      />
    ),
    Icon: ShieldCheck,
    detailedDescription:
      "Safeguard your business from evolving cyber threats with our comprehensive security solutions. Our cybersecurity experts provide multi-layered protection strategies that combine advanced technology, industry best practices, and continuous monitoring to ensure your digital assets remain secure. From vulnerability assessments to incident response, we deliver end-to-end security services that protect your business reputation and ensure compliance with industry regulations.",
    keyFeatures: [
      "Security Risk Assessment & Auditing",
      "Penetration Testing & Vulnerability Scanning",
      "Network Security & Firewall Configuration",
      "Data Encryption & Protection",
      "Identity & Access Management",
      "Security Information & Event Management (SIEM)",
      "Incident Response & Forensic Analysis",
      "Compliance Management & Reporting",
      "Employee Security Training & Awareness",
      "Continuous Security Monitoring",
    ],
    benefits: [
      "Protection against data breaches and cyber attacks",
      "Compliance with industry standards and regulations",
      "Reduced business risk and financial losses",
      "Enhanced customer trust and brand reputation",
      "Improved operational continuity",
      "Cost-effective security investment",
      "Proactive threat detection and prevention",
      "Expert guidance and 24/7 support",
    ],
    process: [
      "Security Assessment & Risk Analysis",
      "Threat Landscape Evaluation",
      "Security Architecture Design",
      "Implementation & Configuration",
      "Testing & Validation",
      "Staff Training & Documentation",
      "Continuous Monitoring Setup",
      "Incident Response Planning",
      "Regular Security Updates",
      "Compliance Reporting & Review",
    ],
    industries: [
      "Finance & Banking",
      "Healthcare & Medical",
      "E-commerce & Retail",
      "Government & Public Sector",
      "Education & Research",
      "Manufacturing & Industrial",
      "Legal & Professional Services",
      "Technology & SaaS",
    ],
    whyChooseUs: [
      "Cybersecurity professionals with industry expertise",
      "Comprehensive security frameworks",
      "Latest security technologies",
      "Customized security solutions",
      "24/7 security operations center monitoring",
      "Proven track record in incident response",
    ],
  },
  {
    name: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    href: "/services/mobile-development",
    cta: "Explore",
    className: "col-span-3 lg:col-span-2",
    background: (
      <video
        preload="none"
        loop
        autoPlay
        controlsList="false"
        muted
        className="w-full h-96 object-cover"
      >
        <source src="./mobile-dev.m4v" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
    Icon: Smartphone,
    detailedDescription:
      "Transform your business with powerful mobile applications that engage users and drive growth. Our mobile development team creates native and cross-platform apps that deliver exceptional performance, intuitive user experiences, and seamless integration with your existing systems. Whether you need an iOS app, Android app, or cross-platform solution, we use cutting-edge technologies to bring your vision to life.",
    keyFeatures: [
      "Native iOS & Android Development",
      "Cross-Platform App Development (React Native, Flutter)",
      "Custom UI/UX Design for Mobile",
      "API Integration & Backend Services",
      "Push Notifications & Real-time Features",
      "Offline Functionality & Data Sync",
      "App Store Optimization & Publishing",
      "Mobile Analytics & Performance Monitoring",
      "Security & Data Protection",
      "Regular Updates & Maintenance",
    ],
    benefits: [
      "Expanded market reach and customer engagement",
      "Increased brand visibility and recognition",
      "Enhanced customer experience and satisfaction",
      "Direct communication channel with users",
      "Improved operational efficiency",
      "Revenue growth through mobile commerce",
      "Better customer data insights",
      "Competitive advantage in mobile-first market",
    ],
    process: [
      "Requirements Analysis & Strategy",
      "UI/UX Design & Prototyping",
      "Technical Architecture Planning",
      "Development & Testing",
      "Quality Assurance & User Testing",
      "App Store Submission & Review",
      "Launch & Marketing Support",
      "Post-Launch Monitoring",
      "Updates & Feature Enhancements",
      "Ongoing Support & Maintenance",
    ],
    industries: [
      "E-commerce & Retail",
      "Healthcare & Medical",
      "Finance & Banking",
      "Education & E-learning",
      "Food & Hospitality",
      "Transportation & Logistics",
      "Entertainment & Media",
      "Real Estate & Property",
    ],
    whyChooseUs: [
      "Expert developers with extensive mobile experience",
      "Native and cross-platform development",
      "User-centric design approach",
      "Agile development methodology",
      "Complete app submission support",
      "Post-launch optimization and updates",
    ],
  },

  {
    name: "AI Powered Solutions",
    description:
      "Intelligent automation and machine learning solutions that transform your business operations.",
    href: "/services/ai-powered-solutions",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <video
        preload="none"
        loop
        autoPlay
        controlsList="false"
        muted
        className="w-full h-96 object-cover bg-gradient-to-b from-black to-transparent"
      >
        <source src="./ai-2.m4v" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
    Icon: Brain,
    detailedDescription:
      "Harness the power of artificial intelligence to revolutionize your business processes and gain competitive advantages. Our AI-powered solutions leverage cutting-edge machine learning algorithms, natural language processing, and computer vision to automate complex tasks, extract valuable insights from data, and create intelligent applications that adapt and learn from user interactions.",
    keyFeatures: [
      "Machine Learning Model Development",
      "Natural Language Processing (NLP)",
      "Computer Vision & Image Recognition",
      "Predictive Analytics & Forecasting",
      "Intelligent Automation & Process Optimization",
      "AI-Powered Chatbots & Virtual Assistants",
      "Recommendation Systems",
      "Anomaly Detection & Fraud Prevention",
      "Data Mining & Pattern Recognition",
      "AI Model Training & Deployment",
    ],
    benefits: [
      "Increased operational efficiency and productivity",
      "Reduced operational costs through automation",
      "Enhanced decision-making with predictive insights",
      "Improved customer experience and personalization",
      "Faster processing of large data volumes",
      "Competitive advantage through intelligent solutions",
      "Scalable AI infrastructure for growing businesses",
      "Real-time insights and automated responses",
    ],
    process: [
      "AI Strategy & Use Case Identification",
      "Data Collection & Quality Assessment",
      "Model Architecture Design",
      "Algorithm Selection & Training",
      "Model Testing & Validation",
      "Integration & Deployment",
      "Performance Monitoring & Optimization",
      "Continuous Learning & Improvement",
      "Scaling & Maintenance",
      "Knowledge Transfer & Training",
    ],
    industries: [
      "Healthcare & Medical Research",
      "Finance & Banking",
      "E-commerce & Retail",
      "Manufacturing & Industrial",
      "Transportation & Logistics",
      "Media & Entertainment",
      "Agriculture & Food Technology",
      "Energy & Utilities",
    ],
    whyChooseUs: [
      "Expert AI researchers and engineers",
      "Experience with latest AI frameworks and tools",
      "Custom AI solutions",
      "Ethical AI practices",
      "Proven track record in AI project delivery",
      "End-to-end AI implementation",
      "Continuous model improvement",
    ],
  },
  {
    name: "Cloud Based Services",
    description:
      "Scalable cloud infrastructure and deployment solutions for modern businesses.",
    href: "/services/cloud-based-services",
    cta: "Get started",
    className: "col-span-3 lg:col-span-1 ",
    background: (
      <Image
        src={cloudServicesBanner}
        alt="Cloud Services"
        fill
        className="object-cover"
      />
    ),
    Icon: Cloud,
    detailedDescription:
      "Accelerate your digital transformation with comprehensive cloud solutions that provide scalability, reliability, and cost-effectiveness. Our cloud experts help you migrate, deploy, and optimize your applications in cloud environments, ensuring high performance, security, and availability. From cloud architecture design to ongoing management, we provide end-to-end cloud services that enable your business to focus on innovation rather than infrastructure.",
    keyFeatures: [
      "Cloud Migration & Modernization",
      "Multi-Cloud & Hybrid Cloud Architecture",
      "Containerization & Orchestration (Docker, Kubernetes)",
      "Serverless Computing & Function-as-a-Service",
      "Cloud Security & Compliance",
      "DevOps & CI/CD Pipeline Implementation",
      "Auto-scaling & Load Balancing",
      "Disaster Recovery & Backup Solutions",
      "Cloud Cost Optimization",
      "Monitoring & Performance Analytics",
    ],
    benefits: [
      "Reduced infrastructure costs and operational overhead",
      "Improved scalability and flexibility",
      "Enhanced security and compliance",
      "Faster time-to-market for new features",
      "Better disaster recovery and business continuity",
      "Global availability and accessibility",
      "Automatic updates and maintenance",
      "Pay-as-you-use pricing model",
    ],
    process: [
      "Cloud Readiness Assessment",
      "Migration Strategy & Planning",
      "Architecture Design & Optimization",
      "Proof of Concept & Testing",
      "Data Migration & Application Deployment",
      "Security Configuration & Compliance",
      "Performance Optimization",
      "Team Training & Knowledge Transfer",
      "Go-Live & Monitoring Setup",
      "Ongoing Support & Optimization",
    ],
    industries: [
      "Technology & SaaS",
      "E-commerce & Retail",
      "Healthcare & Medical",
      "Finance & Banking",
      "Education & E-learning",
      "Media & Entertainment",
      "Manufacturing & Industrial",
      "Startups & Enterprises",
    ],
    whyChooseUs: [
      "Certified cloud architects and engineers",
      "Scalable solutions for growing businesses",
      "Multi-cloud expertise",
      "Continuous optimization",
      "24/7 monitoring and support services",
      "Security-first approach to cloud deployments",
    ],
  },
];
