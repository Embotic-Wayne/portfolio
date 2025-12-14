import React, { useEffect } from "react";
import "./App.css";
import "particles.js"; // make sure particles.js is installed: npm install particles.js

// 🔹 Your projects
const projects = [
  {
    name: "Charity Connect",
    description:
      "A secure crowdfunding backend inspired by GoFundMe, allowing users to create fundraising campaigns, donate, and manage campaigns with admin moderation.",
    url: "https://github.com/Embotic-Wayne/CharityConnect",
  },
  {
    name: "AI Quiz Generator",
    description:
      "Interactive quizzes generated from uploaded PDFs using OpenAI's GPT for students.",
    url: "https://github.com/Embotic-Wayne/AI-Quiz-Creator",
  },
  {
    name: "Amazon Product Review Analyzer",
    description:
      "NLP pipeline for sentiment analysis and topic discovery on Amazon product reviews.",
    url: "https://github.com/Embotic-Wayne/review-analyzer",
  },
  {
    name: "Sorting Visualizer",
    description:
      "Interactive sorting visualizer with a React frontend and a Spring Boot backend.",
    url: "https://github.com/Embotic-Wayne/dsa-visualizer",
  },
  {
    name: "walk2feed - CAL HACKS 12.0",
    description:
      "Mobile Tamagotchi-style companion aimed to improve physical health with feedback from Claude's API.",
    url: "https://github.com/Embotic-Wayne/walktofeed",
  },
];

const skills = [
  "Java",
  "Typescript",
  "Python",
  "SQL",
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "Node.js",
  "Express.js",
  "Spring Boot",
  "NextJS",
  "Docker",
  "Maven",
  "Prometheus",
  "Grafana",
];

function App() {
  useEffect(() => {
    // load particles config from public/particles.json
    if (window.particlesJS) {
      window.particlesJS.load("particles-js", "particles.json", function () {
        console.log("particles.js config loaded");
      });
    }
  }, []);

  return (
    <div className="app">
      <div className="content">
        <div className="content-inner">
          {/* HEADER: Name, Role, and Social Links */}
          <div className="header-section">
            <h1 className="name">hi i'm wayne</h1>
            <p className="role">SWE @ SJSU</p>
            <div className="buttons-row">
              <a
                href="https://linkedin.com/in/wayne-ngo"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Embotic-Wayne"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                GitHub
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Resume
              </a>
            </div>
          </div>

          {/* CONTENT SECTIONS: About, Skills, Projects */}
          <div className="sections-container">
            <section className="section">
              <h2>about me</h2>
              <p>
                Hi! I’m a software engineering student at San Jose State
                University, graduating in May 2027. I enjoy building useful,
                real world projects and have experience creating tools that help
                students and organizations work more smoothly. I’m always
                looking to learn more, take on new challenges, and connect with
                people in the tech community. Whether it’s developing features
                that support hundreds of users or improving how a system works
                behind the scenes, I love turning ideas into something others
                can actually use.
              </p>
            </section>

            <section className="section">
              <h2>skills</h2>
              <ul className="skills-list">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>

            <section className="section">
              <h2>projects</h2>
              <div className="projects-scroll">
                {projects.map((project) => (
                  <a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card"
                  >
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <span className="project-link">View on GitHub ↗</span>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
