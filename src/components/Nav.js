import React, { useState } from 'react';
import resume from '../assets/data/resume.pdf';
import portfolio from '../assets/data/portfolio.pdf';

const internalNav = [
  { href: '#about', label: 'About' },
  { href: '#companies', label: 'Companies' },
  { href: '#examples', label: 'Examples' },
  { href: '#publications', label: 'Publications' },
  { href: '#contact', label: 'Contact' },
];

const externalNav = [
  {
    href: 'https://www.linkedin.com/in/grayalistair',
    label: 'LinkedIn',
    external: true,
  },
  {
    href: 'mailto:alistair.gray@hey.com',
    label: 'Email',
    external: false,
  },
  { href: resume, label: 'Resume', download: 'Alistair-Gray-Resume.pdf' },
  { href: portfolio, label: 'Portfolio', download: 'Alistair-Gray-Portfolio.pdf' },
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle for mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar" aria-label="Primary">
      {/* Mobile toggle button */}
      <button
        className="nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className="sr-only">Menu</span>
        ☰
      </button>

      <div
        id="primary-navigation"
        className={isOpen ? 'nav-links open' : 'nav-links'}
      >
        {/* Internal section links */}
        <ul className="nav-list" role="list">
          {internalNav.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={() => setIsOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* External/download links */}
        <ul className="nav-actions" role="list">
          {externalNav.map(({ href, label, external, download }) => (
            <li key={label}>
              <a
                href={href}
                {...(download ? { download } : {})}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
