import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChatWidget from './ChatWidget';

import Nav from './Nav';
import About from './About';
import Intro from './Intro';
import Skillset from './Skillset';
import Examples from './Examples';
import Companies from './Companies';
import Publications from './Publications';
import Contact from './Contact';
import DocsLayout from './DocsLayout';
import BlogLayout from './BlogLayout';

const PortfolioApp = () => (
  <>
    <Nav />

    <Routes>
      {/* Home page */}
      <Route
        path="/"
        element={
          <>
            <main>
              <section id="about"><About /></section>
              <section id="intro"><Intro /></section>
              <section id="companies"><Companies /></section>
              <section id="examples"><Examples /></section>
              <section id="skillset"><Skillset /></section>
              <section id="publications"><Publications /></section>
            </main>
            <footer id="contact" className="contact-wrap"><Contact /></footer>
          </>
        }
      />

      {/* Docs pages */}
      <Route path="/docs/:docSlug" element={<DocsLayout />} />
      {/* Blog pages */}
      <Route path="/blog/:slug"   element={<BlogLayout />} />

      {/* Fallback */}
      <Route path="*" element={<p style={{ padding: '2rem' }}>404 – page not found.</p>} />
    </Routes>
    <ChatWidget />
  </>
);

export default PortfolioApp;
