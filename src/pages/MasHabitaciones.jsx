import Derechos from "../components/derechos";
import Menu from "../components/Menu";

const MasHabitaciones = () => {
    return (
    <section>
        <Menu />
        <h1 className="mt-32 text-center font-cormorant font-light text-4xl text-gray-700 tracking-wider" >Nuestras Habitaciones</h1>
        <p className="mt-5 text-center font-inter text-gray-500  text-2xl " >Descubre el lujo y el confort en cada una de nuestras exclusivas habitaciones y suites</p>
        <div className="flex flex-col bg-slate-50 p-10 mt-8 mb-8 space-y-5 " >
            <p className="mt-5 text-center font-inter text-gray-900  text-xl " >Todas nuestras habitaciones incluyen:</p>
            <div className="flex justify-center space-x-14" >
                <p className="text-center text-xl text-gray-600" >🛋️ <br /> Mobiliario de lujo</p>
                <p className="text-center text-xl text-gray-600" >🌡️ <br /> Control climático</p>
                <p className="text-center text-xl text-gray-600" >📶 <br /> Wi-Fi de alta velocidad</p>
                <p className="text-center text-xl text-gray-600" >🛁 <br /> Amenidades premium</p>
            </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
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
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="w-[28%] bg-white shadow-lg rounded-lg overflow-hidden hover:-translate-y-1 transform transition duration-500">
                <img className="w-full h-64 object-cover" src="/public/img/habitacion4.avif" alt="Suite Ejecutiva"/>
                <div className="p-4">
                    <h3 className="text-xl font-cormorant text-gray-800 mb-2">Habitación Premium</h3>
                    <p className="text-gray-600 text-lg  font-inter mb-4">Habitación espaciosa con vistas panorámicas, cama king size y baño de lujo con bañera de hidromasaje.</p>
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-inter font-light text-gray-800">$249/noche</span>
                        <a href="#" className="text-teal-500 font-semibold text-xl hover:underline">
                           Ver Detalles →
                        </a>
                    </div>
                </div>
            </div>

        <div className="w-[28%] bg-white shadow-lg rounded-lg overflow-hidden hover:-translate-y-1 transform transition duration-300">
            <img className="w-full h-64 object-cover" src="/public/img/habitacion5.avif" alt="Suite Deluxe"/>
            <div className="p-4">
                <h3 className="text-xl font-cormorant text-gray-800 mb-2">Suite Familiar</h3>
                <p className="text-gray-600 text-lg font-inter mb-4">Amplia suite con dos habitaciones, perfecta para familias. Incluye área de juegos y servicios especiales para niños.</p>
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-inter font-light text-gray-800">$449/noche</span>
                    <a href="#" className="text-teal-500 font-semibold text-xl hover:underline">
                      Ver Detalles →
                    </a>
                </div>
            </div>
        </div>

        <div className="w-[28%] bg-white shadow-lg rounded-lg overflow-hidden hover:-translate-y-1 transform transition duration-500">
            <img className="w-full h-64 object-cover" src="/public/img/habitacion6.avif" alt="Suite Presidencial"/>
            <div className="p-4">
              <h3 className="text-xl font-cormorant text-gray-800 mb-2">Suite Ocean View</h3>
              <p className="text-gray-600 text-lg font-inter mb-4">Espectacular suite con vistas al océano, terraza privada y acceso directo a la playa. Experiencia única frente al mar.</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-inter font-light text-gray-800">$499/noche</span>
                <a href="#" className="text-teal-500 font-semibold text-xl hover:underline">
                  Ver Detalles →
                </a>
              </div>
            </div>
          </div>
        </div>
        <Derechos />
    </section>
    );
  };  
  
  export default MasHabitaciones;