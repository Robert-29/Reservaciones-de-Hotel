import { useState, useEffect } from "react";
import { obtenerUsuario, cerrarSesion as cerrarSesionAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si hay usuario autenticado al cargar el componente
    const usuarioActual = obtenerUsuario();
    setUsuario(usuarioActual);
  }, []);

  const cerrarSesion = () => {
    cerrarSesionAuth();
    setUsuario(null);
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 h-20 w-full pt-4 pb-4 flex items-center justify-center bg-white/95 shadow-sm  z-50">
      <nav className="w-[90%] flex  justify-between">
        <span className="flex items-center space-x-2">
          <h1 className="text-2xl font-cormorant tracking-wider ">CRYSTAL COVE</h1>
        </span>
        <ul className="flex space-x-10 font-inter text-sm tracking-wider items-center">
          <li className="hover:border-b-2 border-black " ><a href="./">INICIO</a></li>
          <li className="hover:border-b-2 border-black " ><a href="./mashabitaciones">HABITACIONESsssssss</a></li>
          <li className="hover:border-b-2 border-black " ><a href="./actividades">ACTIVIDADES</a></li>
          <li className="hover:border-b-2 border-black " ><a href="./misreservaciones">MIS RESERVACIONES</a></li>
          {usuario ? (
            <li className="flex items-center space-x-4">
              <span className="text-gray-700">Hola, <span className="font-semibold">{usuario.nombre}</span></span>
              <button
                onClick={cerrarSesion}
                className="bg-gray-900 text-white px-4 py-1 rounded-md hover:bg-gray-700 transition"
              >
                Cerrar Sesión
              </button>
            </li>
          ) : (
            <li className="hover:border-b-2 border-black " ><a href="/iniciarsesion">INICIAR SESIÓN</a></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Menu;