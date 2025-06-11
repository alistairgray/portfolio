import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import PortfolioApp from './components/PortfolioApp';
import reportWebVitals from './reportWebVitals';

// Optional routing – comment out if not using react-router
// import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <PortfolioApp />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

// Web vitals (optional)
reportWebVitals();
