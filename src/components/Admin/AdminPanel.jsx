import React from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { profileIcon, rateIcon, bookingIcon, scheduleIcon } from '../../assets';


function AdminPanel() {
    const redirectUserAdmin = () =>{
        window.location.href = '/user-admin'; 
    }
    
    const redirectRateAdmin = () =>{
        window.location.href = '/rate-admin'; 
    }

    const redirectGymBookingAdmin = () =>{
        window.location.href = '/gym-booking-admin'; 
    }

    const redirectScheduleAdmin = () =>{
        window.location.href = '/rates'; 
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
                        Panel de Administracion
                    </h2>
                </div>
            </div>
        </div>

        <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col flex flex-1 gridContainer2`}>
            <button className={`${styles.flexCenter} hover:text-secondary bg-black-gradient-2 rounded-[20px] box-shadow flex flex-col flex-grow mb-8 sm:mr-4`}
                onClick={redirectUserAdmin}>
                <p className={`${styles.heading4} ${styles.flexCenter} text-center mt-2 max-w-[90%] hover:text-secondary`}>
                    Usuarios
                </p>
                <div className="text-center"> {/* Contenedor para texto e imagen */}
                    <img src={profileIcon} alt='iconoPerfil' className='w-[120px] h-[120px] mt-3 sm: mb-8' /> 
                </div>
            </button>

            <button className={`${styles.flexCenter} hover:text-secondary bg-black-gradient-2 rounded-[20px] box-shadow flex flex-col flex-grow mb-8 sm:mr-4`}
                onClick={redirectRateAdmin}>
                <p className={`${styles.heading4} ${styles.flexCenter} text-center mt-2 max-w-[90%] hover:text-secondary`}>
                    Tarifas
                </p>
                <div className="text-center"> {/* Contenedor para texto e imagen */}
                    <img src={rateIcon} alt='rateIcon' className='w-[120px] h-[120px] mt-3 sm: mb-8' /> 
                </div>
            </button>

            <button className={`${styles.flexCenter} hover:text-secondary bg-black-gradient-2 rounded-[20px] box-shadow flex flex-col flex-grow mb-8 sm:mr-4`}
                onClick={redirectGymBookingAdmin}>
                <p className={`${styles.heading4} ${styles.flexCenter} text-center mt-2 max-w-[90%] hover:text-secondary`}>
                    Reservas
                </p>
                <div className="text-center"> {/* Contenedor para texto e imagen */}
                    <img src={bookingIcon} alt='blogIcon' className='w-[120px] h-[120px] mt-3 sm: mb-8' /> 
                </div>
            </button>

            <button className={`${styles.flexCenter} hover:text-secondary bg-black-gradient-2 rounded-[20px] box-shadow flex flex-col flex-grow mb-8 sm:mr-4`}
                onClick={redirectScheduleAdmin}>
                <p className={`${styles.heading4} ${styles.flexCenter} text-center mt-2 max-w-[90%] hover:text-secondary`}>
                    Horario
                </p>
                <div className="text-center"> {/* Contenedor para texto e imagen */}
                    <img src={scheduleIcon} alt='scheduleIcon' className='w-[120px] h-[120px] mt-3 sm: mb-8' /> 
                </div>
            </button>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>
      
    </div>
  )
}

export default AdminPanel
