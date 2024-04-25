import { useEffect, useState } from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function UseConditions() {
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
                Condiciones de uso
            </h2>
          </div>
        </div>
      </div>

      <div className='flex flex-row w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[40px] text-[25px] text-white 
                       ss:leading-[100px] leading-[75px]'>
          <div className={`${styles.flexCenter} mt-2 mb-8`}>
            <p className={` ${styles.paragraph} mt-4 ml-8 mb-8 max-w-[800px]`}>
            Los datos se comunicarán a los siguientes destinatarios: <br />
            LOS DATOS SE CEDEN A GESTORÍAS, ENTIDADES DE CRÉDITO Y ORGANISMOS PÚBLICOS PARA LOS DATOS RECOGIDOS DE LAS EMPRESAS CLIENTE. DE LOS USUARIOS DE LA PLATAFORMA NO SE REALIZA CESIÓN ALGUNA DE DATOS.
            </p> 
          </div>         
        </h1>
      </div>

    <div className={`${styles.flexCenter} mt-2 mb-8`}>
      <div className={`flex flex-col w-full bg-black-gradient-2 
                                rounded-[20px] box-shadow max-w-[650px]`}>
        <h2 className={`${styles.flexLeft} ${styles.heading4} ml-8 mt-2 max-w-[90%]`}>
          Objetivo
        </h2>
        <p className={` ${styles.paragraph} mt-4 ml-8 mb-8 max-w-[600px]`}>
         - promover la actividad física entre la parte de la población que desearía hacerla y no la hace por diferentes motivos (económicos, estéticos, de medios…) <br />
         - crear hábitos saludables desde pequeños;<br />
        </p> 
      </div>
    </div>

    <div className={`${styles.flexCenter} mt-2 mb-8`}>
      <div className={` flex flex-col w-full bg-black-gradient-2 
                                rounded-[20px] box-shadow max-w-[650px]`}>
        <h2 className={`${styles.flexLeft} ${styles.heading4} ml-8 mt-2 max-w-[90%]`}>
          Uso de cookies
        </h2>
        <p className={`${styles.flexCenter} ${styles.paragraph} mt-4 ml-8 mb-8 max-w-[600px]`}>
        Este sitio web puede utilizar cookies técnicas (pequeños archivos de información que el servidor envía al ordenador de quien accede a la página) para llevar a cabo determinadas funciones que son consideradas imprescindibles para el correcto funcionamiento y visualización del sitio. Las cookies utilizadas tienen, en todo caso, carácter temporal, con la única finalidad de hacer más eficaz la navegación, y desaparecen al terminar la sesión del usuario. En ningún caso, estas cookies proporcionan por sí mismas datos de carácter personal y no se utilizarán para la recogida de los mismos.
        <br />
        Mediante el uso de cookies también es posible que el servidor donde se encuentra la web reconozca el navegador utilizado por el usuario con la finalidad de que la navegación sea más sencilla, permitiendo, por ejemplo, el acceso de los usuarios que se hayan registrado previamente a las áreas, servicios, promociones o concursos reservados exclusivamente a ellos sin tener que registrarse en cada visita. También se pueden utilizar para medir la audiencia, parámetros de tráfico, controlar el progreso y número de entradas, etc., siendo en estos casos cookies prescindibles técnicamente, pero beneficiosas para el usuario. Este sitio web no instalará cookies prescindibles sin el consentimiento previo del usuario.
        <br />
        Este sitio web utiliza cookies propias y de terceros para fines analíticos y para mostrarle publicidad personalizada en base a un perfil elaborado a partir de sus hábitos de navegación (por ejemplo, páginas visitadas). A todo usuario que visita la web se le informa del uso de estas cookies mediante un banner flotante. En el caso de aceptar su uso, el banner desaparecerá, aunque en todo momento podrá revocar el consentimiento y obtener más información consultando nuestra Política de cookies.
        <br />
        El usuario tiene la posibilidad de configurar su navegador para ser alertado de la recepción de cookies y para impedir su instalación en su equipo. Por favor, consulte las instrucciones de su navegador para ampliar esta información.
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
