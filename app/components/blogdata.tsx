
export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  views: number;
  likes: number;
  featured: boolean;
}

export const blogData: Blog[] = [
  {
    id: 1,
    title: "The Future of Web Development in 2024",
    excerpt: "Exploring the latest trends and technologies shaping the web development landscape, from AI integration to serverless architecture.",
    content: "The web development landscape is evolving rapidly, with new technologies and methodologies emerging every year. In 2024, we're seeing unprecedented changes in how we build, deploy, and maintain web applications. From the rise of edge computing to the integration of artificial intelligence in development workflows, the future looks both exciting and challenging. This comprehensive guide explores the key trends that will define web development in the coming years.",
    author: "John Smith",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Technology",
    image: "blog1.jpeg",
    tags: ["React", "NextJS", "TypeScript", "AI"],
    views: 1200,
    likes: 89,
    featured: true
  },
  {
    id: 2,
    title: "UI/UX Design Principles for Modern Apps",
    excerpt: "Essential design principles that create engaging user experiences in today's digital landscape.",
    content: "Creating exceptional user experiences requires a deep understanding of both design principles and user psychology. Modern applications must balance aesthetic appeal with functional efficiency, ensuring that users can accomplish their goals while enjoying the journey. This article dives into the core principles that separate good designs from great ones, covering everything from visual hierarchy to interaction design patterns.",
    author: "Sarah Johnson",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Design",
    image: "blog2.jpeg",
    tags: ["UI/UX", "Design", "Mobile", "User Research"],
    views: 950,
    likes: 67,
    featured: false
  },
  {
    id: 3,
    title: "Building Scalable Backend Systems",
    excerpt: "Best practices for creating robust and scalable backend architectures that grow with your business.",
    content: "Scalability is not just about handling more users; it's about building systems that can adapt and evolve as your business grows. This comprehensive guide covers architectural patterns, database design, caching strategies, and monitoring techniques that ensure your backend can handle whatever comes its way. Learn from real-world examples and industry best practices.",
    author: "Mike Chen",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Backend",
    image: "blog3.jpeg",
    tags: ["Node.js", "MongoDB", "AWS", "Architecture"],
    views: 780,
    likes: 45,
    featured: false
  },
  {
    id: 4,
    title: "Machine Learning in Web Applications",
    excerpt: "Integrating AI and ML capabilities into modern web applications for enhanced user experiences.",
    content: "The integration of machine learning into web applications is no longer a futuristic concept—it's happening right now. From personalized recommendations to intelligent chatbots, ML is transforming how users interact with web applications. This article explores practical approaches to implementing ML features, discusses the tools and frameworks available, and provides real-world examples of successful implementations.",
    author: "Emily Davis",
    date: "2024-01-08",
    readTime: "10 min read",
    category: "AI/ML",
    image: "blog4.jpeg",
    tags: ["Machine Learning", "Python", "TensorFlow", "API"],
    views: 1100,
    likes: 92,
    featured: true
  },
  {
    id: 5,
    title: "Cloud Computing Best Practices",
    excerpt: "Optimizing cloud infrastructure for performance, security, and cost efficiency in modern applications.",
    content: "Cloud computing has revolutionized how we deploy and scale applications, but with great power comes great responsibility. Understanding best practices for cloud architecture, security, and cost optimization is crucial for any modern development team. This guide covers everything from choosing the right services to implementing proper monitoring and disaster recovery strategies.",
    author: "David Wilson",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "Cloud",
    image: "blog5.jpeg",
    tags: ["AWS", "Azure", "DevOps", "Security"],
    views: 650,
    likes: 34,
    featured: false
  },
  {
    id: 6,
    title: "Mobile App Development Trends",
    excerpt: "Latest trends and frameworks in mobile application development for iOS and Android platforms.",
    content: "The mobile app development landscape continues to evolve at a rapid pace, with new frameworks, tools, and methodologies emerging regularly. Cross-platform development has matured significantly, offering developers more options than ever before. This comprehensive overview examines the current state of mobile development, from native approaches to hybrid solutions, and what the future holds for mobile app creators.",
    author: "Lisa Anderson",
    date: "2024-01-03",
    readTime: "9 min read",
    category: "Mobile",
    image: "blog6.jpeg",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    views: 890,
    likes: 56,
    featured: false
  },
];

export const categories = ['All', 'Technology', 'Design', 'Backend', 'AI/ML', 'Cloud', 'Mobile', 'Security', 'Performance'];
