import { StaticImageData } from "next/image";

import blogImage1 from "@/public/blog1.jpeg";
import blogImage2 from "@/public/blog2.jpeg";
import blogImage3 from "@/public/blog3.jpeg";
import blogImage4 from "@/public/blog4.jpeg";

import authImg1 from "@/public/default-img.png";
import authImg2 from "@/public/default-img.png";
import authImg3 from "@/public/default-img.png";
import authImg4 from "@/public/default-img.png";

export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: StaticImageData;
  authorDesignation: string;
  date: string;
  readTime: string;
  category: string;
  image: StaticImageData;
  tags: string[];
  views: number;
  likes: number;
  featured: boolean;
}

export const blogData: Blog[] = [
  {
    id: 1,
    title: "The Future of Web Development in 2024",
    excerpt:
      "Exploring the latest trends and technologies shaping the web development landscape, from AI integration to serverless architecture.",
    content: `
    The web development landscape is evolving rapidly, with new technologies and methodologies emerging every year. In 2024, we're seeing unprecedented changes in how we build, deploy, and maintain web applications. From the rise of edge computing to the integration of artificial intelligence in development workflows, the future looks both exciting and challenging. This comprehensive guide explores the key trends that will define web development in the coming years.
    
    ## AI-Powered Development
    One of the most significant shifts in 2024 is the widespread adoption of AI-powered tools in development workflows. Developers now rely on AI assistants like GitHub Copilot, CodeWhisperer, and other LLM-based tools to write boilerplate code, suggest improvements, and even perform automated testing. These tools increase productivity while reducing the time needed to ship features.
    
    ## Edge Computing and Serverless Architectures
    Traditional server models are giving way to edge computing and serverless functions. Platforms like Vercel, Netlify, and Cloudflare Workers allow developers to deploy code closer to the user, resulting in faster response times and improved performance. This shift also promotes microservice-based designs that scale automatically without complex infrastructure management.

    ## The Rise of TypeScript and Modern Frameworks
    JavaScript continues to dominate, but TypeScript is now the default for many projects due to its improved type safety and developer experience. Frameworks like Next.js 14 and Remix are pushing boundaries with improved routing, file-based APIs, and enhanced performance optimizations out-of-the-box.

    ![AI Development Tools](/kota.jpg)

    ## Jamstack and Composable Architecture
    Content-heavy sites are now embracing the Jamstack architecture — decoupling frontend from backend using APIs and static site generators. Combined with headless CMS platforms like Sanity, Strapi, and Contentful, this approach improves scalability and enables better DX for content teams.

    ## Focus on Developer Experience (DX)
    Tools like TurboRepo, Vite, and Nx are streamlining monorepo development and reducing build times. Additionally, design systems like Tailwind UI and Radix UI are standardizing UI development, ensuring visual consistency across teams.

    ## WebAssembly (WASM) Gaining Ground
    WebAssembly is no longer just experimental — it's becoming mainstream for use cases like gaming, video editing, and running complex logic in the browser. Languages like Rust and Go are being compiled to WASM to power high-performance frontend modules.

    ![Web Development Trends](https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop)

    ## The Verdict
    2024 is a turning point for web development. As we move towards AI-augmented programming, edge-first infrastructure, and composable architectures, developers need to stay curious and adaptable. The stack you use today might look completely different in just 12 months — and that’s what makes this space so exciting.

    **Ready to embrace the future? Start experimenting with one of these trends today.**
  `,
    author: "John Smith",
    authorDesignation: "Senior Developer",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Technology",
    authorImage: authImg1,
    image: blogImage1,
    tags: [
      "React",
      "NextJS",
      "TypeScript",
      "AI",
      "Serverless",
      "WASM",
      "Jamstack",
    ],
    views: 1200,
    likes: 89,
    featured: true,
  },

  {
    id: 2,
    title: "UI/UX Design Principles for Modern Apps",
    excerpt:
      "Essential design principles that create engaging user experiences in today's digital landscape.",
    content:
      "Creating exceptional user experiences requires a deep understanding of both design principles and user psychology. Modern applications must balance aesthetic appeal with functional efficiency, ensuring that users can accomplish their goals while enjoying the journey. This article dives into the core principles that separate good designs from great ones, covering everything from visual hierarchy to interaction design patterns.",
    author: "Sarah Johnson",
    authorDesignation: "UX Designer",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Design",
    authorImage: authImg2,
    image: blogImage2,
    tags: ["UI/UX", "Design", "Mobile", "User Research"],
    views: 950,
    likes: 67,
    featured: false,
  },
  {
    id: 3,
    title: "Building Scalable Backend Systems",
    excerpt:
      "Best practices for creating robust and scalable backend architectures that grow with your business.",
    content:
      "Scalability is not just about handling more users; it's about building systems that can adapt and evolve as your business grows. This comprehensive guide covers architectural patterns, database design, caching strategies, and monitoring techniques that ensure your backend can handle whatever comes its way. Learn from real-world examples and industry best practices.",
    author: "Mike Chen",
    authorDesignation: "Backend Engineer",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Backend",
    authorImage: authImg3,
    image: blogImage3,
    tags: ["Node.js", "MongoDB", "AWS", "Architecture"],
    views: 780,
    likes: 45,
    featured: false,
  },
  {
    id: 4,
    title: "Machine Learning in Web Applications",
    excerpt:
      "Integrating AI and ML capabilities into modern web applications for enhanced user experiences.",
    content:
      "The integration of machine learning into web applications is no longer a futuristic concept—it's happening right now. From personalized recommendations to intelligent chatbots, ML is transforming how users interact with web applications. This article explores practical approaches to implementing ML features, discusses the tools and frameworks available, and provides real-world examples of successful implementations.",
    author: "Emily Davis",
    authorDesignation: "AI Specialist",
    date: "2024-01-08",
    readTime: "10 min read",
    category: "AI/ML",
    authorImage: authImg4,
    image: blogImage4,
    tags: ["Machine Learning", "Python", "TensorFlow", "API"],
    views: 1100,
    likes: 92,
    featured: true,
  },
];

export const categories = [
  "All",
  "Technology",
  "Design",
  "Backend",
  "AI/ML",
  "Cloud",
  "Mobile",
  "Security",
  "Performance",
];
