import { useState, useEffect } from "react";
import { obtenerUsuario, cerrarSesion as cerrarSesionAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [usuario, setUsuario] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si hay usuario autenticado al cargar el componente
    const usuarioActual = obtenerUsuario();
    if (usuarioActual) {
      setUsuario(usuarioActual);
      // Validar la sesión con el backend
      fetch("https://reservaciones-de-hotel-production.up.railway.app/verify-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: usuarioActual.id,
          session_token: usuarioActual.session_token
        })
      })
      .then(res => res.json())
      .then(data => {
        if (!data.valid) {
          // Sesión inválida, cerrar sesión local
          cerrarSesionAuth();
          setUsuario(null);
          navigate("/");
        }
      })
      .catch(err => {
        console.error("Error verificando la sesión:", err);
      });
    }
  }, [navigate]);

  const cerrarSesion = async () => {
    if (usuario) {
      try {
        await fetch("https://reservaciones-de-hotel-production.up.railway.app/logout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: usuario.id })
        });
      } catch (err) {
        console.error("Error al cerrar sesión remotamente:", err);
      }
    }

    cerrarSesionAuth();
    setUsuario(null);
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 h-20 w-full pt-4 pb-4 flex items-center justify-center bg-white/95 shadow-sm z-50">
      <nav className="w-[90%] md:w-[80%] flex justify-between items-center relative">
        <span className="flex items-center space-x-2">
          <h1 className="text-xl md:text-2xl font-cormorant tracking-wider">CRYSTAL COVE</h1>
        </span>
        
        {/* Botón Menu Hamburguesa para Móviles */}
        <button 
          className="md:hidden flex flex-col items-center justify-center space-y-1.5 p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        {/* Menú de Escritorio (Oculto en móviles) */}
        <ul className="hidden md:flex space-x-10 font-inter text-sm tracking-wider items-center">
          <li className="hover:border-b-2 border-black" onClick={() => setIsMenuOpen(false)}><a href="./">INICIO</a></li>
          <li className="hover:border-b-2 border-black" onClick={() => setIsMenuOpen(false)}><a href="./mashabitaciones">HABITACIONES</a></li>
          <li className="hover:border-b-2 border-black" onClick={() => setIsMenuOpen(false)}><a href="./actividades">ACTIVIDADES</a></li>
          <li className="hover:border-b-2 border-black" onClick={() => setIsMenuOpen(false)}><a href="./misreservaciones">MIS RESERVACIONES</a></li>
          {usuario ? (
            <li className="flex items-center space-x-4">
              <span className="text-gray-700 hidden lg:inline">Hola, <span className="font-semibold">{usuario.nombre}</span></span>
              <button
                onClick={cerrarSesion}
                className="bg-gray-900 text-white px-4 py-1 rounded-md hover:bg-gray-700 transition"
              >
                Cerrar Sesión
              </button>
            </li>
          ) : (
            <li className="hover:border-b-2 border-black" onClick={() => setIsMenuOpen(false)}><a href="/iniciarsesion">INICIAR SESIÓN</a></li>
          )}
        </ul>

        {/* Menú Móvil */}
        <div className={`absolute top-16 left-0 w-full min-h-[calc(100vh-5rem)] bg-white/95 shadow-md flex-col items-center py-6 space-y-6 font-inter text-sm tracking-wider transition-all duration-300 ease-in-out md:hidden z-40 ${isMenuOpen ? "flex opacity-100 translate-y-0" : "hidden opacity-0 -translate-y-4"}`}>
          <a href="./" className="hover:text-gray-600 font-semibold" onClick={() => setIsMenuOpen(false)}>INICIO</a>
          <a href="./mashabitaciones" className="hover:text-gray-600 font-semibold" onClick={() => setIsMenuOpen(false)}>HABITACIONES</a>
          <a href="./actividades" className="hover:text-gray-600 font-semibold" onClick={() => setIsMenuOpen(false)}>ACTIVIDADES</a>
          <a href="./misreservaciones" className="hover:text-gray-600 font-semibold" onClick={() => setIsMenuOpen(false)}>MIS RESERVACIONES</a>
          {usuario ? (
            <div className="flex flex-col items-center space-y-4 mt-4 border-t pt-4 w-full">
              <span className="text-gray-700">Hola, <span className="font-semibold">{usuario.nombre}</span></span>
              <button
                onClick={cerrarSesion}
                className="bg-gray-900 text-white px-8 py-2 rounded-md hover:bg-gray-700 transition w-[80%]"
              >
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-4 mt-4 border-t pt-4 w-full">
              <a href="/iniciarsesion" className="bg-gray-900 text-white px-8 py-2 rounded-md hover:bg-gray-700 transition w-[80%] text-center" onClick={() => setIsMenuOpen(false)}>INICIAR SESIÓN</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Menu;