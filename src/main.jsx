import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App.jsx'

// Inicializa AOS
AOS.init({
  duration: 800, // Duración de las animaciones en ms
  easing: 'ease-in-out', // Efecto de transición
  offset: 100, // Desplazamiento en px antes de activar la animación
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
