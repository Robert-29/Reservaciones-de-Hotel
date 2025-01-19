const servicios = () => { 
    return(
        <section className="bg-gray-50 w-full p-20 mt-20" >
            <h1 className="text-4xl text-center font-cormorant font-light tracking-wider" >Servicios y Amenidades</h1>
            <div className="w-full flex justify-center space-x-10 mt-10" >
                <div className="w-[30%] p-8 bg-white rounded-xl flex flex-col justify-center items-center space-y-3 hover:shadow-md transition duration-500 " >
                    <div className="bg-gray-50 rounded-full p-4" >
                        <img src="/src/assets/svg/wifi.svg" alt="wi-fi" />
                    </div>
                    <h3 className="font-cormorant font-light tracking-wider text-xl text-gray-800" >Wi-Fi Gratuito</h3>
                    <p className="font-inter text-gray-600 text-center" >Conexión de alta velocidad en todas las áreas</p>
                </div>
                <div className="w-[30%] p-8 bg-white rounded-xl flex flex-col justify-center items-center space-y-3 hover:shadow-md transition duration-500 " >
                    <div className="bg-gray-50 rounded-full p-4" >
                        <img src="/src/assets/svg/tasa.svg" alt="" />
                    </div>
                    <h3 className="font-cormorant font-light tracking-wider text-xl text-gray-800" >Desayuno Gourmet</h3>
                    <p className="font-inter text-gray-600 text-center" >Buffet internacional todas las mañanas</p>
                </div>
                <div className="w-[30%] p-8 bg-white rounded-xl flex flex-col justify-center items-center space-y-3 hover:shadow-md transition duration-500 " >
                    <div className="bg-gray-50 rounded-full p-4" >
                        <img src="/src/assets/svg/mancuerna.svg" alt="" />
                    </div>
                    <h3 className="font-cormorant font-light tracking-wider text-xl text-gray-800" >Gimnasio</h3>
                    <p className="font-inter text-gray-600 text-center" >Equipamiento moderno disponible 24/7</p>
                </div>
                <div className="w-[30%] p-8 bg-white rounded-xl flex flex-col justify-center items-center space-y-3 hover:shadow-md transition duration-500 " >
                    <div className="bg-gray-50 rounded-full p-4" >
                        <img src="/src/assets/svg/cubiertos.svg" alt="" />
                    </div>
                    <h3 className="font-cormorant font-light tracking-wider text-xl text-gray-800" >Restaurante</h3>
                    <p className="font-inter text-gray-600 text-center" >Cocina internacional de primer nivel</p>
                </div>
            </div>
        </section>
    )
}

export default servicios;