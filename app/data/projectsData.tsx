/* eslint-disable */
import image1 from "@/public/resumed-web.png";
import image2 from "@/public/IMG-20250809-WA0068.jpg";
import image3 from "@/public/IMG-20250809-WA0067.jpg";
import image4 from "@/public/IMG-20250809-WA0066.jpg";
import image5 from "@/public/IMG-20250809-WA0065.jpg";
import image6 from "@/public/IMG-20250809-WA0064.jpg";
import image7 from "@/public/IMG-20250809-WA0063.jpg";
import image8 from "@/public/01 Free iPhone 16 Pro Mockup On Rock.png";
import image9 from "@/public/rescuemed hand.jpg";
import image10 from "@/public/web.png";
import image11 from "@/public/event.png";
import image12 from "@/public/Man Holding iPhone Mockup.png";

export interface Project {
  src: any;
  src1: any;
  src2: any;
  src3: any;
  duration: string;
  year: string;
  region: string;
  problem: string;
  goal: string;
  solution: string;
  outcome: string;
  process1: string;
  process1description: string;
  process2: string;
  process2description: string;
  process3: string;
  process3description: string;
  alt: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  detailedDescription: string;
  keyFeatures: string[];
  benefits: string[];
  industries: string[];
  whyChooseUs: string[];
}

export const projects: Project[] = [
  {
    src: image2,
    src1: image1,
    src2: image4,
    src3: image9,
    duration: "1 year",
    year: "2025",
    region: "Sri Lanka",
    problem:
      "Inefficient communication between ambulance teams and hospitals causes delays in emergency care, incomplete data transfer, and lack of hospital preparedness during critical situations.",
    goal: "To streamline emergency response by enabling instant and accurate communication, ensuring hospitals receive vital patient details and can prepare resources before arrival, ultimately improving patient survival rates.",
    solution:
      "A secure, real-time platform that connects ambulances with hospitals through web and mobile apps, enabling live patient data sharing, GPS tracking, ETA updates, and hospital resource availability in one integrated system.",
    outcome:
      "Reduced response times, improved data accuracy, and better-prepared hospital teams, leading to faster treatment initiation, optimized resource allocation, and higher chances of saving lives.",
    process1: "Requirement gathering and analysis.",
    process1description:
      "Engaging ambulance crews, hospital staff, and emergency coordinators to identify pain points, document current workflows, and define both functional and technical requirements through surveys, interviews, and field observations.",
    process2: "System design and architecture.",
    process2description:
      "Designing a scalable, fault-tolerant platform with secure data encryption, API integrations for hospital systems, and real-time GPS tracking, supported by detailed wireframes, data flow diagrams, and architecture plans.",
    process3: "Development and testing.",
    process3description:
      "Building the platform using modern frameworks with WebSockets for real-time updates, conducting rigorous unit, integration, and user acceptance testing to ensure reliability, speed, and ease of use, followed by pilot trials for feedback.",
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
    src1: image12,
    src2: image10,
    src3: image11,
    duration: "6 months",
    year: "2024",
    region: "Sri Lanka",
    problem:
      "Inefficient event management and ticketing processes often lead to disorganized planning, slow registrations, and poor attendee engagement, reducing overall event success.",
    goal: "To simplify event organization by centralizing all planning, promotion, and ticketing activities into one platform, enhancing both organizer efficiency and attendee experience.",
    solution:
      "A comprehensive, user-friendly platform for event management and ticketing that offers event creation, online registrations, secure payments, real-time attendee tracking, and automated notifications.",
    outcome:
      "Streamlined event workflows, faster registrations, reduced operational costs, and increased ticket sales through improved accessibility and marketing reach.",
    process1: "Requirement gathering and analysis.",
    process1description:
      "Collaborating with event organizers, vendors, and attendees to identify common challenges, map workflows, and define functional and technical requirements through interviews, surveys, and competitor analysis.",
    process2: "System design and architecture.",
    process2description:
      "Designing a scalable, secure, and mobile-friendly platform with payment gateway integration, real-time analytics, and customizable event pages, supported by wireframes and data flow diagrams.",
    process3: "Development and testing.",
    process3description:
      "Building the platform using modern frameworks, integrating secure payment processing, and performing rigorous unit, integration, and user acceptance testing to ensure smooth performance and user satisfaction.",
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
    duration: "4 months",
    year: "2024",
    region: "Sri Lanka",
    problem:
      "Inefficient fitness management and low user engagement result in poor member retention, disorganized scheduling, and limited communication between trainers, staff, and members.",
    goal: "To enhance user experience and streamline fitness center operations by centralizing class schedules, membership management, trainer coordination, and performance tracking.",
    solution:
      "An all-in-one fitness management platform offering membership tracking, class bookings, trainer assignments, progress monitoring, payment processing, and push notifications to keep users engaged.",
    outcome:
      "Improved user satisfaction through personalized experiences, increased operational efficiency for staff, better member retention rates, and higher overall fitness center revenue.",
    process1: "Requirement analysis and user feedback.",
    process1description:
      "Gathering insights from fitness center managers, trainers, and members through surveys, interviews, and feedback forms to identify pain points and desired features.",
    process2: "UI/UX design and prototyping.",
    process2description:
      "Creating intuitive, mobile-friendly, and visually appealing interfaces with easy navigation for booking classes, tracking workouts, and managing memberships.",
    process3: "Development and integration.",
    process3description:
      "Building the platform using scalable technologies, integrating payment gateways, wearable device data, and CRM tools, followed by thorough testing to ensure smooth performance.",
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

    industries: ["Fitness Centers"],
    whyChooseUs: [
      "Experience in fitness tech",
      "AI integration capability",
      "User-focused design",
      "Secure payment expertise",
    ],
  },
];
