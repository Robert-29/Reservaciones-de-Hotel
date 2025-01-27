import Menu from '../components/Menu.jsx';
import Derechos from '../components/Derechos.jsx';

const Reservar = () => {

  return (
    <>
    <Menu />
    <div className="px-20 pb-0 flex flex-col space-y-5 mt-32 mb-10 " >
      <h1 className="font-cormorant fotn-light text-4xl tracking-wider text-gray-800" >Suite Ejecutiva</h1>
      <span className="font-inter text-2xl text-gray-600 tracking-wider" >1,999/noche</span>
    </div>
    <section className="flex px-20 space-x-10 mb-10" >
      <div className="w-[50%] ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 md:col-span-2">
          <img src="/public/img/habitacion1.avif"alt="Habitación principal" className="w-full rounded-xl shadow-lg"
          />
        </div>

        <div className="flex gap-4">
          <img src="/public/img/habitacion2.avif" alt="Habitación 1" className="rounded-xl shadow-lg"
          />
          <img src="/public/img/habitacion3.avif" alt="Habitación 2" className="rounded-xl shadow-lg"
          />
        </div>
      </div>
      <div  className='flex flex-col space-y-5 mt-10'>
        <h3 className='font-cormorant font-light text-3xl text-gray-800' >Descripción</h3>
        <p className='font-inter text-xl text-gray-600' >Espaciosa suite con vista a la ciudad, área de trabajo y todas las comodidades para el viajero de negocios. Incluye acceso al lounge ejecutivo.</p>
        <article className='flex items-center space-x-2' >
          <img className='h-6' src="/src/assets/svg/users.svg" alt="user" />
          <p className='text-xl font-inter text-gray-600' >4 Personas</p>
        </article>
        <article className='flex items-center space-x-2' >
          <img className='h-6' src="/src/assets/svg/spa.svg" alt="user" />
          <p className='text-xl font-inter text-gray-600' >2 Camas matrimoniales</p>
        </article>
        <div className='grid grid-cols-2 gap-4' >
          <div className='space-x-5 bg-gray-50 rounded-xl flex items-center p-5' >
            <img src="/src/assets/svg/wifi.svg" alt="" />
            <p>Wi-Fi de alta velocidad</p>
          </div>
          <div className='space-x-5 bg-gray-50 rounded-xl flex items-center p-5' >
            <img src="/src/assets/svg/tasa.svg" alt="" />
            <p>Cafetera premium</p>
          </div>
          <div className='space-x-5 bg-gray-50 rounded-xl flex items-center p-5' >
            <img src="/src/assets/svg/bañera.svg" alt="" />
            <p>Baño de lujo</p>
          </div>
          <div className='space-x-5 bg-gray-50 rounded-xl flex items-center p-5' >
            <img src="/src/assets/svg/TV.svg" alt="" />
            <p>Smart TV 55 P. </p>
          </div>
        </div>
      </div>
    </div>
    <div className="w-[50%] bg-red-600 " ></div>
    </section>
    <Derechos />
    </>
  );
};

export default Reservar;