import React from 'react'
import styles from '../style'
import Navbar from './Navbar'

function Login() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={` ${styles.flexRight}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.marginY} ${styles.padding} bg-black-gradient-2 rounded-[20px] box-shadow`} >
        <h2 className={styles.heading2}>
          Inicio Sesión
        </h2>

        <form>
          <div className='flex flex-row items-center'>
            <label className="font-medium text-[18px] font-poppins text-white">
              Email 
            </label>
            <input type='email' className='py-2 px-10 font-poppins rounded-[10px] ml-2' placeholder='Inserta Email'></input>
          </div>

          <div className='flex flex-row items-center mt-3'>
            <label className="font-medium text-[18px] font-poppins text-white">
              Contraseña 
            </label>
            <input type='password' className='py-2 px-10 font-poppins rounded-[10px] ml-2' placeholder='Inserta Contraseña'></input>
          </div>
          
          <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] mt-2`}>
            Entrar
          </button>

          <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
            Registrate
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
