import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './assets/styles/styles.css';

const root = createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
);
