import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { initDB } from 'react-indexed-db';
import { DBConfig } from './DB/DBConfig';
import { CookiesProvider } from 'react-cookie';

initDB(DBConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CookiesProvider>
            <App />
        </CookiesProvider>
    </React.StrictMode>
);
