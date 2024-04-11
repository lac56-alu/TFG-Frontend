import { useEffect, useState } from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'
import axios from 'axios'
import swal from 'sweetalert2'
import { profileIcon } from '../../assets';
import { useLocalStorage } from '../../hooks/useLocalStorage' 
import Validation from './ModifyValidation'

export default function ModifyProfile() {
    const [usuario, setUsuario] = useState({
        name: '',
        lastname: '',
        adress: '',
        telephone: '',
        email: '',
        identity_document: '',
        password1: '',
        password2: '',
    });

    const [errors, setErrors] = useState({})

    useEffect(() => {
        const getProfileData = async () => {
            try {
                const url = 'http://localhost:8082/tfg/users/searchToken/';
                const tokenUser = window.localStorage.getItem('token');
                const urlCompleta = url + tokenUser;
                const urlSinComillas = urlCompleta.replace(/"/g, '');
                const response = await axios.get(urlSinComillas);
                setUsuario(response.data);
            } catch (error) {
                console.log(error);
            }
        };
    
        getProfileData();
    }, []);

    const redirectProfile = () => {
        window.location.href = '/profile';
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(usuario);
        setErrors(validationErrors);

        if (validationErrors.name === "" && validationErrors.lastname === ""
            && validationErrors.adress === "" && validationErrors.email === ""
            && validationErrors.identity_document === "" && validationErrors.telephone === ""
            && validationErrors.password1 === "" && validationErrors.password2 === "") {
            (async () => {
            try {
                const url = 'http://localhost:8082/tfg/users/updateUserToken/';
                const tokenUser = window.localStorage.getItem('token');
                const urlCompleta = url + tokenUser;
                const urlSinComillas = urlCompleta.replace(/"/g, '');
                const response = await axios.patch(urlSinComillas, {
                    'name': usuario.name,
                    'lastname': usuario.lastname,
                    'adress': usuario.adress,
                    'identity_document': usuario.identity_document,
                    'telephone': usuario.telephone,
                    'email': usuario.email,
                    'password': usuario.password1
                });

                // Manejar la respuesta de la API aquí
                swal.fire({
                    icon: 'success',
                    title: 'Datos modificados correctamente',
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
    
    const handleInput = (event) => {
        const { name, value } = event.target;
        setUsuario({ ...usuario, [name]: value });
    };
    

    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={` ${styles.flexRight}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} 
                            sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`} >
                <div className="flex-1 justify-center items-center">
                    <h2 className={`${styles.heading2} mt-3`}>
                        Editar Perfil
                    </h2>
                </div>

                {usuario && (
                    <form action="" onSubmit={handleSubmit}>
                        <div className="sm:flex">
                            {/* Bloque 1 */}
                            <div className="flex-1 flex flex-col items-center sm:mr-10">
                                <h2 className="font-medium text-[22px] font-poppins text-secondary">
                                    Nombre
                                </h2>
                                <input id="name" type="text" className="py-2 px-10 font-poppins rounded-[10px]"
                                 onChange={handleInput} name="name" value={usuario.name}></input>

                                <div className='flex flex-1 flex-row items-center mt-2 mb-4'>
                                    <p className='font-medium text-[16px] font-poppins text-red'>{errors.name}</p>
                                </div>
                                
                                <h2 className="font-medium text-[22px] font-poppins text-secondary">
                                    Apellidos
                                </h2>
                                <input id="lastname" type="text" className="py-2 px-10 font-poppins rounded-[10px]"
                                 onChange={handleInput} name="lastname" value={usuario.lastname}></input>
                                
                                <div className='flex flex-1 flex-row items-center mt-2 mb-4'>
                                    <p className='font-medium text-[16px] font-poppins text-red'>{errors.lastname}</p>
                                </div>

                                <h2 className="font-medium text-[22px] font-poppins text-secondary">
                                    Direccion
                                </h2>
                                <input id="adress" type="text" className="py-2 px-10 font-poppins rounded-[10px]"
                                 onChange={handleInput} name="adress" value={usuario.adress}></input>

                                <div className='flex flex-1 flex-row items-center mt-2 mb-4'>
                                    <p className='font-medium text-[16px] font-poppins text-red'>{errors.adress}</p>
                                </div>

                                <h2 className="font-medium text-[22px] font-poppins text-secondary">
                                    Teléfono
                                </h2>
                                <input id="telephone" type="text" className="py-2 px-10 font-poppins rounded-[10px]"
                                 onChange={handleInput} name="telephone" value={usuario.telephone}></input>

                                <div className='flex flex-1 flex-row items-center mt-2 mb-4'>
                                    <p className='font-medium text-[16px] font-poppins text-red'>{errors.telephone}</p>
                                </div>
                            </div>

                            {/* Bloque 2 */}
                            <div className="flex-1 flex flex-col items-center">
                                <h2 className="font-medium text-[22px] font-poppins text-secondary">
                                    Email
                                </h2>
                                <input id="email" type="email" className="py-2 px-10 font-poppins rounded-[10px]"
                                 onChange={handleInput} name="email" value={usuario.email}></input>

                                <div className='flex flex-1 flex-row items-center mt-2 mb-4'>
                                    <p className='font-medium text-[16px] font-poppins text-red'>{errors.email}</p>
                                </div> 

                                <h2 className="font-medium text-[22px] font-poppins text-secondary">
                                    DNI o NIE
                                </h2>
                                <input id="identity_document" type="text" className="py-2 px-10 font-poppins rounded-[10px]"
                                 onChange={handleInput} name="identity_document" value={usuario.identity_document}></input>

                                <div className='flex flex-1 flex-row items-center mt-2 mb-4'>
                                    <p className='font-medium text-[16px] font-poppins text-red'>{errors.identity_document}</p>
                                </div> 

                                <h2 className="font-medium text-[22px] font-poppins text-secondary">
                                    Contraseña
                                </h2>
                                <input id="password1" type="password" className="py-2 px-10 font-poppins rounded-[10px]"
                                 onChange={handleInput} name="password1" ></input>

                                <div className='flex flex-1 flex-row items-center mt-2 mb-4'>
                                    <p className='font-medium text-[16px] font-poppins text-red'>{errors.password1}</p>
                                </div> 

                                <h2 className="font-medium text-[22px] font-poppins text-secondary">
                                    Confirma Contraseña
                                </h2>
                                <input id="password2" type="password" className="py-2 px-10 font-poppins rounded-[10px]"
                                 onChange={handleInput} name="password2" ></input>

                                <div className='flex flex-1 flex-row items-center mt-2 mb-4'>
                                    <p className='font-medium text-[16px] font-poppins text-red'>{errors.password2}</p>
                                </div> 
                            </div>
                        </div>

                        <button type='submit' className={`justify-center items-center py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary 
                                                outline-none rounded-[10px] mt-8`}>
                            Modificar
                        </button>

                        <button type='button' className={`py-4 px-6 bg-red-gradient font-poppins font-medium text-[18px] 
                                    text-primary outline-none ${styles} rounded-[10px] ml-3`}  onClick={redirectProfile}>
                            Cancelar
                        </button>
                    </form>
                )}
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </div>
    )   
}
