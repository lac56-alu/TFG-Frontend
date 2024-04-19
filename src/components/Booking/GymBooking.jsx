import { useEffect, useState } from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'
import axios from 'axios'
import swal from 'sweetalert2'
import { useLocalStorage } from '../../hooks/useLocalStorage' 
import { gymIcon, instalacionesIcon } from '../../assets';

export default function GymBooking() {
    const horasDisponibles = [
        { hora: '09:00' },
        { hora: '10:00' },
        { hora: '11:00' },
        { hora: '12:00' },
        { hora: '13:00' },
        { hora: '14:00' },
        { hora: '15:00' },
        { hora: '16:00' },
        { hora: '17:00' },
        { hora: '18:00' },
        { hora: '19:00' },
        { hora: '20:00' },
        { hora: '21:00' },    
    ];

    const reservarHora = (hora) => {
        alert('Has reservado la hora: ' + hora);
    };

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
                            {horaDisponible.hora}
                        </p>
                            
                        <div className={`${styles.flexRight} flex flex-grow flex px-4`}>
                            <button className="button-booking bg-white rounded-[4px] border box-shadow3 texto-centrado"></button>
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
