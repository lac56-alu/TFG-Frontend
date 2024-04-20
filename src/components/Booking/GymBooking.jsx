import { useEffect, useState } from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'
import axios from 'axios'
import swal from 'sweetalert2'
import { useLocalStorage } from '../../hooks/useLocalStorage' 
import { gymIcon, instalacionesIcon } from '../../assets';

export default function GymBooking() {
    useEffect(() => {
        actualizarDisponibilidad(horasDisponibles);
    }, []);

    const horasDisponibles = [
        { hora: '09', available: true },
        { hora: '10', available: true },
        { hora: '11', available: true },
        { hora: '12', available: true },
        { hora: '13', available: true },
        { hora: '14', available: true },
        { hora: '15', available: true },
        { hora: '16', available: true },
        { hora: '17', available: true },
        { hora: '18', available: true },
        { hora: '19', available: true },
        { hora: '20', available: true },
        { hora: '21', available: true },    
    ];

    function actualizarDisponibilidad(horasDisponibles) {
        const horaActual = new Date().getHours();
    
        horasDisponibles.forEach(comprobar => {
            const horaArray = parseInt(comprobar.hora);
            comprobar.available = horaArray >= horaActual; 
        });
    
        return horasDisponibles;
    }
    
    // Uso de la función
    const horasDisponiblesActualizadas = actualizarDisponibilidad(horasDisponibles);
    console.log(horasDisponiblesActualizadas);
    

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
                            <button className="button-booking bg-white rounded-[4px] border box-shadow3 texto-centrado"
                                disabled={!horaDisponible.available}
                                style={{
                                    backgroundColor: horaDisponible.available ? '#ffffff' : '#ffffff6b',
                                    pointerEvents: horaDisponible.available ? 'auto' : 'none'
                                }}>
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
