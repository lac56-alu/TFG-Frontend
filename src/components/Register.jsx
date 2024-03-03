import React from 'react'
import styles from '../style'
import Navbar from './Navbar'
import Footer from './Footer'
import { logoElement2 } from '../assets';

function Register() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={` ${styles.flexRight}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.marginY} ${styles.padding}
                         sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`} >
        <div className="flex-1 flex flex-col">
            <h2 className={`${styles.flexCenter} ${styles.heading2} mt-3 justify-center items-center`}>
                Registro de usuario
            </h2>
        </div>


        <form className='mt-10'>
            <div className="sm:flex">
                {/* Bloque 1 */}
                <div className="flex-1 flex flex-col items-center">
                    <div className="">
                        <h2 className="font-medium text-[22px] font-poppins text-white">
                            Nombre
                        </h2>
                    </div>
                    <div className="items-center">
                        <input id="name" type="text" className="py-2 px-10 font-poppins rounded-[10px]" />
                    </div>

                    <div className="items-center mt-5">
                        <h2 className="font-medium text-[22px] font-poppins text-white">
                            Apellidos
                        </h2>
                    </div>
                    <div className="items-center">
                        <input id="lastname" type="text" className="py-2 px-10 font-poppins rounded-[10px]" />
                    </div>

                    <div className="items-center mt-5">
                        <h2 className="font-medium text-[22px] font-poppins text-white">
                            Direccion
                        </h2>
                    </div>
                    <div className="items-center">
                        <input id="adress" type="text" className="py-2 px-20 font-poppins rounded-[10px]" />
                    </div>
                </div>

                {/* Bloque 2 */}
                <div className="flex-1 flex flex-col items-center ml:20">
                    <div className="items-center mt-5">
                        <h2 className="font-medium text-[22px] font-poppins text-white">
                            Email
                        </h2>
                    </div>
                    <div className="items-center">
                        <input id="email" type="email" className="py-2 px-10 font-poppins rounded-[10px]" />
                    </div>
                    <div className="items-center sm:mt-3 mt-5">
                        <h2 className="font-medium text-[22px] font-poppins text-white">
                            Crea tu contraseña
                        </h2>
                    </div>
                    <div className="items-center">
                        <input id="password" type="password" className="py-2 px-10 font-poppins rounded-[10px]" />
                    </div>

                    <div className="flex flex-1 flex-row items-center sm:mt-3 mt-5">
                        <h2 className="font-medium text-[22px] font-poppins text-white">
                            Confirma tu contraseña
                        </h2>
                    </div>
                    <div className="flex flex-1 flex-row items-center">
                        <input id="password2" type="password" className="py-2 px-10 font-poppins rounded-[10px]" />
                    </div>
                </div>
            </div>

            <button type='button' className={`justify-center items-center py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary 
                                              outline-none rounded-[10px] mt-8`}>
                Crear
            </button>
        </form>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default Register
