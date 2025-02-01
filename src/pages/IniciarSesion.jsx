const IniciarSesion = () => {
    return(
        <section className="w-full h-screen bg-gray-50 flex flex-col justify-center items-center space-y-4 " >
            <h1 className="text-3xl font-cormorant font-light tracking-wider text-gray-800" >Iniciar Sesion</h1>
            <div className="flex space-x-2 tracking-wider " >
                <p className="font-inter text-gray-600" >¿No tienes una cuenta?</p>
                <a href="/registrarme" className="font-inter text-green-700" >Regístrate</a>
            </div>
            <form className="flex flex-col space-y-3 w-[30%] " action="">
                <input className="border-gray-300 border rounded-md p-2 focus:outline-none " type="email" placeholder="Correo eléctronico" />
                <input className="border-gray-300 border rounded-md p-2 focus:outline-none " type="password" placeholder="Contraseña" />
            </form>
            <button  className="w-[30%] bg-gray-900 rounded-md text-white font-inter tracking-wider p-2 ">Iniciar Sesión</button>
        </section>
    )
}

export default IniciarSesion;