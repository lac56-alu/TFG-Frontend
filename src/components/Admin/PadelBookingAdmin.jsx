import { useEffect, useState } from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'
import axios from 'axios'
import swal from 'sweetalert2'
import { searchIcon } from '../../assets';

export default function GymBookingAdmin() {
    const [reservas, setReservas] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getBookings();
    }, []);

    
    const getBookings = async () => {
        try {
            const url = 'http://localhost:8082/tfg/padel_bookings/getPadelBookingsAdmin/';
            const tokenUser = window.localStorage.getItem('token');
            const urlCompleta = url + tokenUser;
            const urlSinComillas = urlCompleta.replace(/"/g, '');
            const response = await axios.get(urlSinComillas);

            setReservas(response.data);
            getUsers(response.data)
        } catch (error) {
            console.log(error);
        }
    };

    const getUsers = async (bookings) => {
        try {
            const users = [];
            for (const booking of bookings) {
                const url = `http://localhost:8082/tfg/users/${booking.fk_users}`;
                const response = await axios.get(url);
                const userName = response.data.name.toString();

                users.push({
                    id: booking.fk_users,
                    name: userName
                });
            }
            setUsers(users);
            return users;
        } catch (error) {
            console.log(error);
            return [];
        }
    };
    

    const handleBusquedaChange = (e) => {
        setBusqueda(e.target.value);
    };

    const reservasFiltrados = reservas.filter((booking) => {
        const nombreUsuario = users.find((user) => user.id === booking.fk_users)?.name || '';
        const datosReserva = `${booking.id} ${formatDate(booking.date)} ${nombreUsuario}`;
    
        return datosReserva.toLowerCase().includes(busqueda.toLowerCase());
    });
    

    const actionDeleteBooking = (async (idBooking) => {
        try{
            const url = 'http://localhost:8082/tfg/padel_bookings/deleteAdminPadelBooking/';
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

    const deletePadelBooking = (booking) => {
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
                            Adminstración de reservas de pistas de pádel
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
                        <div className={`${styles.flexLeft} flex flex-grow`} >
                            <p className={`${styles.paragraph} text-left mt-2 ml-5 max-w-[90%] mr-4`}>
                                {booking.id}
                            </p>

                            <p className={`${styles.paragraph} text-left mt-2 ml-5 max-w-[90%] mr-4`}>
                                {formatDate(booking.date)}
                            </p>

                            <p className={`${styles.paragraph} text-left mt-2 max-w-[90%] mr-2`}>
                                Pista Nº{booking.num_court}
                            </p>

                            <p className={`${styles.paragraph} text-left mt-2 ml-5 max-w-[90%] mr-4`}>
                                {users[index]?.name || 'Nombre no encontrado'}
                            </p>
                        </div>

                        <div className={`${styles.flexCenter} flex flex-grow sm:flex-1 mt-3`} >
                            <button type='button' className={`${styles.flexCenter} py-2 px-4 bg-red-gradient font-poppins font-medium text-[14px] 
                                                                text-primary outline-none ${styles} rounded-[10px] mt-auto mb-3 mr-3`} onClick={() => deletePadelBooking(booking)}>
                                X
                            </button>
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
