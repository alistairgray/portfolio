import React from 'react';
// Assuming 'Link' is imported from your routing library (e.g., 'react-router-dom')
// You NEED this line if you use <Link> for internal routes.
import { Link } from 'react-router-dom'; 

function About() {
  return (
    <div className="content-wrap about">
      <h1>Alistair Gray</h1>
      <h2>Technical Writer ∙ APIs, Cloud & AI</h2>

      {/* optional supporting line */}
      <p className="tagline">
        I translate complex platforms into clear, developer‑ready docs that drive adoption.
      </p>

      <div className="about-item">
        {/* 1. Internal Route: Use <Link> for navigation *within* the app.
          (Assuming '#intro' is a route path, otherwise use <a> for a page anchor.)
          If 'intro' is a section on the same page, keep your original <a> tag.
        */}
        <Link to="/intro" className="button" role="button">
          Let’s go
        </Link>
        
        {/* 2. External Link: Use standard <a> tag for external sites (like GitHub).
          Added target="_blank" and rel="noopener noreferrer" for security and usability.
        */}
        <a 
          href="https://github.com/alistairgray" 
          className="button" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          See the API docs
        </a>
      </div>
    </div>
  );
}

export default About;