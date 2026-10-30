// ALL CONTENT LIVES HERE. Edit text and links in this file only.
import { SiReact, SiExpress, SiNodedotjs, SiJavascript, SiTailwindcss, SiPython,
  SiPostgresql, SiPrisma, SiFlutter, SiGithub, SiJest } from "react-icons/si";

export const person = {
  name: "Kidus Kidanewold",
  greeting: "ሰላም",
  headline: "CS student building reliable backend systems and full-stack products in Addis Ababa",
  availability: "Open to internships and junior roles",
  email: "kidakidanwoled@gmail.com",
  formKey: "725d0c12-2f94-4987-bed4-1d318b22c568",
  github: "https://github.com/kidusk12",
  linkedin: "https://www.linkedin.com/in/kidus-kidanewold-78b243341/",
  photo: "/profile.jpg", // put your photo in /public/profile.jpg
  location: "Addis Ababa, Ethiopia",
};

export const nav = [
  { label: "Work", href: "#work" }, { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" }, { label: "About", href: "#about" },
  { label: "Hobbies", href: "#hobbies" }, { label: "Resume", href: "/resume" },
  { label: "Contact", href: "#contact" },
];

// Leave a url as "" to hide its button automatically.
export const projects = [
  {
    featured: true,
    title: "Berhan Stock: Multi-Branch Stock Management",
    role: "Team Lead, Backend Developer · Team of 5",
    summary: "Web app for businesses with several shops or warehouses in Ethiopia. Each branch has its own stock, every change is recorded with who made it and why, and managers are warned before a product runs out.",
    bullets: [
      "4 roles (Admin, Branch Manager, Staff, Auditor) with permissions enforced on the server; sensitive actions go to an append-only audit log",
      "One transaction-safe stock engine with row locking: in testing, 20 users selling the last unit caused no overselling and no duplicate invoice numbers",
      "In local load testing: 0% errors at 100 users, 95% of requests under 228 ms",
      "Amharic/English interface, Ethiopian calendar, birr, VAT/TOT invoices",
    ],
    tech: ["React", "Vite", "Tailwind", "Node.js", "Express", "Prisma", "PostgreSQL", "JWT"],
    live: "https://berhanstock.netlify.app/",
    code: "https://github.com/kidusk12/Stock",
    note: "The backend runs on a free tier, so the first load may take a moment.",
    image: "/screenshots/stock.png", // [[SCREENSHOT_1]]
    imageAlt: "Screenshot of the Berhan Stock app showing a screen inside the system",
  },
  {
    featured: true,
    title: "Ethio-Airbnb",
    role: "Team Lead, Backend Developer · Team of 5",
    summary: "Short-term rental platform for Ethiopia connecting hosts and guests, with a React web app and a Flutter mobile app on one shared backend API. Built at the INSA Cyber Talent Center Summer Camp.",
    bullets: [
      "Guest/Host roles, listing management, search and filters by location, price and date availability",
      "Booking system with double-booking prevention, plus reviews and star ratings",
      "Simulated payment flow and basic admin moderation",
      "Led the team: sprint-based Agile in Jira, feature branches merged via reviewed pull requests",
    ],
    tech: ["React", "Vite", "Flutter", "Node.js", "Express", "PostgreSQL", "JWT"],
    live: "https://ethio-airbnb-delta.vercel.app/",
    code: "https://github.com/kidusk12/Ethio-Airbnb",
    image: "/screenshots/airbnb.jpg", // [[SCREENSHOT_2]]
    imageAlt: "Screenshot of the Ethio-Airbnb app showing a screen inside the platform",
  },
  {
    title: "Fake Store Flutter App",
    role: "Solo · Practice project on the Fake Store API",
    summary: "A shopping app built to practise clean architecture and state management in Flutter.",
    bullets: [
      "State management with Riverpod and clean architecture",
      "Cart with local persistence and session persistence",
      "Product search and category filtering with loading, empty and error states",
      "Responsive layout",
    ],
    tech: ["Flutter", "Dart", "Riverpod", "go_router"],
    live: "",
    code: "https://github.com/kidusk12/fake_Store",
  },
  {
    title: "Fitmeal",
    role: "Solo · Telegram bot · Older project",
    summary: "A Telegram food-delivery bot for people who work out. Users pick recipes and portions (even in grams) and get the closest matching meals, which may add or omit some of the items they asked for. They order from the bot, and a kitchen/admin side sees each order with its location and details.",
    bullets: [],
    tech: ["Python", "Telegram Bot"],
    live: "",
    code: "https://github.com/kidusk12/Fitmeal",
    note: "No live demo.",
  },
];

export const skills = [
  { name: "React", icon: SiReact }, { name: "Express", icon: SiExpress },
  { name: "Node.js", icon: SiNodedotjs }, { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss }, { name: "Python", icon: SiPython },
  { name: "PostgreSQL", icon: SiPostgresql }, { name: "Prisma", icon: SiPrisma },
  { name: "Dart/Flutter", icon: SiFlutter }, { name: "GitHub", icon: SiGithub },
  { name: "Testing", icon: SiJest },
];

export const experience = [
  { title: "BSc Computer Science (3rd year)", place: "American College of Technology, Addis Ababa", note: "Expected graduation: June 2028" },
  { title: "Summer Camp, Development track", place: "INSA Cyber Talent Center", note: "Ethio-Airbnb was built as part of this program." },
  { title: "Leadership", place: "Betel St. Michael Church, Addis Ababa, Ethiopia", note: "" },
];

export const about = "I'm a third-year Computer Science student at American College of Technology in Addis Ababa. Backend is my strongest area, but I enjoy building full products from database to screen. I learn by building, and I want to understand how things work instead of copying solutions. I have led two teams of five, keeping work organised with sprints, branches and pull requests. I like building for the Ethiopian context: Amharic interfaces, the Ethiopian calendar and birr. I also write stories in my free time.";

export const hobbiesIntro = "I write in my free time. Storytelling helps me with clear structure and communication.";

export const hobbies = [
  { title: "Lidya", format: "A coming of age/drama theatre play", text: `ትዕይንት 1
(ሊድያ ተጣድፋለች ወደ ሰንበት ት/ቤት ልትሔድ ነው።እናቷና አባቷ ሶፋ ላይ ተቀምጠው ቲቪ እያዩ ነው።ትንሹ ወንድሟ መሬት ላይ ቁጭ/ተኝቶ ብሎ ጌም እየተጫወተ ነው።)
የሊድያ እናት (መሰረት) ፡
አንቺ ልጅ ሁሌ ሲረፍድ ከምትጣደፊ ቀደም ብለሽ ተዘጋጂ ስትባይ አትሰሚም አይደል?
ሊድያ፡
ነጠላ ጫማዬን አይታቹታል?......
ማነው ጫማዬን ያረገው?` },
  { title: "Christmas Melody Eve", format: "A short film/ad - screenplay", text: `Shot #1 - ወደ ቤቱ በር እየመጣ
Camera angle - Eye-level
Camera Mov't - Static
Shot Size - Full to Medium Shot
Composition - Symmetric Single

Shot #2 - የበሩን እጀታ ይከፍተዋል …. በሩ ይዘጋል/ይገባል
Camera angle: Neutral angle
Camera Mov't - Static
Shot Size - Insert/Close-up
Composition - Center` },
  { title: "The Weight of Silence", format: "A thriller short story", text: `PART ONE: Detective Alemayehu — Sunday, May 17th (Day 3)
The mother's hands wouldn't stop moving. Wringing, twisting, reaching for things that weren't there. I'd seen it before—the body searching for something to do when the mind can't process what's happening.
"Detective," she said, her voice hoarse from crying, "my son doesn't just disappear. Dawit is responsible. He's... he's the only one who—" She stopped herself.` },
  { title: "Zekariyas", format: "A crime drama", text: `The television in the corner of the room is on but nobody is watching it.
A news anchor speaks about a discovery made in the early hours. She says bodies the way people say weather.
Behind her, footage of blue lights in the dark. Police tape. A building that used to be something else.
Detective Rahma enters the room and stops.
Three bodies. The smell. Her colleagues already moving — photographing, measuring, speaking into phones.
The room is loud with procedure.
She stands still in the middle of it.` },
  { title: "Tilla", format: "A story · in development", text: "A story set in 1930s Addis Ababa under Italian occupation: a hero/drama about a boy from Addis." },
];

// Résumé page content (plain text, ATS-safe)
export const resume = {
  summary: "Third-year Computer Science student with a backend focus, experienced in leading teams of five to build and deploy full-stack web and mobile products with Node.js, PostgreSQL and React. Open to internships and junior roles.",
  skills: "React, Express, Node.js, JavaScript, Tailwind CSS, Python, PostgreSQL, Prisma, Dart/Flutter, GitHub, Testing",
  projects: [
    { name: "Berhan Stock, Multi-Branch Stock Management", role: "Team Lead, Backend Developer (team of 5)", link: "berhanstock.netlify.app · github.com/kidusk12/Stock",
      bullets: [
        "Led a 5-person team building a multi-branch stock system with a Node.js, Express, Prisma and PostgreSQL backend and a React frontend; designed the database and the stock engine.",
        "Implemented server-enforced access control for 4 roles, an append-only audit log, and a transaction-safe stock engine that prevented overselling in concurrent-sale testing.",
      ] },
    { name: "Ethio-Airbnb", role: "Team Lead, Backend Developer (team of 5)", link: "ethio-airbnb-delta.vercel.app · github.com/kidusk12/Ethio-Airbnb",
      bullets: [
        "Led a 5-person team building a rental platform with a React web app, a Flutter mobile app and a shared Node.js, Express and PostgreSQL API, using sprint-based Agile in Jira and reviewed pull requests.",
        "Developed backend features for listings, search and filters, bookings with double-booking prevention, and JWT authentication.",
      ] },
    { name: "Fake Store Flutter App", role: "Solo practice project", link: "github.com/kidusk12/fake_Store",
      bullets: [
        "Built a Flutter shopping app on the Fake Store API using Riverpod, go_router and clean architecture.",
        "Implemented a cart with local persistence, product search, category filters, and loading, empty and error states.",
      ] },
  ],
  education: "American College of Technology, Addis Ababa: BSc Computer Science (3rd year), expected graduation June 2028",
  training: [
    "INSA Cyber Talent Center: Summer Camp, Development track",
    "Leadership role, Betel St. Michael Church, Addis Ababa, Ethiopia",
  ],
  languages: "Amharic (fluent), English (fluent)",
};
