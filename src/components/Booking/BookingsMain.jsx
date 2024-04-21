import { useEffect, useState } from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'
import axios from 'axios'
import swal from 'sweetalert2'
import { useLocalStorage } from '../../hooks/useLocalStorage' 
import { gymIcon, instalacionesIcon } from '../../assets';


function BookingsMain() {
    const redirectGymBooking = () => {
        window.location.href = '/gym-booking';
    };

    const redirectSportFacilities = () => {
        window.location.href = '/padel-booking';
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
                            Reserva
                        </h2>
                    </div>
                </div>
            </div>

            <div className={`${styles.flexCenter} ${styles.padding} sm:flex-row flex-col flex flex-1 gridContainer2`}>
                <div className={`${styles.flexCenter} bg-black-gradient-2 rounded-[20px] box-shadow flex flex-col flex-grow mb-8 sm:mr-4`}
                    onClick={redirectGymBooking}>
                    
                    <h2 className={`${styles.heading6} ${styles.flexCenter} textPlatinum`}>
                        GIMNASIO
                    </h2>
                    <div className="text-center"> {/* Contenedor para texto e imagen */}
                        <img src={gymIcon} alt='gymIcon' className='w-[140px] h-[140px] mt-3 sm: mb-8' /> 
                    </div>
                </div>

                <div className={`${styles.flexCenter} bg-black-gradient-2 rounded-[20px] box-shadow flex flex-col flex-grow mb-8 sm:mr-4`}
                    onClick={redirectSportFacilities}>
                    <h2 className={`${styles.heading6} ${styles.flexCenter} textPlatinum`}>
                        INSTALACIONES
                    </h2>
                    <div className="text-center"> {/* Contenedor para texto e imagen */}
                        <img src={instalacionesIcon} alt='instalacionesIcon' className='w-[140px] h-[140px] mt-3 sm: mb-8' /> 
                    </div>   
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

export default BookingsMain
