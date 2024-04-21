import { useEffect, useState } from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'
import axios from 'axios'
import swal from 'sweetalert2'
import { useLocalStorage } from '../../hooks/useLocalStorage' 
import { gymIcon } from '../../assets';

export default function GymBooking() {
    const[hour, setHour] = useState();

    useEffect(() => {
        actionObtenerReservas();
        actualizarDisponibilidad(horasDisponibles);
    }, []);

    var horasDisponibles = [
        { hora: '09', available: true, reserva: false },
        { hora: '10', available: true, reserva: false },
        { hora: '11', available: true, reserva: false },
        { hora: '12', available: true, reserva: false },
        { hora: '13', available: true, reserva: false },
        { hora: '14', available: true, reserva: false },
        { hora: '15', available: true, reserva: false },
        { hora: '16', available: true, reserva: false },
        { hora: '17', available: true, reserva: false },
        { hora: '18', available: true, reserva: false },
        { hora: '19', available: true, reserva: false },
        { hora: '20', available: true, reserva: false },
        { hora: '21', available: true, reserva: false },    
    ];

    function actualizarDisponibilidad(horasDisponibles) {
        const horaActual = new Date().getHours();

        if(hour){
            horasDisponibles.forEach(comprobar => {
                if(comprobar.hora != hour){
                    comprobar.available = false;
                }
                else {
                    comprobar.reserva = true;
                }
            });
        } else {
            horasDisponibles.forEach(comprobar => {
                if(comprobar.hora == hour){
                    console.log("here")
                    comprobar.reserva = true;
                }
                const horaArray = parseInt(comprobar.hora);
                comprobar.available = horaArray >= horaActual; 
            });
        }

        return horasDisponibles;
    }

    horasDisponibles = actualizarDisponibilidad(horasDisponibles);
    
    
    const actionReserva = (async (hour) => {
        try{
            const url = 'http://localhost:8082/tfg/gym_bookings/createGymBooking/';
            const tokenUser = window.localStorage.getItem('token');
            const urlCompleta = url + tokenUser + "/" + hour;
            const urlSinComillas = urlCompleta.replace(/"/g, '');
            const response = await axios.post(urlSinComillas);
            //console.log(response, horasDisponibles)
        } catch(error){
            swal.fire({
                icon: 'error',
                title: error.response.data.errorMessage
            });
            console.error('Error de la API:', error.response.data.errorMessage);
        }
    });

    const doBooking = (hour) => {
        swal.fire({
            icon: 'info',
            title: "Atención",
            text: "¿Está seguro que desea hacer la reserva?",
            showDenyButton: true,
            denyButtonText: 'No',
            showConfirmButton: true,
            confirmButtonText: 'Si',
            confirmButtonColor: '#000000'
        }).then(response => {
            try {
                if (response.isConfirmed) {
                    actionReserva(hour);
                    window.location.reload();
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

    const actionObtenerReservas = (async () => {
        try{
            const url = 'http://localhost:8082/tfg/gym_bookings/searchGymBookingToday/';
            const tokenUser = window.localStorage.getItem('token');
            const urlCompleta = url + tokenUser;
            const urlSinComillas = urlCompleta.replace(/"/g, '');
            const response = await axios.get(urlSinComillas);

            const dateString = response.data[0].date;
            const date = new Date(dateString);
            setHour(parseInt(date.getHours()) - 2);
        } catch(error){
            swal.fire({
                icon: 'error',
                title: error.response.data.errorMessage
            });
            console.error('Error de la API:', error.response.data.errorMessage);
        }
    })
    

  return (
    <div className="bg-primary w-full overflow-hidden">
        <div className={` ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`${styles.flexCenter} sm:flex-row flex-col `} >
            <div className="flex flex-col justify-center items-center">
                <div className="text-center"> {/* Contenedor para texto e imagen */}
                    <h2 className={`${styles.heading2}`}>
                        Reserva de Gimnasio
                    </h2>
                </div>
            </div>
        </div>

        <div className={`${styles.flexCenter}`}>
            <div className={`${styles.marginY} ${styles.flexRight} ${styles.paragraph} flex flex-col rounded-[20px] box-shadow2 mb-8 sm:mr-4`}>
                {horasDisponibles.map((horaDisponible, index) => (
                    <div className={`${styles.flexCenter} flex`} key={index}>
                        <p className={`texto-centrado text-secondary px-4`}>
                            {horaDisponible.hora}:00
                        </p>
                            
                        <div className={`${styles.flexRight} flex flex-grow flex px-4`}>
                            <button className="button-booking bg-white rounded-[4px] border box-shadow3 texto-centrado text-black"
                                disabled={!horaDisponible.available}
                                style={{
                                    backgroundColor: horaDisponible.reserva ? '#00FF00' : (horaDisponible.available ? '#ffffff' : '#ffffff6b'),
                                    pointerEvents: horaDisponible.available ? 'auto' : 'none'
                                }} onClick={() => doBooking(horaDisponible.hora)}>
                                    {horaDisponible.reserva ? "Reservado ✔️" : ""}

                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>
    </div>
  )
}
