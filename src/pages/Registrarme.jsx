const Registrarme = () => {
    return(
        <section className="w-full h-screen bg-gray-50 flex flex-col justify-center items-center space-y-4 " >
            <h1 className="text-3xl font-cormorant font-light tracking-wider text-gray-800" >Crea tu cuenta</h1>
            <div className="flex space-x-2 tracking-wider " >
                <p className="font-inter text-gray-600" >¿Ta tienes uan cuenta?</p>
                <a href="/iniciarsesion" className="font-inter text-green-700" >Iniciar sesión</a>
            </div>
            <form className="flex flex-col space-y-3 w-[30%] " action="">
                <input className="border-gray-300 border rounded-md p-2 focus:outline-none " type="text" placeholder="Nombre completo" />
                <input className="border-gray-300 border rounded-md p-2 focus:outline-none " type="email" placeholder="Correo eléctronico" />
                <input className="border-gray-300 border rounded-md p-2 focus:outline-none " type="password" placeholder="Contraseña" />
            </form>
            <button  className="w-[30%] bg-gray-900 rounded-md text-white font-inter tracking-wider p-2 ">Registrarse</button>
        </section>
    )
}

export default Registrarme;