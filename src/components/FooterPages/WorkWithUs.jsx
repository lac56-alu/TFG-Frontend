import { useEffect, useState } from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'
import React from 'react'

export default function WorkWithUs() {
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
              Trabaja con nosotros
            </h2>
          </div>
        </div>
      </div>

      <div className='flex flex-row w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[40px] text-[25px] text-white 
                       ss:leading-[100px] leading-[75px]'>
          <div className={`${styles.flexCenter} mt-2 mb-8`}>
            <p className={` ${styles.paragraph} mt-4 ml-8 mb-8 max-w-[800px]`}>
              ¿Quieres formar parte de la familia de Element Gym? No dudes en enviarnos tus currículum y valoraremos
              tu oferta.
            </p> 
          </div>         
        </h1>
      </div>

    <div className={`${styles.flexCenter} mt-2 mb-8`}>
      <div className={`flex flex-col w-full bg-black-gradient-2
                                rounded-[20px] box-shadow max-w-[650px]`}>
        <h2 className={`${styles.flexLeft} ${styles.heading4} ml-8 mt-2 max-w-[90%]`}>
          📭 Contacto
        </h2>
        <p className={` ${styles.paragraph} mt-4 ml-8 mb-8 max-w-[600px]`}>
          ✉️ element_gym@gmail.com <br />
          📞 +34 600 000 000
        </p> 
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
