import arabAliMockup from "@/assets/arab-ali-hotel-web-mock.png";
import lensCraftMockup from "@/assets/lens-craft-mockup.png";
import travelEasyMockup from "@/assets/travel-easy-mockup.png";
import privateImage from "@/assets/private.jpg"

export const personalInfo = {
  name: "Ashenafi Mekit",
  title: "Software Developer",
  bio: "Software Developer specializing in full-stack applications using React.js, Next.js, NestJS, Express.js, PostgreSQL, MongoDB, and WordPress. Passionate about clean architecture, problem-solving, and building scalable real-world solutions.",
  email: "ashumekit502@gmail.com",
  location: "Addis Ababa, Ethiopia",
  github: "https://github.com/Ashenafimekit",
  linkedin: "https://linkedin.com/in/ashenafi-mekit",
};

export const skills = {
  frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "TanStack Query",
    "Zustand",
    "Framer Motion",
  ],
  backend: ["Node.js", "NestJS", "PostgreSQL", "MongoDB", "REST APIs"],
  devops: ["Docker", "GitHub Actions"],
  cms: ["WordPress"],
};

export const experience = [
  {
    id: 1,
    title: "Software Developer",
    company: "Ethio Telecom",
    location: "Addis Ababa, Ethiopia",
    period: "2025 - Present",
    description:
      "Building and maintaining internal systems and digital services using React, Next.js, NestJS, Express, PostgreSQL.",
    responsibilities: [
      "Built and maintained full-stack application features across both frontend and backend systems.",
      "Developed scalable internal tools and optimized existing system workflows.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions.",
    ],
  },
  {
    id: 2,
    title: "Software Developer Intern",
    company: "Afronex Tech Hub",
    location: "Dire Dawa, Ethiopia",
    period: "2023 - 2024",
    description:
      "Gained hands-on experience developing and customizing WordPress-based websites, managing content, and supporting client projects.",
    responsibilities: [
      "Developed and customized WordPress websites to meet client requirements.",
      "Configured themes, plugins, and content structures to ensure optimal website performance.",
      "Collaborated with the team to deliver responsive and user-friendly web solutions.",
    ],
  },
  {
    id: 3,
    title: "Software Engineering Student",
    company: "Addis Ababa Science and Technology University (AASTU)",
    location: "Addis Ababa, Ethiopia",
    period: "2019 - 2024",
    description:
      "Graduated with a degree in Software Engineering, building multiple full-stack applications and learning advanced software concepts.",
    responsibilities: [
      "Developed Integrated Healthcare Management System (Capstone Project) using React, Node.js, Express, and MongoDB.",
      "Built TravelEase — a travel assistance platform using React and Node.js.",
      "Gained solid foundation in data structures, system design, backend architecture, and WordPress development.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Ethio Telecom Fleet Management System",
    description:
      "Private internal system used by Ethio Telecom for managing fleet requests, drivers, vehicles, and locations. Designed for secure operational management within the organization.",
    image: privateImage,
    tech: ["Private"],
    github: "private",
    demo: "private",
    personal: false,
  },
  {
    id: 2,
    title: "Arab Ali Hotel Website",
    description:
      "Web application for hotel room reservations and showcasing services. Fully deployed on Vercel.",
    image: arabAliMockup,
    tech: ["React.js", "Express.js", "MongoDB"],
    github: "https://github.com/Ashenafimekit/AAH",
    demo: "https://arab-ali-hotel.vercel.app",
    personal: true,
  },
  {
    id: 3,
    title: "TravelEase",
    description:
      "Web platform for planning trips and managing cross-country bus bookings. v1 is deployed on Vercel, while v2 is in progress focusing on improved architecture and features.",
    image: travelEasyMockup,
    tech: ["React.js", "Express.js", "MongoDB"],
    github: "https://github.com/Ashenafimekit/TravelEasy",
    demo: "https://travel-easy-lime.vercel.app",
    personal: true,
  },
  {
    id: 4,
    title: "Lens Craft",
    description:
      "Personal photography website to showcase professional photography works, galleries, and visual content.",
    image: lensCraftMockup,
    tech: ["React.js", "Tailwind CSS"],
    github: "https://github.com/Ashenafimekit/LensCraft",
    demo: "https://lens-craft-photography.vercel.app",
    personal: true,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Abiy Mekoya",
    position: "Founder",
    company: "Heman Mining Company",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop",
    content:
      "Ashenafi delivered a clean and professional website for our company. His ability to understand requirements and translate them into functional software is impressive.",
    rating: 5,
  },
  {
    id: 2,
    name: "Team Lead",
    position: "Software Development Lead",
    company: "Ethio Telecom",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=400&fit=crop",
    content:
      "Ashenafi is a reliable developer who writes clean, maintainable code. He collaborates well with the team and always delivers high-quality work.",
    rating: 5,
  },
  {
    id: 3,
    name: "Project Supervisor",
    position: "Tech Mentor",
    company: "Afronex Tech Hub",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop",
    content:
      "He learns quickly, solves problems efficiently, and consistently delivers quality work. Ashenafi shows strong potential as a full-stack developer.",
    rating: 5,
  },
];
