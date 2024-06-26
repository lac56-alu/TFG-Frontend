import React, { useState } from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Validation from './LoginValidation'
import axios from 'axios'
import swal from 'sweetalert2'
import { useLocalStorage } from '../../hooks/useLocalStorage' 

function Login() {
  const [token, setToken] = useLocalStorage ('token', '')

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);
  
    if (validationErrors.email === "" && validationErrors.password === "") {
      (async () => {
        try {
          const response = await axios.post('http://localhost:8082/tfg/login', {
            email: values.email,
            password: values.password
          });
  
          /* Manejar la respuesta de la API aquí
          swal.fire({
            icon: 'success',
            title: "Bienvenido a Element Gym",
            timer: 2000,
          });
          setTimeout(2000);
          */
          window.location.href = '/profile';
          console.log('Respuesta de la API:', response.data.token);

          //Guardar token
          setToken(response.data.token);
        } catch (error) {
          // Manejar errores de la solicitud
          swal.fire({
            icon: 'error',
            title: error.response.data.errorMessage
          });
          console.error('Error de la API:', error.response.data.errorMessage);
        }
      })();
    }
  }


  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={` ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}
                         sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`} >
        <div className="flex-1 flex flex-col justify-end items-center">
          <h2 className={`${styles.heading2} mt-3`}>
            Inicio Sesión
          </h2>
        </div>

        <form action="" onSubmit={handleSubmit}
          className='mt-10 flex-1 sm:mx-5 items-center justify-end'>
          <div className='flex flex-1 flex-row items-center'>
            <h2 className="font-medium text-[22px] font-poppins text-white">
              Email
            </h2>
          </div>
          <div className='flex flex-1 flex-row items-center'>
            <input type='email' className='py-2 px-10 font-poppins rounded-[10px]' /*placeholder='Inserta Email'*/
            onChange={handleInput} name="email"></input>
          </div>
          <div className='flex flex-1 flex-row items-center mt-3 mb-5'>
            <p className='font-medium text-[16px] font-poppins text-red'>{errors.email}</p>
          </div>


          <div className='flex flex-1 flex-row items-center sm:mt-3'>
            <h2 className="font-medium text-[22px] font-poppins text-white">
              Contraseña
            </h2>
          </div>
          <div className='flex flex-1 flex-row items-center'>
            <input type='password' className='py-2 px-10 font-poppins rounded-[10px]' /*placeholder='Inserta Contraseña'*/
            onChange={handleInput} name="password"></input>
          </div>
          
          <div className='items-center mt-3 mb-5'>
            <p className='font-medium text-[16px] font-poppins text-red'>{errors.password}</p>
          </div>

          <p className={`${styles.paragraph} max-w-[470px] mt-6 mb-5 text-secondary font-bold`}>
            <a href="/olvidoContraseña"> ¿Has olvidado tu contraseña? </a>
          </p>
          
          <button type='submit' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] mt-2`}>
            Entrar
          </button>
        </form>

        <p className={`flex-1 flex flex-col ${styles.paragraph} max-w-[470px] mt-14`}>
          ¿Eres un usuario nuevo?
          <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] mt-2`}>
            <a href="/register"> Crea una cuenta </a>
          </button>
        </p>
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
