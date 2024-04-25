import { useEffect, useState } from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function FAQ() {
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
                Preguntas frecuentes
            </h2>
          </div>
        </div>
      </div>

      <div className='flex flex-row w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[40px] text-[25px] text-white 
                       ss:leading-[100px] leading-[75px]'>
          <div className={`${styles.flexCenter} mt-2 mb-8`}>
            <p className={` ${styles.paragraph} mt-4 ml-8 mb-8 max-w-[800px]`}>
              En nuestros centros nuestros profesionales estarán encantados de responder cualquier duda que tengas,
              pero nosotros nos anticipamos y te ponemos alguna de las preguntas más frecuentes que nos realizan.
            </p> 
          </div>         
        </h1>
      </div>

    <div className={`${styles.flexCenter} mt-2 mb-8`}>
      <div className={`flex flex-col w-full bg-black-gradient-2 
                                rounded-[20px] box-shadow max-w-[650px]`}>
        <h2 className={`${styles.flexLeft} ${styles.heading4} ml-8 mt-2 max-w-[90%]`}>
          ❔ ¿Dónde se encuentra Element Gym?
        </h2>
        <p className={` ${styles.paragraph} mt-4 ml-8 mb-8 max-w-[600px]`}>
          Ahora mismo nuestras instalaciones se encuentran en: <br />
          Calle Inventada 22, Catral, Alicante 03158
        </p> 
      </div>
    </div>

    <div className={`${styles.flexCenter} mt-2 mb-8`}>
      <div className={` flex flex-col w-full bg-black-gradient-2 
                                rounded-[20px] box-shadow max-w-[650px]`}>
        <h2 className={`${styles.flexLeft} ${styles.heading4} ml-8 mt-2 max-w-[90%]`}>
          ❔ ¿Necesito concertar una cita para realizar un entrenamiento de prueba?
        </h2>
        <p className={`${styles.flexCenter} ${styles.paragraph} mt-4 ml-8 mb-8 max-w-[600px]`}>
          Pásate por uno de nuestros gimnasios y nuestros compañeros te explicarán todas las opciones que tenemos a tu disposición.
        </p> 
      </div>
    </div>
    
    <div className={`${styles.flexCenter} mt-2 mb-8`}>
      <div className={`flex flex-col w-full bg-black-gradient-2 
                                rounded-[20px] box-shadow max-w-[650px]`}>
        <h2 className={`${styles.flexLeft} ${styles.heading4} ml-8 mt-2 max-w-[90%]`}>
          ❔ ¿Desde qué dispositivos puedo acceder a la plataforma?
        </h2>
        <p className={`${styles.flexCenter} ${styles.paragraph} mt-4 ml-8 mb-8 max-w-[600px]`}>
          Nuestra web esta accesible desde cualquier dispositivo, ya sea móvil, portátil o un ordenador de mesa.
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
