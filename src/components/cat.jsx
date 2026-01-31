import React, { Component } from "react";
import githubLogo from "../assets/GitHub-Mark-Light-32px.png";

export class Cat extends Component {
  /* spacing + separation helpers */
  responseStyle = {
    marginTop: "20px",
    marginBottom: "32px",
    paddingLeft: "6px"
  };

  renderSeparator = () => (
    <p className="result" style={{ opacity: 0.35 }}>
      ─────────────────────────────────────────────
    </p>
  );

  information = {
    about:
      "I am Reejay Yadav, a Software Engineering undergraduate at Delhi Technological University with strong experience in MERN stack, frontend development, and applied machine learning. I enjoy building scalable web apps, real-time systems, and interactive UIs.",

    education: [
      "B.Tech in Software Engineering, Delhi Technological University (2022–Present), CGPA: 8.76/10.",
      "CBSE XII from Sunbeam Academy with 91.4%.",
      "NEB X from Nightingale Intl. Sec. School, 3.7/4.0."
    ],

    experience: [
      {
        role: "PVT Engineer Intern",
        company: "Ciena, Gurugram",
        duration: "Summer 2024",
        points: [
          "Designed and tested 5 RLA protocols for RLS using Jupyter, reducing manual verification time by 30%.",
          "Automated polling using Jupyter–MobaXterm scripts, improving efficiency by 25%.",
          "Contributed to fiber break automation, increasing network uptime by 10%."
        ]
      },
      {
        role: "Front-End Developer",
        company: "LG–DTU Project, Delhi",
        duration: "2023",
        points: [
          "Built LG Task Dashboard using Next.js.",
          "Reduced page load time by 2 seconds, improving user satisfaction by 15%."
        ]
      },
      {
        role: "Developer Intern (Remote)",
        company: "PCS Nepal",
        duration: "2023",
        points: [
          "Improved form validation using Zod, reducing errors by 50%.",
          "Designed UI using Tailwind CSS, increasing daily sign-ups by 30%."
        ]
      }
    ],

    skills: {
      languages: "C, C++, Java, Python, JavaScript",
      web: "React, Next.js, Node.js, Express, FastAPI, REST APIs, Tailwind CSS, Pydantic",
      ai: "Machine Learning, Deep Learning, LangChain, LangGraph (ReAct), Prompt Engineering",
      tools: "Git, GitHub, Linux, Jupyter Notebook, Vercel"
    },

    achievements: [
      "ICCR Scholar – Selected for DTU under Foreign Student Scheme.",
      "99th Percentile in JEE Mains 2021.",
      "1st Runner-Up, BHU Science Fair (Smart City Model)."
    ],

    por: [
      "Co-Head, Cultural Council – Managed Engifest with ₹70L budget & 3L footfall (2023–24).",
      "Mentor, IEEE SIG – Guided 50+ students in C programming, improving average grades by 15% (2023).",
      "Executive, IEEE Corporate Department – Managed VIHAAAN hackathon with 70k attendees and 15+ partners (2022).",
      "Class Representative, DTU – Represented students from 13+ countries and resolved 20+ issues (2022–24)."
    ],

    projects: [
      {
        projectName: "WhatsApp Clone (MERN Stack)",
        liveDemo: "https://reejay.me/",
        linkToGithub: "https://github.com/Reejay2003/Whatsapp-clone"
      },
      {
        projectName: "Memory Pattern Game (Next.js)",
        liveDemo: "https://pattern-recognition-game-rhae.vercel.app",
        linkToGithub: "https://github.com/Reejay2003/Pattern-Recognition-Game"
      },
      {
        projectName: "Loshu Numerology (Next.js)",
        liveDemo: "https://loshu-ochre.vercel.app/",
        linkToGithub: "https://github.com/Reejay2003/Loshu"
      },
      {
        projectName: "Smart Traffic Management System",
        liveDemo:
          "https://colab.research.google.com/drive/1CHvuHcZQH_G2titcPMs1DDsGo7z3IWbb?usp=sharing",
        linkToGithub:
          "https://colab.research.google.com/drive/1CHvuHcZQH_G2titcPMs1DDsGo7z3IWbb?usp=sharing"
      }
    ],

    social: [
      { platform: "GitHub", link: "https://github.com/Reejay2003" },
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/in/reejay-yadav-092076183"
      },
      {
        platform: "LeetCode",
        link: "https://leetcode.com/u/O9hFUXDKwM/"
      },
      { platform: "Email", link: "mailto:reejay2003@gmail.com" }
    ]
  };

  wrap = (content) => (
    <div className="result" style={this.responseStyle}>
      {this.renderSeparator()}
      {content}
    </div>
  );

  handleCommand = () => {
    const line = this.props.line;
    const value = line && typeof line.value === "string" ? line.value : "";

    if (!value) {
      return this.wrap(<p>Invalid command</p>);
    }

    const navigation = value.split(" ")[1];
    if (!navigation) return this.wrap(<p>Oops, wrong input</p>);

    const lower = navigation.toLowerCase();

    if (lower === "about" || lower === "About" || lower === "About.txt")
      return this.wrap(<p>{this.information.about}</p>);

    if (lower === "education" || lower === "Education" || lower === "Education.txt")
      return this.wrap(
        this.information.education.map((e, i) => <p key={i}>{e}</p>)
      );

    if (lower === "experience" || lower === "exp" || lower === "Experience.txt" || lower === "Experience")
      return this.wrap(
        this.information.experience.map((exp, i) => (
          <div key={i} style={{ marginBottom: "30px" }}>
            <p style={{ fontWeight: "bold" }}>
              [{exp.role}] — {exp.company} | {exp.duration}
            </p>
            <p style={{ opacity: 0.5 }}>----------------------------------------</p>
            {exp.points.map((p, j) => (
              <p key={j} style={{ paddingLeft: "16px" }}>
                • {p}
              </p>
            ))}
          </div>
        ))
      );

    if (lower === "skills" || lower === "Skills" || lower === "Skills.txt")
      return this.wrap(
        <>
          <p><strong>Languages:</strong> {this.information.skills.languages}</p>
          <p><strong>Web:</strong> {this.information.skills.web}</p>
          <p><strong>AI / ML:</strong> {this.information.skills.ai}</p>
          <p><strong>Tools:</strong> {this.information.skills.tools}</p>
        </>
      );

    if (lower === "achievements" || lower === "achievement" || lower === "Achievements.txt")
      return this.wrap(
        this.information.achievements.map((a, i) => <p key={i}>• {a}</p>)
      );

    if (lower === "por" || lower === "Por" || lower === "Por.txt")
      return this.wrap(
        this.information.por.map((p, i) => <p key={i}>• {p}</p>)
      );

    if (lower === "projects" || lower === "project" || lower === "Projects.txt" || lower === "Project.txt")
      return this.wrap(
        this.information.projects.map((p, i) => (
          <p key={i}>
            {p.projectName}{" "}
            <a href={p.liveDemo} target="_blank" rel="noopener noreferrer">
              Live
            </a>{" "}
            <a href={p.linkToGithub} target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub" style={{ verticalAlign: "middle" }} />
            </a>
          </p>
        ))
      );

    if (
      ["social", "socials","social.txt","socials.txt", "contact","contact.txt","contacts.txt", "contacts", "contactme", "contact_me"].includes(lower)
    )
      return this.wrap(
        this.information.social.map((s, i) => (
          <p key={i}>
            <a href={s.link} target="_blank" rel="noopener noreferrer">
              {s.platform}
            </a>
          </p>
        ))
      );

    return this.wrap(<p>Oops, wrong input</p>);
  };

  render() {
    const line = this.props.line;
    const value = line && typeof line.value === "string" ? line.value : "";

    return (
      <>
        <p className="prompt">{value}</p>
        {this.handleCommand()}
      </>
    );
  }
}

export default Cat;