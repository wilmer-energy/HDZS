import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
//import "bootswatch/dist/Litera/bootstrap.min.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>  
            <App />
    </React.StrictMode>
);
