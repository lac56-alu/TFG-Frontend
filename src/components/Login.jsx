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
      <div>
        <form>
            <div className='flex flex-row justify-between items-center w-full'>
                <label htmlFor='email' className='text-white'>Email</label>
                <input type='email' placeholder='Inserta Email'></input>
            </div>
            <div className='flex flex-row justify-between items-center w-full'>
                <label htmlFor='password' className='text-white'>Contraseña</label>
                <input type='password' placeholder='Inserta Contraseña'></input>
            </div>
            <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] 
                                      text-primary outline-none ${styles} rounded-[10px]`}>
                Entrar
            </button>

            <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] 
                                      text-primary outline-none ${styles} rounded-[10px]`}>
                Registrate
            </button>
        </form>
      </div>
    </div>
  )
}

export default Login
