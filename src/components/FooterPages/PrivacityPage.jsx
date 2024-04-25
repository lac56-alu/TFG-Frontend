import { useEffect, useState } from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function PrivacityPage() {
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
                Protección de datos
            </h2>
          </div>
        </div>
      </div>

      <div className='flex flex-row w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[40px] text-[25px] text-white 
                       ss:leading-[100px] leading-[75px]'>
          <div className={`${styles.flexCenter} mt-2 mb-8`}>
            <p className={` ${styles.paragraph} mt-4 ml-8 mb-8 max-w-[800px]`}>
              ¡Gracias por visitar nuestra página web! Tus datos personales nos importan mucho, por lo cual los protegemos según la normativa vigente. 
              A continuación, te explicamos qué datos recabamos y con qué finalidad, cuáles son tus derechos y cómo los puedes ejercer.
            </p> 
          </div>         
        </h1>
      </div>

    <div className={`${styles.flexCenter} mt-2 mb-8`}>
      <div className={`flex flex-col w-full bg-black-gradient-2 
                                rounded-[20px] box-shadow max-w-[650px]`}>
        <h2 className={`${styles.flexLeft} ${styles.heading4} ml-8 mt-2 max-w-[90%]`}>
          Contrato de Socio
        </h2>
        <p className={` ${styles.paragraph} mt-4 ml-8 mb-8 max-w-[600px]`}>
        Puedes celebrar un Contrato de Socio con RSG Group España (en adelante, “RSG”) presencialmente en un gimnasio Element Gym a través de nuestra página web www.elementgym.es <br />
        Te informamos de que, a efectos de tu navegación en este enlace, existe un aviso de nuestra política de privacidad separado. Al formalizar un Contrato de Socio, recabamos los siguientes datos personales:<br />
           - nombres y apellidos<br />
           - tus datos de contacto (dirección postal, correo electrónico, teléfono)<br />
           - el número de tu DNI/NIE, que será comprobado en el gimnasio<br />
        </p> 
      </div>
    </div>

    <div className={`${styles.flexCenter} mt-2 mb-8`}>
      <div className={` flex flex-col w-full bg-black-gradient-2 
                                rounded-[20px] box-shadow max-w-[650px]`}>
        <h2 className={`${styles.flexLeft} ${styles.heading4} ml-8 mt-2 max-w-[90%]`}>
          Finalidades y bases legales del tratamiento de datos
        </h2>
        <p className={`${styles.flexCenter} ${styles.paragraph} mt-4 ml-8 mb-8 max-w-[600px]`}>
        La recogida y el tratamiento de estos datos personales se realizan con la finalidad de la celebración y ejecución del Contrato de Socio, su desarrollo, cumplimiento y control o del entrenamiento de prueba que realices en uno de nuestros gimnasios, es decir, para
        <br />
           - identificarte como socio o solicitante de entrenamiento de prueba,<br />
           - posibilitarte el acceso y uso de nuestros gimnasios e instalaciones,<br />
           - posibilitar el pago de tus cuotas de socio o de tu entrenamiento de prueba,<br />
           - prestarte correctamente nuestro servicio de atención al cliente.<br />
          Por tanto, la base jurídica que legitima este tratamiento de datos es la necesidad de ejecutar un contrato en el que eres parte, de conformidad con el art. 6.1 b) del RGPD.
        </p> 
      </div>
    </div>
    
    <div className={`${styles.flexCenter} mt-2 mb-8`}>
      <div className={`flex flex-col w-full bg-black-gradient-2 
                                rounded-[20px] box-shadow max-w-[650px]`}>
        <h2 className={`${styles.flexLeft} ${styles.heading4} ml-8 mt-2 max-w-[90%]`}>
          Plazo de conservación de los datos
        </h2>
        <p className={`${styles.flexCenter} ${styles.paragraph} mt-4 ml-8 mb-8 max-w-[600px]`}>
          Los diferentes datos personales serán conservados durante no más tiempo del necesario para los fines de su tratamiento, sin perjuicio de nuestros deberes legales de conservación y documentación de datos, por ejemplo en materia fiscal o mercantil.
        </p> 
      </div>
    </div>

    <div className={`${styles.flexCenter} mt-2 mb-8`}>
      <div className={`flex flex-col w-full bg-black-gradient-2 
                                rounded-[20px] box-shadow max-w-[650px]`}>
        <h2 className={`${styles.flexLeft} ${styles.heading4} ml-8 mt-2 max-w-[90%]`}>
          Tus derechos en relación con tus datos personales
        </h2>
        <p className={`${styles.flexCenter} ${styles.paragraph} mt-4 ml-8 mb-8 max-w-[600px]`}>
          Para ejercer tus derechos de protección de datos en relación con tus datos personales podrás dirigirte a la siguiente mercantil:
          <br />
          Element Gym, S.L.U.<br />
          Calle Inventada 22<br />
          03158 Catral<br />
          C.I.F. X-00000000<br />
          Tel.: 600 000 000<br />
          Mail: element_gym@gmail.com<br />
          <br />
          En concreto, podrás:
          <br />
           - Solicitarnos el acceso a tus datos personales (art. 15 RGPD)<br />
           - Solicitarnos la rectificación de tus datos personales (art. 16 RGPD)<br />
           - Solicitarnos la supresión de tus datos personales (art. 17 RGPD)<br />
           - Solicitarnos la limitación del tratamiento de tus datos personales (art. 18 RGPD)<br />
           - Solicitarnos la portabilidad de tus datos personales (art. 20 RGPD)<br />
           - Ejercer la oposición al tratamiento de tus datos personales (art. 21 RGPD)<br />
          Sin perjuicio de lo anterior, en el caso de que consideres que el tratamiento de tus datos personales infringe la normativa, puedes dirigirte también a la Agencia Española de Protección de Datos.<br />
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
