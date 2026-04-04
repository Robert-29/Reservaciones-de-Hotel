import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { guardarUsuario } from "../utils/auth";

const Registrarme = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const registrarCliente = async (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (!nombre || !email || !contrasena) {
      setMensaje("Todos los campos son requeridos");
      return;
    }

    // Validar longitud mínima de contraseña
    if (contrasena.length < 6) {
      setMensaje("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    try {
      const response = await fetch("https://reservaciones-de-hotel-production.up.railway.app/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, email, contrasena, rol: "cliente" }),
      });

      const data = await response.json();

      if (response.ok) {
        // Guardar usuario en localStorage
        guardarUsuario(data);

        // Redirigir al home
        navigate("/");
      } else {
        setMensaje(data.error || "Hubo un error al crear el usuario");
      }
    } catch (err) {
      console.error(err);
      setMensaje("Error al crear el usuario");
    }
  };

  return (
    <section className="w-full h-screen bg-gray-50 flex flex-col justify-center items-center space-y-4 " >
      <h1 className="text-3xl font-cormorant font-light tracking-wider text-gray-800" >Crea tu cuenta</h1>
      {mensaje && <p className="text-center text-red-600 mb-4">{mensaje}</p>}
      <div className="flex space-x-2 tracking-wider " >
        <p className="font-inter text-gray-600" >¿Ya tienes una cuenta?</p>
        <a href="/iniciarsesion" className="font-inter text-green-700" >Iniciar sesión</a>
      </div>
      <form onSubmit={registrarCliente} className="flex flex-col space-y-3 w-[30%] " action="">
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="border-gray-300 border rounded-md p-2 focus:outline-none "
          type="text"
          placeholder="Nombre completo"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-gray-300 border rounded-md p-2 focus:outline-none "
          type="email"
          placeholder="Correo eléctronico"
        />
        <input
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          className="border-gray-300 border rounded-md p-2 focus:outline-none "
          type="password"
          placeholder="Contraseña"
        />
        <button className="w-[100%] bg-gray-900 rounded-md text-white font-inter tracking-wider p-2 ">Registrarse</button>
      </form>
    </section>
  )
}

export default Registrarme;