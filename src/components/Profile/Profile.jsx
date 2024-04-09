import { useEffect, useState } from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'
import axios from 'axios'
import { profileIcon } from '../../assets';
import Button from "../Button"

const Profile = () => {

    const[usuario, setUsuario] = useState();



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
    


    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={` ${styles.flexRight}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
    
            <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`} >
                <div className="flex flex-col justify-center items-center">
                    <div className="text-center"> {/* Contenedor para texto e imagen */}
                        <h2 className={`${styles.heading2} mt-3`}>
                            Perfil
                        </h2>
                        <img src={profileIcon} alt='iconoPerfil' className='w-[120px] h-[120px] mt-3 sm: mb-8' /> {/* Ajusta la clase mt-3 según sea necesario */}
                    </div>
                </div>

    
                {usuario && (
                    <div className="sm:flex flex-1 justify-content">
                        {/* Bloque 1 */}
                        <div className="flex-1 flex flex-col items-center">
                            <div className="">
                                <h2 className="font-medium text-[22px] font-poppins text-secondary">
                                    Nombre
                                </h2>
                            </div>
                            <div className="items-center">
                                <h2 className="font-medium text-[22px] font-poppins text-white">
                                    {usuario.name ? usuario.name : "No tiene"}
                                </h2>
                            </div>
    
                            <div className="items-center mt-5">
                            <h2 className="font-medium text-[22px] font-poppins text-secondary">
                                Apellidos
                            </h2>
                        </div>
                        <div className="items-center">
                            <h2 className="font-medium text-[22px] font-poppins text-white">
                                {usuario.lastname ? usuario.lastname : "No tiene"}
                            </h2>
                        </div>

                        <div className="items-center mt-5">
                            <h2 className="font-medium text-[22px] font-poppins text-secondary">
                                Direccion
                            </h2>
                        </div>
                        <div className="items-center">
                            <h2 className="font-medium text-[22px] font-poppins text-white">
                                {usuario.adress ? usuario.adress : "No tiene"}
                            </h2>
                        </div>
                        </div>
    
                        {/* Bloque 2 */}
                        <div className="flex-1 flex flex-col items-center sm:ml-10">
                            <div className="items-center">
                                <h2 className="font-medium text-[22px] font-poppins text-secondary">
                                    Teléfono
                                </h2>
                            </div>
                            <div className="items-center">
                                <h2 className="font-medium text-[22px] font-poppins text-white">
                                    {usuario.telephone ? usuario.telephone : "No tiene"}
                                </h2>
                            </div>

                            <div className="items-center mt-5">
                                <h2 className="font-medium text-[22px] font-poppins text-secondary">
                                    Email
                                </h2>
                            </div>
                            <div className="items-center">
                                <h2 className="font-medium text-[22px] font-poppins text-white">
                                    {usuario.email ? usuario.email : "No tiene"}
                                </h2>
                            </div>

                            <div className="items-center mt-5">
                                <h2 className="font-medium text-[22px] font-poppins text-secondary">
                                    DNI o NIE
                                </h2>
                            </div>
                            <div className="items-center">
                                <h2 className="font-medium text-[22px] font-poppins text-white">
                                    {usuario.identity_document ? usuario.identity_document : "No tiene"}
                                </h2>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={`${styles.flexCenter} sm:flex-row flex-col`} >
                <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] 
                                    text-primary outline-none ${styles} rounded-[10px]`}>
                    Modificar tu perfil
                </button>
            </div>
    
            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </div>
    )
    
}

export default Profile

