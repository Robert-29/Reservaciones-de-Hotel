import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { guardarUsuario } from "../utils/auth";

const IniciarSesion = () => {
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();

    const iniciarSesion = async (e) => {
        e.preventDefault();

        // Validar que los campos no estén vacíos
        if (!email || !contrasena) {
            setMensaje("Email y contraseña son requeridos");
            return;
        }

        try {
            const response = await fetch("https://reservaciones-de-hotel-production.up.railway.app/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, contrasena }),
            });

            const data = await response.json();

            if (response.ok) {
                // Guardar usuario en localStorage
                guardarUsuario(data);

                // Redirigir al home
                navigate("/");
            } else {
                setMensaje(data.error || "Error al iniciar sesión");
            }
        } catch (err) {
            console.error(err);
            setMensaje("Error al conectar con el servidor");
        }
    };

    return (
        <section className="w-full h-screen bg-gray-50 flex flex-col justify-center items-center space-y-4 " >
            <h1 className="text-3xl font-cormorant font-light tracking-wider text-gray-800" >Iniciar Sesión</h1>
            {mensaje && <p className="text-center text-red-600 mb-4">{mensaje}</p>}
            <div className="flex space-x-2 tracking-wider " >
                <p className="font-inter text-gray-600" >¿No tienes una cuenta?</p>
                <a href="/registrarme" className="font-inter text-green-700" >Regístrate</a>
            </div>
            <form onSubmit={iniciarSesion} className="flex flex-col space-y-3 w-[30%] " >
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
                <button className="w-[100%] bg-gray-900 rounded-md text-white font-inter tracking-wider p-2 ">Iniciar Sesión</button>
            </form>
        </section>
    )
}

export default IniciarSesion;