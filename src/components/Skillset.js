import React from 'react';

import markdownIcon from './assets/images/icons8-markdown.png'
import html5Icon from './assets/images/icons8-html-5.svg'
import cSS3Icon from './assets/images/icons8-css3.svg'
import reactIcon from './assets/images/icons8-react-native.svg'
import figmaIcon from './assets/images/icons8-figma.svg'
import sketchIcon from './assets/images/icons8-sketch.svg'
import canvaIcon from './assets/images/icons8-canva.svg'
import swaggerIcon from './assets/images/swagger.svg'
import githubIcon from './assets/images/GitHub_(4).png'
import amazonIcon from './assets/images/amazon-q-logo.svg'
import codyIcon from './assets/images/Cody_logo.png'

const skills = [
  { name: 'Markdown & Docs‑as‑Code', icon: markdownIcon, category: 'Documentation' },
  { name: 'OpenAPI / Swagger', icon: swaggerIcon, category: 'Documentation' },
  { name: 'Git / GitHub', icon: githubIcon, category: 'Documentation' },

  { name: 'HTML5', icon: html5Icon, category: 'Front‑End' },
  { name: 'CSS3', icon: cSS3Icon, category: 'Front‑End' },
  { name: 'React', icon: reactIcon, category: 'Front‑End' },

  { name: 'Figma', icon: figmaIcon, category: 'Design' },
  { name: 'Sketch', icon: sketchIcon, category: 'Design' },
  { name: 'Canva', icon: canvaIcon, category: 'Design' },

  { name: 'Amazon Q', icon: amazonIcon, category: 'AI Tools' },
  { name: 'Cody', icon: codyIcon, category: 'AI Tools' },
];

function Skillset() {
  // Derive unique categories for grouping
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section className="skillset content-wrap" aria-labelledby="skillset-heading">
      <h2 id="skillset-heading">Skillset</h2>

      {categories.map((cat) => (
        <div key={cat} className="skill-category">
          <h3>{cat}</h3>

          <ul className="skill-list" role="list">
            {skills
              .filter((s) => s.category === cat)
              .map(({ name, icon }) => (
                <li key={name} className="skill-item">
                  <img
                    src={icon}
                    alt={`${name} icon`}
                    loading="lazy"
                    width="48"
                    height="48"
                  />
                  <span>{name}</span>
                </li>
              ))}
          </ul>
        </div>
      ))}

      <small className="icon-credit">
        Icons supplied by{' '}
        <a
          href="https://icons8.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Icons8
        </a>
      </small>
    </section>
  );
}

export default Skillset;
