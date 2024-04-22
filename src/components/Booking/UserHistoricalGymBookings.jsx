import { useEffect, useState } from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'
import axios from 'axios'
import swal from 'sweetalert2'
import { searchIcon } from '../../assets';

export default function UserHistoricalGymBookings() {
    const [reservas, setReservas] = useState([]);
    const [busqueda, setBusqueda] = useState('');

    useEffect(() => {
        getBookings();
    }, []);

    
    const getBookings = async () => {
        try {
            const url = 'http://localhost:8082/tfg/gym_bookings/searchGymBooking/';
            const tokenUser = window.localStorage.getItem('token');
            const urlCompleta = url + tokenUser;
            const urlSinComillas = urlCompleta.replace(/"/g, '');
            const response = await axios.get(urlSinComillas);

            setReservas(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    

    const handleBusquedaChange = (e) => {
        setBusqueda(e.target.value);
    };

    const reservasFiltrados = reservas.filter((booking) => {
        const datosReserva = `${booking.id} ${formatDate(booking.date)}`;
    
        return datosReserva.toLowerCase().includes(busqueda.toLowerCase());
    });
    

    const actionDeleteBooking = (async (idBooking) => {
        try{
            const url = 'http://localhost:8082/tfg/gym_bookings/deleteAdminGymBooking/';
            const tokenUser = window.localStorage.getItem('token');
            const urlCompleta = url + tokenUser + "/" + idBooking.toString();
            const urlSinComillas = urlCompleta.replace(/"/g, '');
            const response = await axios.delete(urlSinComillas);

            swal.fire({
                icon: 'success',
                title: "¡Reserva borrada!",
                text: "Has borrado la reserva correctamente.",
                showConfirmButton: false,
                timer: 5000
            });
            getBookings();
        } catch(error){
            swal.fire({
                icon: 'error',
                title: error.response.data.errorMessage
            });
            console.error('Error de la API:', error.response.data.errorMessage);
        }
    });

    const deleteGymBooking = (booking) => {
        swal.fire({
            icon: 'warning',
            title: "Advertencia",
            text: "¿Está seguro que desea eliminar esta reserva?",
            showDenyButton: true,
            denyButtonText: 'No',
            showConfirmButton: true,
            confirmButtonText: 'Si',
            confirmButtonColor: '#000000'
        }).then(response => {
            try {
                if (response.isConfirmed) {
                    actionDeleteBooking(booking.id);
                } else if (response.isDenied) {
                    console.log("No pasó nada");
                } else {
                    swal.fire({
                    icon: 'error',
                    title: "Error",
                    text: "Ocurrió algún tipo de error",
                    })
                }
            } catch (error) {
                swal.fire({
                    icon: 'error',
                    title: error.response.data.errorMessage
                });
                console.error('Error de la API:', error.response.data.errorMessage);
            }
        });
    }; 

    function formatDate(dateString) {
        const date = new Date(dateString);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Los meses comienzan desde 0
        const year = date.getFullYear().toString();
      
        return `Hora: ${hours}:${minutes} , Fecha: ${day}/${month}/${year}`;
    }
      

    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={` ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`${styles.flexCenter} sm:flex-row flex-col `} >
                <div className="flex flex-col justify-center items-center">
                    <div className="text-center">
                        <h2 className={`${styles.heading2}`}>
                            Historial de reservas del gimnasio
                        </h2>
                    </div>
                    
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Buscar reservas..."
                            value={busqueda}
                            onChange={handleBusquedaChange}
                            className={`${styles.input} mt-4 py-2 px-16 font-poppins rounded-[10px]`}
                        />
                        <img src={searchIcon} alt='searchIcon' className='absolute top-0 right-0 w-[30px] h-[30px] mt-5 mr-2' /> 
                    </div>

                </div>
            </div>

            <div className={`${styles.padding} sm:flex-row flex-col flex-grow flex flex-1 gridContainer2`}>
                {reservasFiltrados.map((booking, index) => (
                    <button key={index} className={`bg-black-gradient-2 rounded-[20px] box-shadow flex flex-grow sm:mr-4`}>
                        <div className={`${styles.flexCenter} flex flex-grow mt-2 mb-2`} >
                            <p className={`${styles.paragraph} text-left mt-2 ml-5 max-w-[90%] mr-4`}>
                                {booking.id}
                            </p>

                            <p className={`${styles.paragraph} text-left mt-2 ml-5 max-w-[90%] mr-4`}>
                                {formatDate(booking.date)}
                            </p>
                        </div>
                    </button>
                ))}
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
