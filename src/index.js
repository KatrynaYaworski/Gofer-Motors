import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { AuthContextProvider } from './store/authContext'
import { InventoryContextProvider } from './store/inventoryContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <InventoryContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </InventoryContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
