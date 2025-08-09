/* eslint-disable */
import image1 from "@/public/rescuemed.png";
import image2 from "@/public/resumed-web.png";
import image3 from "@/public/focusfitness.png";
import image4 from "@/public/grocify.png";
import image6 from "@/public/ceylon-events.png";

export interface Project {
  src: any;
  alt: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  detailedDescription: string;
  keyFeatures: string[];
  benefits: string[];
  process: string[];
  industries: string[];
  whyChooseUs: string[];
}

export const projects: Project[] = [
  {
    src: image1,
    alt: "Rescue Med",
    title: "RescueMed",
    description:
      "RescueMed is a real-time emergency response platform that connects ambulance teams with hospitals to streamline communication during patient transport.",
    technologies: ["React", "Node.js", "Flutter", "Firebase"],
    category: "Healthcare",
    detailedDescription:
      "RescueMed enables secure sharing of vital patient data and estimated arrival times, allowing hospitals to prepare in advance and deliver faster, more effective care. The platform integrates real-time GPS tracking, encrypted communication, and automated notifications to ensure seamless coordination between ambulance teams and hospital staff.",
    keyFeatures: [
      "Real-time ambulance tracking",
      "Secure patient data transfer",
      "Automated ETA notifications",
      "Hospital resource allocation dashboard",
      "Encrypted communication channels",
      "Role-based access control",
      "Mobile and web interfaces",
    ],
    benefits: [
      "Faster emergency response",
      "Improved patient outcomes",
      "Reduced hospital wait times",
      "Enhanced data security",
      "Streamlined communication",
    ],
    process: [
      "Requirement analysis",
      "System architecture design",
      "Frontend and backend development",
      "Integration with hospital systems",
      "Testing and deployment",
      "User training and support",
    ],
    industries: ["Healthcare", "Emergency Services"],
    whyChooseUs: [
      "Healthcare domain expertise",
      "Proven real-time system experience",
      "Focus on security and compliance",
      "End-to-end support",
    ],
  },
  {
    src: image2,
    alt: "Resumed Dashboards",
    title: "Resumed Dashboards",
    description:
      "The RescueMed hospital web dashboard provides medical staff with real-time updates from incoming ambulances, including patient details, vitals, and estimated arrival times.",
    technologies: ["React", "Node.js", "Flutter", "Firebase"],
    category: "Healthcare",
    detailedDescription:
      "Resumed Dashboards allow hospitals to prepare ahead, allocate resources efficiently, and ensure timely and effective emergency care. The dashboard features live data feeds, customizable alerts, and analytics for hospital administrators.",
    keyFeatures: [
      "Live ambulance and patient tracking",
      "Customizable alert system",
      "Resource and bed management",
      "Data analytics and reporting",
      "Role-based dashboards",
      "Integration with RescueMed platform",
    ],
    benefits: [
      "Efficient hospital resource allocation",
      "Improved emergency preparedness",
      "Data-driven decision making",
      "Enhanced patient care",
    ],
    process: [
      "Stakeholder interviews",
      "Dashboard UI/UX design",
      "Backend and API development",
      "Integration and testing",
      "Deployment and training",
    ],
    industries: ["Healthcare", "Hospital Management"],
    whyChooseUs: [
      "Custom dashboard expertise",
      "Healthcare workflow understanding",
      "Focus on usability",
      "Ongoing support",
    ],
  },
  {
    src: image3,
    alt: "Focus Fitness",
    title: "FocusFitness",
    description:
      "Smart fitness management application that offers user and schedule management, AI-powered personal training, and comprehensive tools for fitness center administration.",
    technologies: [
      "Flutter",
      "Firebase",
      "React",
      "Node.js",
      "Google Cloud",
      "Stripe",
    ],
    category: "Health & Fitness",
    detailedDescription:
      "FocusFitness provides class scheduling, member tracking, secure payment handling, and AI-driven personal training recommendations. The platform supports both fitness center staff and end users with intuitive mobile and web interfaces.",
    keyFeatures: [
      "Class and schedule management",
      "AI-powered personal training",
      "Member and attendance tracking",
      "Integrated payment processing",
      "Progress analytics dashboard",
      "Push notifications",
    ],
    benefits: [
      "Streamlined gym operations",
      "Personalized fitness experience",
      "Secure and easy payments",
      "Improved member retention",
    ],
    process: [
      "Market research",
      "Feature planning",
      "Mobile and web app development",
      "Payment integration",
      "Testing and launch",
    ],
    industries: ["Fitness Centers", "Health & Wellness"],
    whyChooseUs: [
      "Experience in fitness tech",
      "AI integration capability",
      "User-focused design",
      "Secure payment expertise",
    ],
  },
  {
    src: image4,
    alt: "Grocify",
    title: "Grocify",
    description:
      "Comprehensive e-commerce grocery shopping platform for users and vendors.",
    technologies: ["Flutter", "Python flask", "Firebase", "Google Cloud"],
    category: "E-commerce",
    detailedDescription:
      "Grocify enables users to browse and purchase products seamlessly, while vendors can efficiently manage inventories, product listings, and orders through a user-friendly dashboard. The platform supports real-time order tracking and secure payment processing.",
    keyFeatures: [
      "Product catalog and search",
      "Vendor dashboard",
      "Order and inventory management",
      "Real-time order tracking",
      "Secure payment gateway",
      "Promotions and discounts",
    ],
    benefits: [
      "Convenient online shopping",
      "Efficient vendor management",
      "Secure transactions",
      "Scalable for multiple vendors",
    ],
    process: [
      "Requirement gathering",
      "Platform design",
      "Backend and frontend development",
      "Payment and order integration",
      "Testing and go-live",
    ],
    industries: ["E-commerce", "Retail"],
    whyChooseUs: [
      "E-commerce expertise",
      "Robust platform architecture",
      "Focus on user experience",
      "Vendor support",
    ],
  },
  {
    src: image6,
    alt: "CeylonEvents",
    title: "Ceylon Events",
    description:
      "Versatile event management application that streamlines event creation, user management, and ticket booking.",
    technologies: ["Flutter", "React", "Firebase", "Node.js", "Google Cloud"],
    category: "Events",
    detailedDescription:
      "Ceylon Events allows organizers to manage events efficiently, while users can easily browse, book, and manage their tickets through a seamless interface. The platform supports real-time updates, digital ticketing, and analytics for event organizers.",
    keyFeatures: [
      "Event creation and management",
      "User registration and profiles",
      "Online ticket booking",
      "Digital ticketing and QR codes",
      "Event analytics dashboard",
      "Notifications and reminders",
    ],
    benefits: [
      "Simplified event organization",
      "Easy ticket booking for users",
      "Real-time event updates",
      "Data-driven event insights",
    ],
    process: [
      "Event requirements analysis",
      "Platform and UI design",
      "Backend and ticketing integration",
      "Testing and deployment",
      "Organizer and user onboarding",
    ],
    industries: ["Events", "Entertainment"],
    whyChooseUs: [
      "Event tech experience",
      "User-friendly design",
      "Comprehensive analytics",
      "Reliable support",
    ],
  },
];
