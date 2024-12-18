import React from 'react';
import ReactDOM from 'react-dom/client'; // 'react-dom/client' import karein
import './index.css'; // Tailwind CSS import
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot use karein

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
