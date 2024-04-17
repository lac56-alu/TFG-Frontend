import React from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'
import axios from 'axios'
import swal from 'sweetalert2'
import { profileIcon, rateIcon, blogIcon, scheduleIcon } from '../../assets';


function AdminPanel() {
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
                        Panel de Administracion
                    </h2>
                </div>
            </div>
        </div>

        <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col flex flex-1 gridContainer2`}>
            <div className={`${styles.flexCenter} bg-black-gradient-2 rounded-[20px] box-shadow flex flex-col flex-grow mb-8 sm:mr-4`}>
                <p className={`${styles.heading4} ${styles.flexCenter} text-center mt-2 max-w-[90%]`}>
                    Usuarios
                </p>
                <div className="text-center"> {/* Contenedor para texto e imagen */}
                    <img src={profileIcon} alt='iconoPerfil' className='w-[120px] h-[120px] mt-3 sm: mb-8' /> 
                </div>
            </div>

            <div className={`${styles.flexCenter} bg-black-gradient-2 rounded-[20px] box-shadow flex flex-col flex-grow mb-8 sm:mr-4`}>
                <p className={`${styles.heading4} ${styles.flexCenter} text-center mt-2 max-w-[90%]`}>
                    Tarifas
                </p>
                <div className="text-center"> {/* Contenedor para texto e imagen */}
                    <img src={rateIcon} alt='rateIcon' className='w-[120px] h-[120px] mt-3 sm: mb-8' /> 
                </div>
            </div>

            <div className={`${styles.flexCenter} bg-black-gradient-2 rounded-[20px] box-shadow flex flex-col flex-grow mb-8 sm:mr-4`}>
                <p className={`${styles.heading4} ${styles.flexCenter} text-center mt-2 max-w-[90%]`}>
                    Blog
                </p>
                <div className="text-center"> {/* Contenedor para texto e imagen */}
                    <img src={blogIcon} alt='blogIcon' className='w-[120px] h-[120px] mt-3 sm: mb-8' /> 
                </div>
            </div>

            <div className={`${styles.flexCenter} bg-black-gradient-2 rounded-[20px] box-shadow flex flex-col flex-grow mb-8 sm:mr-4`}>
                <p className={`${styles.heading4} ${styles.flexCenter} text-center mt-2 max-w-[90%]`}>
                    Horario
                </p>
                <div className="text-center"> {/* Contenedor para texto e imagen */}
                    <img src={scheduleIcon} alt='scheduleIcon' className='w-[120px] h-[120px] mt-3 sm: mb-8' /> 
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

export default AdminPanel
