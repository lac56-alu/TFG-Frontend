import { useEffect, useState } from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'
import axios from 'axios'
import swal from 'sweetalert2'
import { useLocalStorage } from '../../hooks/useLocalStorage' 
import { gymIcon } from '../../assets';

export default function PadelBooking() {
    const[hour, setHour] = useState();
    const[numCourt, setNumCourt] = useState();

    useEffect(() => {
        actionObtenerReservasPadel();
        actualizarDisponibilidadPadel(horasDisponiblesPadel1, numCourt);
        actualizarDisponibilidadPadel(horasDisponiblesPadel2, numCourt);
    }, []);

    var horasDisponiblesPadel1 = [
        { hora: '09', interval: '09:00 - 11:00', available: true, reserva: false, numCourt: 1  },
        { hora: '11', interval: '11:00 - 13:00', available: true, reserva: false, numCourt: 1  },
        { hora: '16', interval: '16:00 - 18:00', available: true, reserva: false, numCourt: 1  },
        { hora: '18', interval: '18:00 - 20:00', available: true, reserva: false, numCourt: 1  },   
    ];

    var horasDisponiblesPadel2 = [
        { hora: '09', interval: '09:00 - 11:00', available: true, reserva: false, numCourt: 2 },
        { hora: '11', interval: '11:00 - 13:00', available: true, reserva: false, numCourt: 2  },
        { hora: '16', interval: '16:00 - 18:00', available: true, reserva: false, numCourt: 2  },
        { hora: '18', interval: '18:00 - 20:00', available: true, reserva: false, numCourt: 2  },   
    ];

    function actualizarDisponibilidadPadel(horasDisponiblesPadel1, numCourt) {
        const horaActual = new Date().getHours();

        if(hour && numCourt){
            horasDisponiblesPadel1.forEach(comprobar => {
                if(comprobar.hora != hour && comprobar.numCourt != numCourt){
                    comprobar.available = false;
                }
                
                if(comprobar.hora == hour && comprobar.numCourt == numCourt){
                    comprobar.reserva = true;
                }
                else{
                    comprobar.available = false;
                }
            });
        } else {
            horasDisponiblesPadel1.forEach(comprobar => {
                if(comprobar.hora == hour && comprobar.numCourt == numCourt){
                    comprobar.reserva = true;
                }
                const horaArray = parseInt(comprobar.hora);
                comprobar.available = (parseInt(horaArray) + 1) >= parseInt(horaActual); 
            });
        }

        return horasDisponiblesPadel1;
    }

    horasDisponiblesPadel1 = actualizarDisponibilidadPadel(horasDisponiblesPadel1, numCourt);
    horasDisponiblesPadel2 = actualizarDisponibilidadPadel(horasDisponiblesPadel2, numCourt);
    
    
    const actionReservaPadel = (async (hour, num_court) => {
        try{
            const url = 'http://localhost:8082/tfg/padel_bookings/createPadelBooking/';
            const tokenUser = window.localStorage.getItem('token');
            const urlCompleta = url + tokenUser + "/" + hour + "/" + num_court;
            const urlSinComillas = urlCompleta.replace(/"/g, '');
            const response = await axios.post(urlSinComillas);
        } catch(error){
            swal.fire({
                icon: 'error',
                title: error.response.data.errorMessage
            });
            console.error('Error de la API:', error.response.data.errorMessage);
        }
    });

    const doBookingPadel = (hour, num_court) => {
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
                    actionReservaPadel(hour, num_court);
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

    const actionObtenerReservasPadel = (async () => {
        try{
            const url = 'http://localhost:8082/tfg/padel_bookings/searchPadelBookingToday/';
            const tokenUser = window.localStorage.getItem('token');
            const urlCompleta = url + tokenUser;
            const urlSinComillas = urlCompleta.replace(/"/g, '');
            const response = await axios.get(urlSinComillas);

            const dateString = response.data[0].date;
            const date = new Date(dateString);
            setHour(parseInt(date.getHours()) - 2);
            setNumCourt(response.data[0].num_court);
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
                        Reserva pistas pádel
                    </h2>
                </div>
            </div>
        </div>

        <div className={`${styles.flexCenter} sm:flex-row flex-col flex flex-1`}>
            <div className={`${styles.marginY} ${styles.flexRight} ${styles.paragraph} flex flex-col rounded-[20px] box-shadow2 mb-8 sm:mr-4`}>
                {horasDisponiblesPadel1.map((horaDisponible, index) => (
                    <div className={`${styles.flexCenter} flex`} key={index}>
                        <p className={`texto-centrado text-secondary px-4`}>
                            {horaDisponible.interval}
                        </p>
                            
                        <div className={`${styles.flexRight} flex flex-grow flex px-4`}>
                            <button className="button-booking bg-white rounded-[4px] border box-shadow3 texto-centrado text-black"
                                disabled={!horaDisponible.available}
                                style={{
                                    backgroundColor: horaDisponible.reserva ? '#00FF00' : (horaDisponible.available ? '#ffffff' : '#ffffff6b'),
                                    pointerEvents: horaDisponible.available ? 'auto' : 'none'
                                }} onClick={() => doBookingPadel(horaDisponible.hora, horaDisponible.numCourt)}>
                                    {horaDisponible.reserva ? "Reservado ✔️" : ""}

                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className={`${styles.marginY} ${styles.flexRight} ${styles.paragraph} flex flex-col rounded-[20px] box-shadow2 mb-8 sm:mr-4`}>
                {horasDisponiblesPadel2.map((horaDisponible, index) => (
                    <div className={`${styles.flexCenter} flex`} key={index}>
                        <p className={`texto-centrado text-secondary px-4`}>
                            {horaDisponible.interval}
                        </p>
                            
                        <div className={`${styles.flexRight} flex flex-grow flex px-4`}>
                            <button className="button-booking bg-white rounded-[4px] border box-shadow3 texto-centrado text-black"
                                disabled={!horaDisponible.available}
                                style={{
                                    backgroundColor: horaDisponible.reserva ? '#00FF00' : (horaDisponible.available ? '#ffffff' : '#ffffff6b'),
                                    pointerEvents: horaDisponible.available ? 'auto' : 'none'
                                }} onClick={() => doBookingPadel(horaDisponible.hora, horaDisponible.numCourt)}>
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
