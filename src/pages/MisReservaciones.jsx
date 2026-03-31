import { useState, useEffect } from 'react';
import Menu from '../components/Menu.jsx';
import Derechos from '../components/derechos.jsx';
import { obtenerUsuario } from '../utils/auth.js';
import { QRCodeCanvas } from 'qrcode.react';

const MisReservaciones = () => {
    const [reservaciones, setReservaciones] = useState([]);
    const [usuario, setUsuario] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const usuarioActual = obtenerUsuario();
        if (!usuarioActual) {
            window.location.href = '/iniciarsesion';
            return;
        }
        setUsuario(usuarioActual);

        // Cargar reservaciones del usuario
        fetch(`http://localhost:3000/reservaciones?usuario_id=${usuarioActual.id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar las reservaciones');
                }
                return response.json();
            })
            .then(data => {
                setReservaciones(data);
                setCargando(false);
            })
            .catch(err => {
                console.error(err);
                setError('Error al cargar las reservaciones');
                setCargando(false);
            });
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const descargarQR = (reservaId) => {
        const canvas = document.getElementById(`qr-${reservaId}`);
        if (canvas) {
            const url = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = `reservacion-${reservaId}.png`;
            link.href = url;
            link.click();
        }
    };

    if (cargando) {
        return (
            <>
                <Menu />
                <div className='flex justify-center items-center h-screen'>
                    <p className='text-2xl font-inter text-gray-600'>Cargando reservaciones...</p>
                </div>
            </>
        );
    }

    if (error) {
        return (
            <>
                <Menu />
                <div className='flex justify-center items-center h-screen'>
                    <p className='text-2xl font-inter text-red-600'>{error}</p>
                </div>
            </>
        );
    }

    return (
        <>
            <Menu />
            <h1 className='font-cormorant font-light text-gray-700 text-4xl tracking-wider mt-32 px-20'>Mis reservaciones</h1>

            {reservaciones.length === 0 ? (
                <div className='px-20 py-10'>
                    <p className='text-xl font-inter text-gray-600 text-center'>No tienes reservaciones aún.</p>
                    <div className='flex justify-center mt-6'>
                        <a href='/mashabitaciones' className='bg-gray-900 text-white px-6 py-3 rounded-md font-inter hover:bg-gray-700 transition'>
                            Explorar Habitaciones
                        </a>
                    </div>
                </div>
            ) : (
                <div className='px-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {reservaciones.map((reserva) => {
                        const servicios = typeof reserva.servicios_adicionales === 'string'
                            ? JSON.parse(reserva.servicios_adicionales)
                            : reserva.servicios_adicionales || [];

                        const qrData = JSON.stringify({
                            reservacion_id: reserva.id,
                            habitacion: reserva.habitacion_nombre,
                            numero_habitacion: reserva.numero_habitacion,
                            check_in: reserva.check_in,
                            check_out: reserva.check_out,
                            huesped: reserva.nombre_huesped,
                            total: reserva.precio_total
                        });

                        return (
                            <div key={reserva.id} className='border rounded-2xl p-6 shadow-lg bg-white'>
                                <div className='flex justify-between items-start'>
                                    <div className='flex-1'>
                                        <h2 className='text-2xl font-semibold'>{reserva.habitacion_nombre}</h2>
                                        <p className='text-gray-500'>Habitación {reserva.numero_habitacion}</p>
                                    </div>
                                    <div className='bg-white p-2 border-2 border-gray-200 rounded-lg'>
                                        <QRCodeCanvas
                                            id={`qr-${reserva.id}`}
                                            value={qrData}
                                            size={120}
                                            level="H"
                                        />
                                    </div>
                                </div>

                                <div className='mt-4'>
                                    <p className='text-gray-700'><strong>Check-in:</strong> {formatDate(reserva.check_in)}</p>
                                    <p className='text-gray-700'><strong>Check-out:</strong> {formatDate(reserva.check_out)}</p>
                                    <p className='text-gray-700'><strong>Noches:</strong> {reserva.noches}</p>
                                    <p className='text-gray-700'><strong>Huéspedes:</strong> {reserva.numero_huespedes}</p>
                                </div>

                                <p className='mt-4 text-gray-700'><strong>Huésped:</strong> <span className='bg-gray-200 px-2 py-1 rounded-md'>{reserva.nombre_huesped}</span></p>

                                {servicios && servicios.length > 0 && (
                                    <div className='mt-4'>
                                        <p className='text-gray-700 font-semibold'>Servicios Extra</p>
                                        <ul className='mt-2 text-gray-700'>
                                            {servicios.map((servicio, i) => (
                                                <li key={i} className='flex justify-between'>
                                                    <span>{servicio.nombre}</span>
                                                    <span>${servicio.precio}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className='mt-4 space-y-2 border-t pt-4'>
                                    <div className='flex justify-between text-gray-700'>
                                        <span>Precio habitación:</span>
                                        <span>${reserva.precio_habitacion}</span>
                                    </div>
                                    {reserva.precio_servicios > 0 && (
                                        <div className='flex justify-between text-gray-700'>
                                            <span>Servicios adicionales:</span>
                                            <span>${reserva.precio_servicios}</span>
                                        </div>
                                    )}
                                    <div className='flex justify-between font-bold text-lg border-t pt-2'>
                                        <span>Total</span>
                                        <span>${reserva.precio_total}</span>
                                    </div>
                                </div>

                                <div className='mt-4 flex justify-between items-center'>
                                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${reserva.estado === 'confirmada' ? 'bg-green-200 text-green-800' :
                                            reserva.estado === 'cancelada' ? 'bg-red-200 text-red-800' :
                                                'bg-yellow-200 text-yellow-800'
                                        }`}>
                                        {reserva.estado.charAt(0).toUpperCase() + reserva.estado.slice(1)}
                                    </span>
                                    <button
                                        onClick={() => descargarQR(reserva.id)}
                                        className='text-blue-600 hover:text-blue-800 font-inter text-sm underline'
                                    >
                                        Descargar QR
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
            <Derechos />
        </>
    );
};

export default MisReservaciones;
