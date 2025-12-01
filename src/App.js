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
          {/* LEFT COLUMN: About, Skills, Projects (scrollable) */}
          <div className="left-column">
            <section className="section">
              <h2>About Me</h2>
              <p>
                Hello, I’m an aspiring software engineer at San Jose State
                University, expected to graduate by May 2027. I&apos;m focused
                on enhancing my expertise, expanding my skill set, and
                connecting with professionals in the tech community.
              </p>
            </section>

            <section className="section">
              <h2>Skills</h2>
              <ul className="skills-list">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>

            <section className="section">
              <h2>Projects</h2>
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

          {/* RIGHT COLUMN: top-right name + links + bananas */}
          <div className="right-column">
            <div className="top-right">
              <h1 className="name">Wayne Ngo</h1>
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
              {/* 🍌 Banana rain area under name/buttons */}
              <div className="banana-area">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className={`banana banana-${i}`}>
                    🍌
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
