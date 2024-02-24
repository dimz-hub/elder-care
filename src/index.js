import React from 'react';
import { hydrate, render } from 'react-dom'; // Import hydrate and render from 'react-dom'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './util/AuthContext';
import { HelmetProvider } from 'react-helmet-async';

const rootElement = document.getElementById('root');

// Check if the root element already has child nodes
if (rootElement.hasChildNodes()) {
  // If it does, hydrate the app
  hydrate(
    <React.StrictMode>
      <BrowserRouter>
        <AuthContextProvider>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </React.StrictMode>,
    rootElement
  );
} else {
  // If it doesn't, render the app
  render(
    <React.StrictMode>
      <BrowserRouter>
        <AuthContextProvider>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </React.StrictMode>,
    rootElement
  );
}
