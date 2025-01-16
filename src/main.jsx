//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'swiper/css/bundle';
import './assets/all.scss';



import App from './pages/App/App';

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <App />
  //</StrictMode>,
)
