import { useState } from "react";

const Registrarme = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [mensaje, setMensaje] = useState("");

    const registrarCliente = async (e) => {
        e.preventDefault();
    
        // Validar que los campos no estén vacíos
        if (!nombre || !email || !contrasena) {
          setMensaje("Todos los campos son requeridos");
          return;
        }
    
        try {
          const response = await fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({nombre, email, contrasena }),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            setMensaje(`Usuario ${data.nombre} creado exitosamente`);
            setNombre(""); 
            setEmail("");
            setContrasena("");
          } else {
            setMensaje(data.error || "Hubo un error al crear el usuario");
          }
        } catch (err) {
          console.error(err);
          setMensaje("Error al crear el usuario");
        }
    };

    return(
        <section className="w-full h-screen bg-gray-50 flex flex-col justify-center items-center space-y-4 " >
            <h1 className="text-3xl font-cormorant font-light tracking-wider text-gray-800" >Crea tu cuenta</h1>
            {mensaje && <p className="text-center text-blue-950 mb-4">{mensaje}</p>}
            <div className="flex space-x-2 tracking-wider " >
                <p className="font-inter text-gray-600" >¿Ta tienes uan cuenta?</p>
                <a href="/iniciarsesion" className="font-inter text-green-700" >Iniciar sesión</a>
            </div>
            <form onSubmit={registrarCliente} className="flex flex-col space-y-3 w-[30%] " action="">
                <input onChange={(e) => setNombre(e.target.value)} className="border-gray-300 border rounded-md p-2 focus:outline-none " type="text" placeholder="Nombre completo" />
                <input onChange={(e) => setEmail(e.target.value)} className="border-gray-300 border rounded-md p-2 focus:outline-none " type="email" placeholder="Correo eléctronico" />
                <input onChange={(e) => setContrasena(e.target.value)} className="border-gray-300 border rounded-md p-2 focus:outline-none " type="password" placeholder="Contraseña" />
                <button  className="w-[100%] bg-gray-900 rounded-md text-white font-inter tracking-wider p-2 ">Registrarse</button>
            </form>
        </section>
    )
}

export default Registrarme;