import { useState } from 'react';
import Menu from '../components/Menu.jsx';
import Derechos from '../components/Derechos.jsx';
import {DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Reservar = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const servicios = [
    { id: 1, nombre: "Desayuno buffet", precio: 25 },
    { id: 2, nombre: "Acceso al spa", precio: 45 },
    { id: 3, nombre: "Servicio de transporte", precio: 35 },
    { id: 4, nombre: "Estacionamiento", precio: 15 },
  ];
  const [seleccionados, setSeleccionados] = useState([]);

  const manejarSeleccion = (id) => {
    setSeleccionados((prevSeleccionados) =>
      prevSeleccionados.includes(id)
        ? prevSeleccionados.filter((item) => item !== id)
        : [...prevSeleccionados, id]
    );
  };

  const calcularTotal = () =>
    seleccionados.reduce(
      (total, id) => total + servicios.find((s) => s.id === id).precio,
      0
    );

  //formatear la fecha de manera que sea mas legible
  const formatDate = (date) => {
    if (!date) return ''; // Si no hay fecha seleccionada, retorna un string vacío
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };


  // Función para calcular los días entre check-in y check-out
  const calculateDays = (checkIn, checkOut) => {
    if (!checkIn || !checkOut) return 0; // Si alguna de las fechas no está seleccionada, retorna 0
    const timeDifference = checkOut.getTime() - checkIn.getTime(); // Diferencia en milisegundos
    const days = timeDifference / (1000 * 3600 * 24); // Convertir milisegundos a días
    return days;
  };


  return (
    <>
    <Menu />
    <div className="px-20 pb-0 flex flex-col space-y-5 mt-32 mb-10 " >
      <h1 className="font-cormorant fotn-light text-4xl tracking-wider text-gray-800" >Suite Ejecutiva</h1>
    </div>
    <section className="flex px-16 space-x-10 mb-10" >
      <div className="w-[45%] ">
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

    <div className="w-[55%] p-10 shadow-lg rounded-xl space-y-5 " >
      <h2 className='font-cormorant font-light text-gray-800 tracking-wider text-2xl' >Reservar Suite Ejecutiva </h2>
      <div className=' bg-gray-50 rounded-xl p-5 flex flex-col justify-center items-center' >
        <span className='font-inter text-xl ' >1,999/por noche</span>
      </div>

      {/* Calendario Check-in */}
      <div className='flex space-x-3 w-full' >
        <div className="bg-white border-gray-100 border-2 p-2 rounded-lg w-[50%]">
          <h3 className="text-lg font-medium mb-4">Check-in</h3>
          <DayPicker
            mode="single"
            selected={checkIn}
            onSelect={setCheckIn}
            disabled={checkOut ? { after: checkOut } : undefined}
            className="text-gray-800"
          />
        </div>

        {/* Calendario Check-out */}
        <div className="bg-white border-gray-100 border-2 p-2 rounded-lg w-[50%] ">
          <h3 className="text-lg font-medium mb-4">Check-out</h3>
          <DayPicker
            mode="single"
            selected={checkOut}
            onSelect={setCheckOut}
            disabled={checkIn ? { before: checkIn } : undefined}
            className="text-gray-800"
          />
        </div>
      </div>
      <h3 className='font-inter font-semibold' >Servicios Adicionales</h3>
      <div className='font-inter grid grid-cols-2' >
      {servicios.map((servicio) => (
          <label
            key={servicio.id}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={seleccionados.includes(servicio.id)}
              onChange={() => manejarSeleccion(servicio.id)}
              className="w-5 h-5 accent-black "
            />
            <span className="text-gray-700">
              {servicio.nombre} (${servicio.precio})
            </span>
          </label>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-gray-800 font-medium">
          Total Servicios: <span className="font-semibold">${calcularTotal()}</span>
        </p>
      </div>
      <div className='flex flex-col justify-center space-y-2' >
        <h3 className='font-inter font-semibold' >Información de Reservación</h3>
        <p className='font-inter text-gray-600' >{formatDate(checkIn) == 0 ? "" : `Check-In: ${formatDate(checkIn)}`  } </p>
        <p className='font-inter text-gray-600' >{formatDate(checkOut) == 0 ? "" : `Check-Out: ${formatDate(checkOut)}`  } </p>
        <p className='font-inter text-gray-600' >{calculateDays(checkIn, checkOut) == 0 ? "" : `Noches reservadas: ${calculateDays(checkIn, checkOut)}`  } </p>
        <p className='font-inter text-gray-600' >{seleccionados.length == 0 ? "" : `Servicios adicionales: ${seleccionados.length} ` } </p>
        <p className='font-inter text-gray-600' >{formatDate(checkIn) == 0 & formatDate(checkOut) == 0 & seleccionados.length == 0 ? "Sin seleccionar Check-in, check-out y Servicios adicionales" : ""  } </p>
      </div>
    <div className='flex flex-col space-y-2' >
      <h3 className='font-inter font-semibold' >Información de Contacto</h3>
      <p> <strong>Nombre:</strong> Roberto Carlos Ramirez Hernandez </p>
      <p> <strong>Email:</strong> robert292005@gmail.com</p>
      <p> <strong>Teléfono:</strong> 55 4904 0246 </p>
      <p></p>
      <p></p>
    </div>
    </div>   
    </section>
    <Derechos />
    </>
  );
};

export default Reservar;