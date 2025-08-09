/* eslint-disable */
import image1 from "@/public/IMG-20250809-WA0069.jpg";
import image2 from "@/public/IMG-20250809-WA0068.jpg";
import image3 from "@/public/IMG-20250809-WA0067.jpg";
import image4 from "@/public/IMG-20250809-WA0066.jpg";
import image5 from "@/public/IMG-20250809-WA0065.jpg";
import image6 from "@/public/IMG-20250809-WA0064.jpg";
import image7 from "@/public/IMG-20250809-WA0063.jpg";
import image8 from "@/public/ceylon-events.png";

export interface Project {
  src: any;
  src1: any;
  src2: any;
  src3: any;
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
    src: image2,
    src1: image4,
    src2: image1,
    src3: image4,
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
    industries: ["Emergency Services"],
    whyChooseUs: [
      "Healthcare domain expertise",
      "Proven real-time system experience",
      "Focus on security and compliance",
      "End-to-end support",
    ],
  },
  {
    src: image8,
    src1: image6,
    src2: image5,
    src3: image7,
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
    industries: ["Entertainment"],
    whyChooseUs: [
      "Event tech experience",
      "User-friendly design",
      "Comprehensive analytics",
      "Reliable support",
    ],
  },
  {
    src: image3,
    src1: image6,
    src2: image5,
    src3: image7,
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
    industries: ["Fitness Centers"],
    whyChooseUs: [
      "Experience in fitness tech",
      "AI integration capability",
      "User-focused design",
      "Secure payment expertise",
    ],
  },
];
