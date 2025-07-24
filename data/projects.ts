import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    slug: "code2site",
    title: "Code2Site",
    description: "A website that generates website code from natural language descriptions.",
    image: "/code2site/Home_Page.png",
    techStack: ["Nextjs", "Google Gemini API", "TypeScript", "Web Containers", "Tailwind CSS"],
    githubUrl: "https://github.com/piyushpawar079/code2site",
    liveUrl: "https://code2site.vercel.app",
    demoVideo: "/code2site/Part1.mp4",
    content: [
      "✨ AI-Powered Generation: Simply describe your website idea in plain English, and watch as AI generates clean, professional code instantly.",
      "👁️ Real-Time Preview: See your website come to life as it's being built - test functionality and interactions directly in your browser",
      "🔧 Smart Iterations: Not happy with something? Just ask for changes in natural language - 'make the header blue' or 'convert it to dark mode' - and the AI will modify the code accordingly.",
      "📁 Complete Project Export: Download your entire project as a ZIP file, ready for deployment or further customization",
      "⚡ Browser-Based Development: Powered by WebContainers technology - everything runs directly in your browser, no setup required!"
    ],
    additionalImages: [
      "/code2site/Builder_Page.png",
      "/code2site/Code_Output.png",
      "/code2site/Preview_Output.png"
    ]
  },
  {
    id: 2,
    slug: "notesync",
    title: "noteSync",
    description: "An AI-powered Notion clone with real-time collaboration features including live cursors, live rich text editing, AI chat.",
    image: "/noteSync/Home_Page.png",
    techStack: ["Next.js", "TypeScript", "Clerk Auth", "Cloudflare Workers", "Liveblocks", "Firebase", "Hono", "shadcn/ui", "Tailwind CSS", "BlockNote Editor"],
    githubUrl: "https://github.com/piyushpawar079/notesync",
    liveUrl: "https://note-sync-five.vercel.app",
    demoVideo: "/noteSync/Demo_Video.mp4",
    content: [
      "🤝 Real-time Collaboration: Multiple users can edit the same document simultaneously with live cursors showing exactly where each collaborator is working, each with unique colors for easy identification",
      "🤖 AI Document Chat: Powered by Gemini AI, users can ask questions about their document content and get instant, contextual answers based on the entire document",
      "📝 Smart Summarization: Generate intelligent document summaries using Facebook's BART model via Cloudflare Workers AI",
      "👥 Presence Indicators: See the number of active users editing the document with user avatars displayed in real-time",
      "🔐 Secure Authentication: Complete user management with Clerk authentication - users must be signed in to access any features",
      "📄 Document Management: Create, delete, and manage multiple documents with ownership controls - only document owners can delete documents or invite collaborators",
      "⚡ Powered by Cutting-edge AI: Leverages @cf/facebook/bart-large-cnn for summarization, @cf/meta/m2m100-1.2b for translation, and Gemini for conversational AI"
    ],
    additionalImages: [
      "/noteSync/Multi_User.png",
      "/noteSync/Editor_Page.png",
      "/noteSync/Document_Page.png",
      "/noteSync/Chat.png"
    ]
  },
  {
    id: 3,
    slug: "mystery-message",
    title: "Mystery Message",
    description: "A fun and anonymous feedback platform built with Next.js, MongoDB, and NextAuth where users can sign up, verify their email, and send or receive messages—completely anonymously.",
    image: "/mystery_message/Home_Page.png",
    techStack: ["Nextjs", "TypeScript", "Next Auth", "MongoDB"],
    githubUrl: "https://github.com/piyushpawar079/fitness-tracker",
    liveUrl: "https://mystery-message-one-brown.vercel.app",
    content: [
      "Email-based signup with 2-hour expiring verification (via Resend). Only verified users can access the main app",
      "Anonymous messaging system where users can send and receive messages without revealing their identity",
      "Dashboard to view received messages",
      "Explore the Users page and send anonymous notes to anyone",
      "Built-in preference for accepting messages (toggleable)",
    ],
    additionalImages: [
      "/mystery_message/Dashboard_Page.png",
      "/mystery_message/Send_Message_Page.png",
      "/mystery_message/Users_Page.png"
    ]
  },
  {
    id: 4,
    slug: "cv-portfolio",
    title: "Computer Vision Application",
    description: "A real-time computer vision web application featuring multiple interactive demos including virtual mouse, virtual painter, volume control, pong game, fitness tracker, and presentation controller.",
    image: "/cv_portfolio/Home_Page.png",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "ShadCN", "Flask", "Socket IO", "OpenCV", "MediaPipe"],
    githubUrl: "https://github.com/piyushpawar079/CV_Portfolio",
    liveUrl: "https://cv-portfolio-ruby.vercel.app",
    content: [
      "🖱️ Virtual Mouse: Control your cursor with hand gestures",
      "🎨 Virtual Painter: Draw in the air with finger tracking",
      "🔊 Volume Control: Adjust system volume using hand movements",
      "🏓 Pong Game: Play a classic game using your hands as paddles",
      "🏋️‍♂️ Fitness Tracker: Track your workouts and count reps with real-time feedback",
      "📊 Presentation Controller: Navigate slides using hand gestures",
    ],
    additionalImages: [
      "/cv_portfolio/Projects_Page.png",
      "/cv_portfolio/Single_Project_Page.png",
      "/cv_portfolio/Contact_Page.png",
    ]
  },
  {
    id: 5,
    slug: "music-verse",
    title: "MusicVerse",
    description: "MusicVerse is a beautifully designed, fully responsive platform for discovering and purchasing premium music courses online.",
    image: "/music_verse/Home_Page.png",
    techStack: ["Nextjs", "Tailwind CSS", "Aceternity UI","TypeScript"],
    githubUrl: "https://github.com/piyushpawar079/musicverse",
    liveUrl: "https://musicverse-alpha.vercel.app",
    demoVideo: "/music_verse/Demo.mp4",
    content: [
      "Built with Next.js and styled using the elegant Aceternity UI components, the platform offers a smooth, modern, and immersive learning experience for music enthusiasts of all levels.",
      "🎹 Browse Courses – Explore a wide variety of music courses (instruments, vocals etc.).",
      "💎 Modern UI – Crafted using Aceternity UI for an aesthetic and intuitive design."
    ],
    additionalImages: [
      "/music_verse/Courses_Page.png",
      "/music_verse/Instructors.png",
      "/music_verse/Join_Us_Page.png"
    ]
  },
  {
    id: 6,
    slug: "e-commerce",
    title: "MernWare",
    description: "A fully functional e-commerce website for clothing, built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).",
    image: "/mernware/Home_Page.png",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Redux", "Tailwind CSS"],
    githubUrl: "https://github.com/piyushpawar079/ecommerce-mern",
    liveUrl: "https://mernware.onrender.com",
    content: [
      "Modern, responsive UI with a clean and intuitive design. Browse a wide range of clothing items with real-time filtering",
      "Detailed product pages with multiple images, sizes, tags, and descriptions. Full-fledged cart system with quantity management",
      "Secure admin panel for managing products & orders. CRUD operations for products"
    ],
    additionalImages: [
      "/mernware/Collections_Page.png",
      "/mernware/AboutUs_Page.png",
      "/mernware/Single_Product_Page.png",
      "/mernware/Cart_Page.png",
      "/mernware/Admin_Products_Page.png",
      "/mernware/Admins_View_Orders_Page.png"
    ]
  }
];