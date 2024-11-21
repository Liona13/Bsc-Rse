export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Your Name",
  title: process.env.NEXT_PUBLIC_SITE_TITLE || "Full Stack Developer Portfolio",
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "Senior Software Engineer specializing in full-stack development with React, Node.js, and Cloud Technologies",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com",
  ogImage: process.env.NEXT_PUBLIC_OG_IMAGE || "/og.jpg",
  links: {
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com/yourusername",
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/yourusername",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/yourusername",
    email: process.env.NEXT_PUBLIC_EMAIL || "your.email@example.com",
  },
  resume: {
    title: "Senior Software Engineer",
    location: "San Francisco, CA",
    phone: "+1 (123) 456-7890",
    summary: "Full Stack Developer with 5+ years of experience in building scalable web applications. Specialized in React, Node.js, and Cloud Architecture. Strong background in leading development teams and implementing modern development practices.",
    skills: {
      technical: [
        "Frontend: React, Next.js, TypeScript, TailwindCSS",
        "Backend: Node.js, Python, PostgreSQL, MongoDB",
        "Cloud: AWS, Docker, Kubernetes, CI/CD",
        "Testing: Jest, Cypress, React Testing Library"
      ],
      tools: [
        "Git & GitHub",
        "VS Code",
        "Jira & Confluence",
        "Figma & Adobe XD"
      ],
      soft: [
        "Team Leadership",
        "Technical Mentoring",
        "Project Management",
        "Communication"
      ]
    },
    experience: [
      {
        title: "Senior Software Engineer",
        company: "TechCorp Inc.",
        period: "2020 - Present",
        location: "San Francisco, CA",
        achievements: [
          "Led development of microservices architecture serving 1M+ users",
          "Reduced application load time by 40% through optimization",
          "Mentored 5 junior developers and established code review practices",
          "Implemented CI/CD pipeline reducing deployment time by 60%"
        ]
      },
      {
        title: "Full Stack Developer",
        company: "Digital Solutions LLC",
        period: "2018 - 2020",
        location: "New York, NY",
        achievements: [
          "Developed 20+ responsive web applications for clients",
          "Increased test coverage from 40% to 90%",
          "Optimized database queries reducing response time by 50%",
          "Collaborated with UX team to improve user satisfaction by 35%"
        ]
      }
    ],
    education: [
      {
        degree: "Master of Science in Computer Science",
        school: "Stanford University",
        period: "2015 - 2017",
        location: "Stanford, CA",
        gpa: "3.9/4.0",
        achievements: [
          "Specialization in Artificial Intelligence and Machine Learning",
          "Graduate Research Assistant in Human-Computer Interaction Lab",
          "Published 2 papers in international conferences"
        ]
      },
      {
        degree: "Bachelor of Science in Software Engineering",
        school: "MIT",
        period: "2011 - 2015",
        location: "Cambridge, MA",
        gpa: "3.8/4.0",
        achievements: [
          "Dean's List for all semesters",
          "Led the university's Web Development Club",
          "Won first place in Annual Hackathon"
        ]
      }
    ],
    certifications: [
      {
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2023",
        id: "AWS-123456"
      },
      {
        name: "Google Cloud Professional Developer",
        issuer: "Google Cloud",
        date: "2022",
        id: "GCP-789012"
      }
    ],
    languages: [
      { name: "English", level: "Native" },
      { name: "Spanish", level: "Professional" },
      { name: "Mandarin", level: "Conversational" }
    ]
  }
} as const 