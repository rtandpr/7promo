import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { initGA } from './ga.js';
import { BrowserRouter } from 'react-router-dom';





initGA();

createRoot(document.getElementById('root')).render(
  

      <App />

)
