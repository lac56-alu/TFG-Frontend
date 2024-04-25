import { useEffect, useState } from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function AccessPlatform() {
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
                Nuestra plataforma
            </h2>
          </div>
        </div>
      </div>

      <div className='flex flex-row w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[40px] text-[25px] text-white 
                       ss:leading-[100px] leading-[75px]'>
          <p className={`${styles.flexCenter} ${styles.paragraph} mt-4 ml-8 mb-8 `}>
            En Element Gym nos preocupamos por la usabilidad. <br />
            A continuación, le indicamos en detalle las diferentes funcionalidades que va a poder realizar.
          </p>          
        </h1>
      </div>

    <div className={`${styles.flexCenter} mt-2 mb-8`}>
      <div className={`flex flex-col w-full bg-black-gradient-2 
                                rounded-[20px] box-shadow max-w-[650px]`}>
        <h2 className={`${styles.flexLeft} ${styles.heading4} ml-8 mt-2 max-w-[90%]`}>
          ✔️ Contratación de las tarifas
        </h2>
        <p className={` ${styles.paragraph} mt-4 ml-8 mb-8 max-w-[600px]`}>
          Disponemos de un amplio catálogo de tarifas que se adaptan a todas las necesidades de nuestros clientes.
          Cada una de ellas te dará beneficios únicos con los que disfrutar de una maravillosa experiencia usando nuestras
          instalaciones.
        </p> 
      </div>
    </div>

    <div className={`${styles.flexCenter} mt-2 mb-8`}>
      <div className={` flex flex-col w-full bg-black-gradient-2 
                                rounded-[20px] box-shadow max-w-[650px]`}>
        <h2 className={`${styles.flexLeft} ${styles.heading4} ml-8 mt-2`}>
          ✔️ Reserva de las instalaciones
        </h2>
        <p className={`${styles.flexCenter} ${styles.paragraph} mt-4 ml-8 mb-8 max-w-[600px]`}>
          Podrás garantizar una experiencia única y asegurar tu acceso a la hora que mejor se ajuste a tus necesidades,
          para realizar tu entrenamiento eficaz.
        </p> 
      </div>
    </div>
    
    <div className={`${styles.flexCenter} mt-2 mb-8`}>
      <div className={`flex flex-col w-full bg-black-gradient-2 
                                rounded-[20px] box-shadow max-w-[650px]`}>
        <h2 className={`${styles.flexLeft} ${styles.heading4} ml-8 mt-2 max-w-[90%]`}>
          ✔️ Consultar el horario de las clases
        </h2>
        <p className={`${styles.flexCenter} ${styles.paragraph} mt-4 ml-8 mb-8 max-w-[600px]`}>
          En todo momento podrás saber las diferentes clases que se van a impartir en nuestro centro, saber el horario a la que
          se van a impartir y el profesional que va a dar dicha clase. 
        </p> 
      </div>
    </div>

    <div className={`${styles.flexCenter} mt-2 mb-8`}>
      <div className={`flex flex-col w-full bg-black-gradient-2 
                                rounded-[20px] box-shadow max-w-[650px]`}>
        <h2 className={`${styles.flexLeft} ${styles.heading4} ml-8`}>
          ✔️ Tener tu perfil
        </h2>
        <p className={`${styles.flexCenter} ${styles.paragraph} mt-4 ml-8 mb-8`}>
            Podrás personalizar un perfil con toda la información que desés para que nuestros profesionales puedan brindarte 
            nuestro mejor servicio, atendiendo todas tus necesidades.
        </p>  
      </div>
    </div>

      <div className={`${styles.flexCenter} flex flex-col w-full`}>
        
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
              <Footer />
          </div>
      </div>
    </div>
  )
}
