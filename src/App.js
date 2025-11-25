import React, { useEffect } from "react";
import "./App.css";
import "particles.js"; // this loads the script from node_modules

function App() {
  useEffect(() => {
    // particlesJS is attached to window by the script we imported above
    if (window.particlesJS) {
      window.particlesJS.load("particles-js", "particles.json", function () {
        console.log("particles.js config loaded");
      });
    }
  }, []);

  return (
    <div className="app">
      {/* Main centered content */}
      <div className="content">
        <h1 className="name">Wayne Ngo</h1>
        <p className="role">SWE @ SJSU</p>

        <div className="buttons-row">
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourusername"
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
    </div>
  );
}

export default App;
