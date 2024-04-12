import { useEffect, useState } from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'
import axios from 'axios'
import swal from 'sweetalert2'
import { useLocalStorage } from '../../hooks/useLocalStorage' 

export default function Rates() {
    return (
    <div className="bg-primary w-full overflow-hidden">
            <div className={` ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`${styles.flexCenter} ${styles.padding} sm:flex-row flex-col `} >
                <div className="flex flex-col justify-center items-center">
                    <div className="text-center"> {/* Contenedor para texto e imagen */}
                        <h2 className={`${styles.heading2}`}>
                            Nuestras tarifas
                        </h2>
                        <p className={`${styles.paragraph} mt-2`}>
                            En Element Gym nos esforzamos por ofrecer el mejor servicio al mejor precio.<br />
                            Si eres nuevo en el gym no dudes en acercarte por recepción y te informarán de todas nuestras ofertas y servicios
                        </p>
                    </div>
                </div>
            </div>

            <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col flex flex-1 gridContainer`}>
                <div className={`${styles.flexCenter} bg-black-gradient-2 rounded-[20px] box-shadow flex flex-col flex-grow mb-8 sm:mr-4`}>
                    <p className={`${styles.paragraph} ${styles.flexCenter} text-center mt-2 max-w-[90%]`}>
                        ¡MAYOR FLEXIBILIDAD Y ACCESO A TODOS LOS GIMNASIOS ELEMENT!
                    </p>
                    <p className={`${styles.heading4} ${styles.flexCenter} text-center mt-2 max-w-[90%]`}>
                        6 MESES
                    </p>
                    <h2 className={`${styles.heading6} ${styles.flexCenter} textPlatinum`}>
                        Platinum Fitness
                    </h2>

                    <h2 className={`${styles.heading2} ${styles.flexCenter}`}>
                        34,90€
                        <p className={`${styles.paragraph} ml-2 mb-4`}> /mes</p>
                    </h2>

                    <p className={`${styles.paragraph} ${styles.flexCenter} mt-2 max-w-[90%]`}>
                        ✔️ Duración mínima del contrato: 6 meses <br />
                        ✔️ Oferta deportiva completa <br />
                        ✔️ Clases colectivas incluidas <br />
                    </p>

                    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] 
                                    text-primary outline-none ${styles} rounded-[10px] mb-5 mt-5`}>
                        ¡La quiero!
                    </button>
                </div>

                <div className={`${styles.flexCenter} bg-black-gradient-2 rounded-[20px] box-shadow flex flex-col flex-grow mb-8 sm:mr-4`}>
                    <p className={`${styles.paragraph} ${styles.flexCenter} text-center mt-2 max-w-[90%]`}>
                        ¡MEJOR PRECIO Y ACCESO A TODOS LOS GIMNASIOS ELEMENT!
                    </p>
                    <p className={`${styles.heading4} ${styles.flexCenter} text-center mt-2 max-w-[90%]`}>
                        12 MESES
                    </p>
                    <h2 className={`${styles.heading6} ${styles.flexCenter} textGold`}>
                        Gold Membership
                    </h2>

                    <h2 className={`${styles.heading2} ${styles.flexCenter}`}>
                        29,90€
                        <p className={`${styles.paragraph} ml-2 mb-4`}> /mes</p>
                    </h2>

                    <p className={`${styles.paragraph} ${styles.flexCenter} mt-2 max-w-[90%]`}>
                        ✔️ Duración mínima del contrato: 12 meses <br />
                        ✔️ Oferta deportiva completa <br />
                        ✔️ Clases colectivas incluidas <br />
                    </p>

                    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] 
                                    text-primary outline-none ${styles} rounded-[10px] mb-5 mt-5`}>
                        ¡La quiero!
                    </button>
                </div>

                <div className={`${styles.flexCenter} bg-black-gradient-2 rounded-[20px] box-shadow flex flex-col flex-grow mb-8 sm:mr-4`}>
                    <p className={`${styles.paragraph} ${styles.flexCenter} text-center mt-2 max-w-[90%]`}>
                        ¡MAYOR FLEXIBILIDAD! <br />
                        SIN COMPROMISOS DE PERMANENCIA
                    </p>
                    <p className={`${styles.heading4} ${styles.flexCenter} text-center mt-2 max-w-[90%]`}>
                        1 MESES
                    </p>
                    <h2 className={`${styles.heading6} ${styles.flexCenter} textSilver`}>
                        Silver Package
                    </h2>

                    <h2 className={`${styles.heading2} ${styles.flexCenter}`}>
                        39,90€
                        <p className={`${styles.paragraph} ml-2 mb-4`}> /mes</p>
                    </h2>

                    <p className={`${styles.paragraph} ${styles.flexCenter} mt-2 max-w-[90%]`}>
                        ✔️ Sin duración mínima <br />
                        ✔️ Oferta deportiva completa <br />
                        ❌ Clases colectivas incluidas <br />
                    </p>

                    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] 
                                    text-primary outline-none ${styles} rounded-[10px] mb-5 mt-5`}>
                        ¡La quiero!
                    </button>
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
