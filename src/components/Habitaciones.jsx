const Habitaciones = () => {
    return (
      <div className="pt-20 px-8">
        <h1 className="font-cormorant text-4xl text-center tracking-wider text-gray-800 mb-8">
          Nuestras Habitaciones
        </h1>

        <div className="flex flex-wrap justify-center gap-6">
            <div className="w-[28%] bg-white shadow-lg rounded-lg overflow-hidden hover:-translate-y-1 transform transition duration-500">
                <img className="w-full h-64 object-cover" src="/public/img/habitacion1.avif" alt="Suite Ejecutiva"/>
                <div className="p-4">
                    <h3 className="text-xl font-cormorant text-gray-800 mb-2"> Suite Ejecutiva </h3>
                    <p className="text-gray-600 text-lg  font-inter mb-4"> Espaciosa suite con vista a la ciudad y todas las comodidades</p>
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-inter font-light text-gray-800">$299/noche</span>
                        <a href="#" className="text-teal-500 font-semibold text-xl hover:underline">
                           Ver Detalles →
                        </a>
                    </div>
                </div>
            </div>

          <div className="w-[28%] bg-white shadow-lg rounded-lg overflow-hidden hover:-translate-y-1 transform transition duration-300">
            <img className="w-full h-64 object-cover" src="/public/img/habitacion2.avif" alt="Suite Deluxe"/>
            <div className="p-4">
              <h3 className="text-xl font-cormorant text-gray-800 mb-2">Suite Deluxe</h3>
              <p className="text-gray-600 text-lg font-inter mb-4">Elegante suite con balcón privado y sala de estar</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-inter font-light text-gray-800">$399/noche</span>
                <a href="#" className="text-teal-500 font-semibold text-xl hover:underline">
                  Ver Detalles →
                </a>
              </div>
            </div>
          </div>

          <div className="w-[28%] bg-white shadow-lg rounded-lg overflow-hidden hover:-translate-y-1 transform transition duration-500">
            <img className="w-full h-64 object-cover" src="/public/img/habitacion3.avif" alt="Suite Presidencial"/>
            <div className="p-4">
              <h3 className="text-xl font-cormorant text-gray-800 mb-2">Suite Presidencial</h3>
              <p className="text-gray-600 text-lg font-inter mb-4">La máxima expresión del lujo con servicios exclusivos</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-inter font-light text-gray-800">$599/noche</span>
                <a href="#" className="text-teal-500 font-semibold text-xl hover:underline">
                  Ver Detalles →
                </a>
              </div>
            </div>
          </div>
          <a href="/mashabitaciones" className="text-3xl font-cormorant text-gray-800 mt-10 hover:border-b-gray-600 hover:border-b-2 cursor-pointer " >Ver más habitaciones →</a>
        </div>
      </div>
    );
  };
  
  export default Habitaciones;
  