import React, { useState } from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Validation from './SignUpValidation'
import axios from 'axios'
import swal from 'sweetalert2'

function Register() {
    const [values, setValues] = useState({
        name: '',
        lastname: '',
        adress: '',
        identity_document: '',
        telephone: '',
        email: '',
        password1: '',
        password2: ''
    })

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);

        if (validationErrors.name === "" && validationErrors.lastname === ""
            && validationErrors.adress === "" && validationErrors.email === ""
            && validationErrors.identity_document === "" && validationErrors.telephone === ""
            && validationErrors.password1 === "" && validationErrors.password2 === "") {
            (async () => {
            try {
                const response = await axios.post('http://localhost:8082/tfg/users/createUser', {
                    'name': values.name[0],
                    'lastname': values.lastname[0],
                    'adress': values.adress[0],
                    'identity_document': values.identity_document[0],
                    'telephone': values.telephone[0],
                    'email': values.email[0],
                    'password': values.password1[0],
                    'fk_type_users': 2
                });

                // Manejar la respuesta de la API aquí
                swal.fire({
                    icon: 'success',
                    title: '¡Bienvenido a Element Gym! Se ha registro correctamente.',
                    showConfirmButton: false,
                    timer: 5000
                });
                console.log('Respuesta de la API:', response.data);
            } catch (error) {
                // Manejar errores de la solicitud
                swal.fire({
                    icon: 'error',
                    title: 'Se ha producido un error en el registro del sistema... Disculpa las molestias'
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
                <h2 className={`${styles.flexCenter} ${styles.heading2} mt-3 justify-center items-center`}>
                    Registro de usuario
                </h2>
            </div>


            <form action="" onSubmit={handleSubmit}
             className='mt-10'>
                <div className="sm:flex">
                    {/* Bloque 1 */}
                    <div className="flex-1 flex flex-col items-center">
                        <div className="">
                            <h2 className="font-medium text-[22px] font-poppins text-white">
                                Nombre
                            </h2>
                        </div>
                        <div className="items-center">
                            <input id="name" type="text" className="py-2 px-10 font-poppins rounded-[10px]"
                            onChange={handleInput} name="name"></input>
                        </div>

                        <div className='flex flex-1 flex-row items-center mt-3 mb-5'>
                            <p className='font-medium text-[16px] font-poppins text-red'>{errors.name}</p>
                        </div>

                        <div className="items-center mt-5">
                            <h2 className="font-medium text-[22px] font-poppins text-white">
                                Apellidos
                            </h2>
                        </div>
                        <div className="items-center">
                            <input id="lastname" type="text" className="py-2 px-10 font-poppins rounded-[10px]"
                            onChange={handleInput} name="lastname"></input>
                        </div>

                        <div className='flex flex-1 flex-row items-center mt-3 mb-5'>
                            <p className='font-medium text-[16px] font-poppins text-red'>{errors.lastname}</p>
                        </div>

                        <div className="items-center mt-5">
                            <h2 className="font-medium text-[22px] font-poppins text-white">
                                Direccion
                            </h2>
                        </div>
                        <div className="items-center">
                            <input id="adress" type="text" className="py-2 px-20 font-poppins rounded-[10px]"
                            onChange={handleInput} name="adress"></input>
                        </div>

                        <div className='flex flex-1 flex-row items-center mt-3 mb-5'>
                            <p className='font-medium text-[16px] font-poppins text-red'>{errors.adress}</p>
                        </div>

                        <div className="items-center mt-5">
                            <h2 className="font-medium text-[22px] font-poppins text-white">
                                DNI o NIE
                            </h2>
                        </div>
                        <div className="items-center">
                            <input id="identity_document" type="text" className="py-2 px-10 font-poppins rounded-[10px]"
                            onChange={handleInput} name="identity_document"></input>
                        </div>

                        <div className='flex flex-1 flex-row items-center mt-3 mb-5'>
                            <p className='font-medium text-[16px] font-poppins text-red'>{errors.identity_document}</p>
                        </div>
                    </div>

                    {/* Bloque 2 */}
                    <div className="flex-1 flex flex-col items-center sm:ml-10">
                        <div className="items-center">
                            <h2 className="font-medium text-[22px] font-poppins text-white">
                                Teléfono
                            </h2>
                        </div>
                        <div className="items-center">
                            <input id="telephone" type="text" className="py-2 px-10 font-poppins rounded-[10px]"
                            onChange={handleInput} name="telephone"></input>
                        </div>

                        <div className='flex flex-1 flex-row items-center mt-3 mb-5'>
                            <p className='font-medium text-[16px] font-poppins text-red'>{errors.telephone}</p>
                        </div>

                        <div className="items-center mt-5">
                            <h2 className="font-medium text-[22px] font-poppins text-white">
                                Email
                            </h2>
                        </div>
                        <div className="items-center">
                            <input id="email" type="email" className="py-2 px-10 font-poppins rounded-[10px]" 
                            onChange={handleInput} name="email"></input>
                        </div>
                        
                        <div className='flex flex-1 flex-row items-center mt-3 mb-5'>
                            <p className='font-medium text-[16px] font-poppins text-red'>{errors.email}</p>
                        </div>

                        <div className="items-center sm:mt-3 mt-5">
                            <h2 className="font-medium text-[22px] font-poppins text-white">
                                Crea tu contraseña
                            </h2>
                        </div>
                        <div className="items-center">
                            <input id="password1" type="password" className="py-2 px-10 font-poppins rounded-[10px]"
                            onChange={handleInput} name="password1"></input>
                        </div>

                        <div className='flex flex-1 flex-row items-center mt-3 mb-5'>
                            <p className='font-medium text-[16px] font-poppins text-red'>{errors.password1}</p>
                        </div>

                        <div className="flex flex-1 flex-row items-center sm:mt-3 mt-5">
                            <h2 className="font-medium text-[22px] font-poppins text-white">
                                Confirma tu contraseña
                            </h2>
                        </div>
                        <div className="flex flex-1 flex-row items-center">
                            <input id="password2" type="password" className="py-2 px-10 font-poppins rounded-[10px]" 
                            onChange={handleInput} name="password2"></input>
                        </div>

                        <div className='flex flex-1 flex-row items-center mt-3 mb-5'>
                            <p className='font-medium text-[16px] font-poppins text-red'>{errors.password2}</p>
                        </div>
                    </div>
                </div>

                <button type='submit' className={`justify-center items-center py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary 
                                                outline-none rounded-[10px] mt-8`}>
                    Crear
                </button>
            </form>

            <p className={`flex-1 flex-col ${styles.paragraph} max-w-[470px] ml-20`}>
                ¿Ya tienes una cuenta creada?
                <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] mt-2`}>
                    <a href="/login"> Acceder a mi cuenta </a>
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

export default Register
