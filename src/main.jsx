import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Import Firebase (ça initialise la connexion à Firebase)
import './firebaseConfig';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
