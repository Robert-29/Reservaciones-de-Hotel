const Ofertas = () => { 
    return(
        <section className="bg-gray-50 w-full p-20 mt-20" >
            <h1 className="text-4xl text-center font-cormorant font-light tracking-wider" >Ofertas Especiales</h1>
            <div className="w-full flex justify-center space-x-10 mt-10" >
                <div
                    data-aos="fade-up" //inicia la animación, entra de abajo hacia arriba
                    data-aos-delay="100" //retardo de 1 milisegundo
                className="w-[30%] p-8 bg-white rounded-xl flex flex-col justify-center items-center space-y-3 hover:shadow-md transition duration-500 " >
                    <div className="bg-gray-50 rounded-full p-4" >
                        <img src="/src/assets/svg/brillos.svg" alt="" />
                    </div>
                    <h3 className="font-cormorant font-light tracking-wider text-xl text-gray-800" >Escapada Romántica</h3>
                    <p className="font-inter text-gray-600 text-center" >Incluye cena a la luz de las velas, botella de champagne y decoración especial</p>
                    <span className="text-xl font-inter text-green-700" >Desde $399/noche</span>
                </div>
                <div
                    data-aos="fade-up" //inicia la animación, entra de abajo hacia arriba
                    data-aos-delay="200" //retardo de 2 milisegundos
                className="w-[30%] p-8 bg-white rounded-xl flex flex-col justify-center items-center space-y-3 hover:shadow-md transition duration-500 " >
                    <div className="bg-gray-50 rounded-full p-4" >
                        <img src="/src/assets/svg/users.svg" alt="" />
                    </div>
                    <h3 className="font-cormorant font-light tracking-wider text-xl text-gray-800" >Paquete Familiar</h3>
                    <p className="font-inter text-gray-600 text-center" >Habitación conectada para niños, actividades recreativas y desayuno incluido</p>
                    <span className="text-xl font-inter text-green-700" >Desde $499/noche</span>
                </div>
                <div
                    data-aos="fade-up" //inicia la animación, entra de abajo hacia arriba
                    data-aos-delay="300" //retardo de 3 milisegundos
                className="w-[30%] p-8 bg-white rounded-xl flex flex-col justify-center items-center space-y-3 hover:shadow-md transition duration-500 " >
                    <div className="bg-gray-50 rounded-full p-4" >
                        <img src="/src/assets/svg/calendario.svg" alt="" />
                    </div>
                    <h3 className="font-cormorant font-light tracking-wider text-xl text-gray-800" >Estancia Prolongada</h3>
                    <p className="font-inter text-gray-600 text-center" >Descuentos especiales para reservas de 5 noches o más</p>
                    <span className="text-xl font-inter text-green-700" >15% de descuento</span>
                </div>
            </div>
        </section>
    )
}

export default Ofertas;