import Menu from '../components/Menu.jsx';
import Derechos from '../components/derechos.jsx';

const MisReservaciones = () => {
    const reservaciones = [
        {
            tipo: 'Suite Ejecutiva',
            habitacion: '413',
            checkIn: '31 de enero, 2025',
            checkOut: '3 de febrero, 2025',
            huespedes: 'Roberto Carlos Ramírez Hernandez',
            servicios: [
                { nombre: 'Servicio de transporte', precio: 35 },
                { nombre: 'Desayuno buffet', precio: 25 },
                { nombre: 'Acceso al spa', precio: 45 },
                { nombre: 'Estacionamiento', precio: 15 }
            ],
            total: 1017
        },
        {
            tipo: 'Suite Ejecutiva',
            habitacion: '479',
            checkIn: '31 de enero, 2025',
            checkOut: '31 de enero, 2025',
            huespedes: 'Roberto Carlos',
            servicios: [
                { nombre: 'Desayuno buffet', precio: 25 }
            ],
            total: 25
        }
    ];

    return (
        <>
            <Menu />
            <h1 className='font-cormorant font-light text-gray-700 text-4xl tracking-wider mt-32 px-20'>Mis reservaciones</h1>
            <div className='px-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
                {reservaciones.map((reserva, index) => (
                    <div key={index} className='border rounded-2xl p-6 shadow-lg bg-white'>
                        <h2 className='text-2xl font-semibold'>{reserva.tipo}</h2>
                        <p className='text-gray-500'>Habitación {reserva.habitacion}</p>
                        <div className='mt-4'>
                            <p className='text-gray-700'><strong>Check-in:</strong> {reserva.checkIn}</p>
                            <p className='text-gray-700'><strong>Check-out:</strong> {reserva.checkOut}</p>
                        </div>
                        <p className='mt-4 text-gray-700'><strong>Huéspedes:</strong> <span className='bg-gray-200 px-2 py-1 rounded-md'>{reserva.huespedes}</span></p>
                        <div className='mt-4'>
                            <p className='text-gray-700 font-semibold'>Servicios Extra</p>
                            <ul className='mt-2 text-gray-700'>
                                {reserva.servicios.map((servicio, i) => (
                                    <li key={i} className='flex justify-between'>
                                        <span>{servicio.nombre}</span>
                                        <span>${servicio.precio}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='mt-4 flex justify-between font-bold text-lg'>
                            <span>Total</span>
                            <span>${reserva.total}</span>
                        </div>
                        <span className='mt-4 inline-block bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold'>Pendiente</span>
                    </div>
                ))}
            </div>
            <Derechos />
        </>
    );
};

export default MisReservaciones;
