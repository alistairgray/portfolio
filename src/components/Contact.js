import React from 'react';

function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="contact-wrap">
      <h2>Contact</h2>

      <ul className="contact-list" aria-label="Contact links">
        <li>
          <a href="mailto:alistair.g.gray@gmail.com">Email</a>
        </li>
        <li>
          <a
            href="https://github.com/alistairgray"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/grayalistair/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/_ali_gray"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
      </ul>

      <small>© {currentYear} Alistair Gray</small>
    </div>
  );
}

export default Contact;
