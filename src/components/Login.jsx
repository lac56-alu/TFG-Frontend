import React from 'react'
import styles from '../style'
import Navbar from './Navbar'
import Footer from './Footer'

function Login() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={` ${styles.flexRight}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}
                        sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`} >
        <div className="flex-1 flex flex-col">
          <h2 className={`${styles.heading2} mt-3`}>
            Inicio Sesión
          </h2>

          <p className={`${styles.paragraph} max-w-[470px] mt-2`}>
            ¿Eres un usuario nuevo?
            <div className='text-secondary font-bold'>
              <a href="/registro"> Crea una cuenta </a>
            </div>
           
          </p>
        </div>

        <form className='mt-10'>
          <div className='flex flex-1 flex-row items-center'>
            <h2 className="font-medium text-[22px] font-poppins text-white">
              Email
            </h2>
          </div>
          <div className='flex flex-1 flex-row items-center'>
            <input type='email' className='py-2 px-10 font-poppins rounded-[10px]' /*placeholder='Inserta Email'*/></input>
          </div>

          <div className='flex flex-1 flex-row items-center mt-3'>
            <h2 className="font-medium text-[22px] font-poppins text-white">
              Contraseña
            </h2>
          </div>
          <div className='flex flex-1 flex-row items-center'>
            {/*
            <label className="font-medium text-[18px] font-poppins text-white">
              Contraseña 
            </label>
            */}
            <input type='password' className='py-2 px-10 font-poppins rounded-[10px]' /*placeholder='Inserta Contraseña'*/></input>
          </div>

          <p className={`${styles.paragraph} max-w-[470px] mt-6 mb-5 text-secondary font-bold`}>
            <a href="/olvidoContraseña"> ¿Has olvidado tu contraseña? </a>
          </p>
          
          <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] mt-2`}>
            Entrar
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

export default Login
