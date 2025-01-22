import Derechos from "../components/derechos";
import Menu from "../components/Menu";

const MasHabitaciones = () => {
    return (
      <section>
        <Menu />
        <h1 className="mt-32 text-center font-cormorant font-light text-4xl text-gray-700 tracking-wider" >Nuestras Habitaciones</h1>
        <p className="mt-5 text-center font-inter text-gray-500  text-2xl " >Descubre el lujo y el confort en cada una de nuestras exclusivas habitaciones y suites</p>
        <div className="flex flex-col bg-slate-50 p-10 mt-8 space-y-5 " >
            <p className="mt-5 text-center font-inter text-gray-900  text-xl " >Todas nuestras habitaciones incluyen:</p>
            <div className="flex justify-center space-x-14" >
                <p className="text-center text-xl text-gray-600" >🛋️ <br /> Mobiliario de lujo</p>
                <p className="text-center text-xl text-gray-600" >🌡️ <br /> Control climático</p>
                <p className="text-center text-xl text-gray-600" >📶 <br /> Wi-Fi de alta velocidad</p>
                <p className="text-center text-xl text-gray-600" >🛁 <br /> Amenidades premium</p>
            </div>
        </div>
        <Derechos />
      </section>
    );
  };  
  
  export default MasHabitaciones;