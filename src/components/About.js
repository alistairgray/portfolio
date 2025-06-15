import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="content-wrap about">
      <h1>Alistair Gray</h1>
      <h2>Technical Writer ∙ APIs, Cloud & AI</h2>

      {/* optional supporting line */}
      <p className="tagline">
        I translate complex platforms into clear, developer‑ready docs that drive adoption.
      </p>

      <div className="about-item">
        <a href="#intro" className="button" role="button">
          Let’s go
        </a>
        <Link to="/docs/Introduction" className="button">
        See the API docs
        </Link>
      </div>
    </div>
  );
}

export default About;
