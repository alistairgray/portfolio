// src/components/DocNav.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { docsIndex } from './assets/data/docsIndex';

const DocNav = ({ current }) => (
  <nav className="doc-nav" aria-label="Docs navigation">
    <ul>
      {docsIndex.map(({ slug, title }) => (
        <li key={slug}>
          <NavLink
            to={`/docs/${slug}`}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            end
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default DocNav;
