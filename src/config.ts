export const siteConfig = {
  name: "Vannheng Chang",
  title: "Senior iOS Application Developer",
  description: "Portfolio website of Vannheng Chang",
  accentColor: "#1d4ed8",
  social: {
    email: "changvannheng@icloud.com",
    linkedin: "https://linkedin.com/in/vannhengchang",
  },
  aboutMe:
    "Senior iOS Application Developer with around 9 years of experience building reliable, well-structured apps across fintech, CRM, and hospitality. I combine solid technical skills in Swift and UIKit with strong collaboration — leading iOS teams, working with internal and outsourced partners, and guiding projects from idea to App Store. I'm driven by clean code and continuous learning.",
  skills: [
    "Swift",
    "Objective-C",
    "UIKit",
    "SwiftUI",
    "CocoaPods",
    "SPM",
    "MVC / MVP / MVVM",
    "Clean Architecture",
    "Modular Architecture",
    "TestFlight",
    "App Store Connect",
    "Git",
    "Git Flow",
    "JIRA",
    "Agile Scrum",
    "Kanban",
  ],
  projects: [
    {
      name: "AMK Mobile Banking",
      description:
        "Mobile Banking application for customers of AMK Microfinance Institution Plc. in Cambodia, covering account management, transfers, QR payments, and financial services.",
      link: "https://apps.apple.com/ao/app/amk-mobile/id1481986025",
      skills: ["Swift", "UIKit", "TestFlight", "App Store Connect"],
    },
    {
      name: "Set2Sell by iDcrm",
      description:
        "Fully disconnected and advanced Microsoft Dynamics CRM client for iPad, with offline data storage that syncs to the server once reconnected to the internet.",
      link: "",
      skills: ["Objective-C", "UIKit"],
    },
    {
      name: "White Sand Palace Wallet",
      description:
        "Hotel wallet app serving both customers and employees — featuring booking for transportation, restaurants, and hotels; deposit, withdrawal, and loyalty points; payroll; and a full in-app messaging system with personal and group chats.",
      link: "",
      skills: ["Swift", "SwiftUI", "UIKit", "TestFlight"],
    },
  ],
  experience: [
    {
      company: "White Sand Palace Hotel",
      title: "Senior iOS Application Developer",
      dateRange: "May 2023 – June 2026",
      bullets: [
        "Developed the company wallet app providing services for both customers and employees",
        "Built customer features for booking transportation, restaurants, and hotels, plus withdrawal, deposit, and loyalty points",
        "Built employee features for payroll, bills, withdrawals, and deposits",
        "Implemented an in-app messaging system for personal and group chats, supporting text, image, and file sharing with reply, forward, delete, and pin actions, plus role-based member management for group chats",
      ],
    },
    {
      company: "AMK Microfinance Institution Plc.",
      title: "Senior iOS Application Developer",
      dateRange: "January 2020 – April 2023",
      bullets: [
        "Maintained and developed new features for the AMK Mobile Banking iOS app",
        "Led the iOS team, reviewing and merging code across all environments",
        "Analyzed and optimized code for efficiency and performance",
        "Coordinated an outsourced team building a web application and an internal mobile team integrating it into the banking app, tracking progress and reporting to management",
        "Provided technical expertise during architectural and design discussions with the team",
        "Communicated daily with multi-disciplinary teams of engineers, designers, producers, and clients",
      ],
    },
    {
      company: "HARi – CRM & Data",
      title: "iOS Application Developer",
      dateRange: "January 2019 – January 2020",
      bullets: [
        "Maintained Set2Sell, an iPad CRM app built in Objective-C with offline-first data storage that syncs on reconnect",
        "Built modules to connect to Microsoft Dynamics CRM and translated SQL logic into Swift",
        "Developed an internal POS application using Modular Architecture, enabling dynamic services based on client needs",
        "Led sprint planning, retrospectives, task breakdowns, and daily stand-ups following Agile Scrum and Kanban",
        "Built reusable and extensible components leveraged across multiple solutions",
      ],
    },
    {
      company: "Independent Contracting",
      title: "iOS Application Developer (Freelancer)",
      dateRange: "August 2017 – January 2019",
      bullets: [
        "Developed several iOS applications from scratch to serve client needs",
        "Built a Taxi Booking application (Driver and Passenger apps) using Map services",
        "Developed a real estate application for posting and managing land property listings from mobile",
      ],
    },
  ],
  education: [
    {
      school: "Royal University of Phnom Penh (RUPP)",
      degree: "Bachelor of Computer Science",
      dateRange: "2013 – 2017",
      achievements: [],
    },
    {
      school: "Cambodia-Korea Cooperation Center (CKCC)",
      degree: "iOS Application Development Course",
      dateRange: "December 2016",
      achievements: [],
    },
  ],
};
