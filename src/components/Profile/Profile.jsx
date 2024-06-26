import { useEffect, useState } from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'
import axios from 'axios'
import swal from 'sweetalert2'
import { profileIcon } from '../../assets';
import { useLocalStorage } from '../../hooks/useLocalStorage' 
import { gymIcon, instalacionesIcon } from '../../assets';

const Profile = () => {

    const[usuario, setUsuario] = useState();

    const[tarifa, setTarifa] = useState();

    const[gymReserva, setGymReserva] = useState();

    const[padelReserva, setPadelReserva] = useState();

    const[hourGym, setHourGym] = useState();

    const[hourPadel, setHourPadel] = useState();

    const redirectRates = () => {
        window.location.href = '/rates';
    };

    useEffect(() => {
        getProfileData();
    }, []);

    const getProfileData = async () => {
        try {
            const url = 'http://localhost:8082/tfg/users/searchToken/';
            const tokenUser = window.localStorage.getItem('token');
            const urlCompleta = url + tokenUser;
            const urlSinComillas = urlCompleta.replace(/"/g, '');
            const response = await axios.get(urlSinComillas);
            setUsuario(response.data);

            const url2 = 'http://localhost:8082/tfg/rates/searchRateToken/';
            const urlCompleta2 = url2 + tokenUser;
            const urlSinComillas2 = urlCompleta2.replace(/"/g, '');
            const response2 = await axios.get(urlSinComillas2);
            setTarifa(response2.data);

            const url3 = 'http://localhost:8082/tfg/gym_bookings/searchGymBookingToday/';
            const urlCompleta3 = url3 + tokenUser;
            const urlSinComillas3 = urlCompleta3.replace(/"/g, '');
            const response3 = await axios.get(urlSinComillas3);
            if(response3.data.length > 0){
                setGymReserva(response3.data);
                const dateString = response3.data[0].date;
                const date = new Date(dateString);
                const hour = parseInt(date.getHours() - 2);
                setHourGym(hour);
            }

            const url4 = 'http://localhost:8082/tfg/padel_bookings/searchPadelBookingToday/';
            const urlCompleta4 = url4 + tokenUser;
            const urlSinComillas4 = urlCompleta4.replace(/"/g, '');
            const response4 = await axios.get(urlSinComillas4);
            if(response4.data.length > 0){
                setPadelReserva(response4.data[0]);
                console.log(padelReserva)
                const dateString = response4.data[0].date;
                const date = new Date(dateString);
                const hour = parseInt(date.getHours() - 2);
                setHourPadel(hour);
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    const redirectModifyProfile = () => {
        window.location.href = '/modify-profile';
    };

    const actionDeleteUser = (async () => {
        try{
            const url = 'http://localhost:8082/tfg/users/deleteUserToken/';
            const tokenUser = window.localStorage.getItem('token');
            const urlCompleta = url + tokenUser;
            const urlSinComillas = urlCompleta.replace(/"/g, '');
            const response = await axios.delete(urlSinComillas);
            
            window.localStorage.removeItem('token');
            window.location.href = '/';
        } catch(error){
            swal.fire({
                icon: 'error',
                title: error.response.data.errorMessage
            });
            console.error('Error de la API:', error.response.data.errorMessage);
        }
    });

    const deleteUser = () => {
        swal.fire({
            icon: 'warning',
            title: "Advertencia",
            text: "¿Está seguro que desea eliminar su cuenta?",
            showDenyButton: true,
            denyButtonText: 'No',
            showConfirmButton: true,
            confirmButtonText: 'Si',
            confirmButtonColor: '#000000'
        }).then(response => {
            try {
                if (response.isConfirmed) {
                    actionDeleteUser();
                } else if (response.isDenied) {
                    console.log("No pasó nada");
                } else {
                    swal.fire({
                    icon: 'error',
                    title: "Error",
                    text: "Ocurrió algún tipo de error",
                    })
                }
            } catch (error) {
                swal.fire({
                    icon: 'error',
                    title: error.response.data.errorMessage
                });
                console.error('Error de la API:', error.response.data.errorMessage);
            }
        });
    };      

    const actionDeleteRate = (async () => {
        try{
            const url = 'http://localhost:8082/tfg/rates/deleteRateToken/';
            const tokenUser = window.localStorage.getItem('token');
            const urlCompleta = url + tokenUser;
            const urlSinComillas = urlCompleta.replace(/"/g, '');
            const response = await axios.delete(urlSinComillas);
            
        } catch(error){
            swal.fire({
                icon: 'error',
                title: error.response.data.errorMessage
            });
            console.error('Error de la API:', error.response.data.errorMessage);
        }
    });

    const deleteRate = () => {
        swal.fire({
            icon: 'warning',
            title: "Advertencia",
            text: "¿Está seguro que desea eliminar su tarifa? Perderá los privilegios que eso conlleva.",
            showDenyButton: true,
            denyButtonText: 'No',
            showConfirmButton: true,
            confirmButtonText: 'Si',
            confirmButtonColor: '#000000'
        }).then(response => {
            try {
                if (response.isConfirmed) {
                    actionDeleteRate();
                    window.location.reload();
                } else if (response.isDenied) {
                    console.log("No pasó nada");
                } else {
                    swal.fire({
                    icon: 'error',
                    title: "Error",
                    text: "Ocurrió algún tipo de error",
                    })
                }
            } catch (error) {
                swal.fire({
                    icon: 'error',
                    title: error.response.data.errorMessage
                });
                console.error('Error de la API:', error.response.data.errorMessage);
            }
        });
    };
    
    const deleteGymBooking = (idDelete) => {
        swal.fire({
            icon: 'warning',
            title: "Advertencia",
            text: "¿Está seguro que desea cancelar su reserva?",
            showDenyButton: true,
            denyButtonText: 'No',
            showConfirmButton: true,
            confirmButtonText: 'Si',
            confirmButtonColor: '#000000'
        }).then(response => {
            try {
                if (response.isConfirmed) {
                    actionDeleteGymBooking(idDelete);
                } else if (response.isDenied) {
                    console.log("No pasó nada");
                } else {
                    swal.fire({
                    icon: 'error',
                    title: "Error",
                    text: "Ocurrió algún tipo de error",
                    })
                }
            } catch (error) {
                swal.fire({
                    icon: 'error',
                    title: error.response.data.errorMessage
                });
                console.error('Error de la API:', error.response.data.errorMessage);
            }
        });
    };

    const actionDeleteGymBooking = (async (idDelete) => {
        try{
            const url = 'http://localhost:8082/tfg/gym_bookings/deleteGymBooking/';
            const tokenUser = window.localStorage.getItem('token');
            const urlCompleta = url + tokenUser + "/" + idDelete;
            const urlSinComillas = urlCompleta.replace(/"/g, '');
            const response = await axios.delete(urlSinComillas);
            swal.fire({
                icon: 'success',
                title: "¡Reserva cancelada!",
                text: "Has cancelado tu reserva para hoy del gimnasio con éxito.",
                showConfirmButton: false,
                timer: 5000
            });
            window.location.reload();
            
        } catch(error){
            swal.fire({
                icon: 'error',
                title: error.response.data.errorMessage
            });
            console.error('Error de la API:', error.response.data.errorMessage);
        }
    });

    const redirectHistoricalGymBookings = () => {
        window.location.href = '/my-historical-gym-bookings';
    };

    const deletePadelBooking = (idDelete) => {
        swal.fire({
            icon: 'warning',
            title: "Advertencia",
            text: "¿Está seguro que desea cancelar su reserva?",
            showDenyButton: true,
            denyButtonText: 'No',
            showConfirmButton: true,
            confirmButtonText: 'Si',
            confirmButtonColor: '#000000'
        }).then(response => {
            try {
                if (response.isConfirmed) {
                    actionDeletePadelBooking(idDelete);
                } else if (response.isDenied) {
                    console.log("No pasó nada");
                } else {
                    swal.fire({
                    icon: 'error',
                    title: "Error",
                    text: "Ocurrió algún tipo de error",
                    })
                }
            } catch (error) {
                swal.fire({
                    icon: 'error',
                    title: error.response.data.errorMessage
                });
                console.error('Error de la API:', error.response.data.errorMessage);
            }
        });
    };

    const actionDeletePadelBooking = (async (idDelete) => {
        try{
            const url = 'http://localhost:8082/tfg/padel_bookings/deletePadelBooking/';
            const tokenUser = window.localStorage.getItem('token');
            const urlCompleta = url + tokenUser + "/" + idDelete;
            const urlSinComillas = urlCompleta.replace(/"/g, '');
            const response = await axios.delete(urlSinComillas);
            swal.fire({
                icon: 'success',
                title: "¡Reserva cancelada!",
                text: "Has cancelado tu reserva para hoy de la pista de pádel con éxito.",
                showConfirmButton: false,
                timer: 5000
            });
            window.location.reload();
            
        } catch(error){
            swal.fire({
                icon: 'error',
                title: error.response.data.errorMessage
            });
            console.error('Error de la API:', error.response.data.errorMessage);
        }
    });

    const redirectHistoricalPadelBookings = () => {
        window.location.href = '/my-historical-padel-bookings';
    };

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
                            Mi perfil
                        </h2>
                    </div>
                </div>
            </div>
    
            <div className="justify-center items-center w-full">
                <div className={`${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 
                                rounded-[20px] box-shadow`} >
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-center"> {/* Contenedor para texto e imagen */}
                            <img src={profileIcon} alt='iconoPerfil' className='w-[120px] h-[120px] mt-3 sm: mb-8' /> 
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
                                <h2 className="font-medium text-[22px] font-poppins text-white mb-6">
                                    {usuario.adress ? usuario.adress : "No tiene"}
                                </h2>
                            </div>
                        </div>
        
                            {/* Bloque 2 */}
                            <div className="flex-1 flex flex-col items-center">
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

                    <div className={`${styles.flexCenter} sm:flex-row flex-col sm:flex mt-8`} >
                        <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] 
                                            text-primary outline-none ${styles} rounded-[10px] mr-2 mb-2`} onClick={redirectModifyProfile}>
                            Modificar tu perfil
                        </button>

                        <button type='button' className={`py-4 px-6 bg-red-gradient font-poppins font-medium text-[18px] 
                                            text-primary outline-none ${styles} rounded-[10px] mb-2`} onClick={deleteUser}>
                            Eliminar mi cuenta
                        </button>
                    </div>
                    <div className={`${styles.flexCenter}`}>
                        <div className={`${styles.flexCenter} sm:flex-row flex-col sm:flex mt-8`} >
                            <button type='button' className={`py-3 px-4 bg-histical-gradient font-poppins font-medium text-[18px] 
                                                text-white outline-none ${styles} rounded-[10px] mr-2 mb-2`} onClick={redirectHistoricalGymBookings}>
                                Historial reservas del gimnasio
                            </button>
                        </div>

                        <div className={`${styles.flexCenter} sm:flex-row flex-col sm:flex mt-8`} >
                            <button type='button' className={`py-3 px-4 bg-histical-gradient font-poppins font-medium text-[18px] 
                                                text-white outline-none ${styles} rounded-[10px] mr-2 mb-2`} onClick={redirectHistoricalPadelBookings}>
                                Historial reservas de las instalaciones
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {gymReserva && (
                <div className={`sm:flex-row flex-col mt-4`} >
                    <div className={`${styles.flexCenter} flex-col`}>
                        <div className={`${styles.flexStart} flex flex-col justify-left items-left`}>
                            <div className="text-left"> {/* Contenedor para texto e imagen */}
                                <h2 className={`${styles.heading2} ml-8`}>
                                    Tu reserva para el gimnasio hoy:
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.flexCenter} flex-col`}>
                        <div className={`${styles.flexCenter} ${styles.padding} sm:flex-row flex-col flex flex-1 gridContainerBooking`}>
                            <div className={`${styles.flexCenter} bg-black-gradient-2 rounded-[20px] box-shadow flex flex-grow`}>
                                <img src={gymIcon} alt='gymIcon' className='w-[80px] h-[80px] ml-2 mt-3 sm: mb-8' /> 
                                
                                <h2 className={`${styles.heading4} ${styles.flexCenter} text-white`}>
                                    {hourGym}:00
                                </h2>

                                <div className={`${styles.flexCenter} sm:flex-row flex-col sm:flex`} >
                                    <button type='button' className={`py-3 px-4 bg-red-gradient font-poppins font-medium text-[18px] 
                                                        text-primary outline-none ${styles} rounded-[10px] mr-2`} onClick={() => deleteGymBooking(gymReserva[0].id)}>
                                        Cancelar reserva
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}  

            {padelReserva && (
                <div className={`sm:flex-row flex-col mt-4`} >
                    <div className={`${styles.flexCenter} flex-col`}>
                        <div className={`${styles.flexStart} flex flex-col justify-left items-left`}>
                            <div className="text-left">
                                <h2 className={`${styles.heading2} ml-8`}>
                                    Tu reserva para la pista de padel de hoy:
                                </h2>
                            </div>
                        </div>
                    </div>
                
                    <div className={`${styles.flexCenter} flex-col`}>
                        <div className={`${styles.padding} sm:flex-row flex-col flex flex-1 gridContainerBooking`}>
                            <div className={`${styles.flexCenter} bg-black-gradient-2 rounded-[20px] box-shadow flex flex-grow`}>
                                <img src={instalacionesIcon} alt='instalacionesIcon' className='w-[80px] h-[80px] mt-4 mr-4 sm: mb-8' /> 
                                
                                <div className={`${styles.flexCenter} flex-col`}>
                                    <h2 className={`${styles.heading4} ${styles.flexCenter} text-white`}>
                                        Pista Nº{padelReserva.num_court}
                                    </h2>
                                    <h2 className={`${styles.heading4} ${styles.flexCenter} text-white`}>
                                        {hourPadel}:00 - {hourPadel + 2}:00
                                    </h2>
                                </div>
                
                                <div className={`${styles.flexCenter} sm:flex-row flex-col sm:flex`} >
                                    <button type='button' className={`py-3 px-4 bg-red-gradient font-poppins font-medium text-[18px] 
                                                        text-primary outline-none ${styles} rounded-[10px] ml-8 mr-2`} onClick={() => deletePadelBooking(padelReserva[0].id)}>
                                        Cancelar<br />reserva
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}  


            {tarifa && (
                <div className={`sm:flex-row flex-col mt-4`} >
                   <div className={`${styles.flexCenter} flex-col`}>
                        <div className={`${styles.flexStart} flex flex-col justify-left items-left`}>
                            <div className="text-left">
                                <h2 className={`${styles.heading2} ml-8`}>
                                    Tu tarifa actual es:
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.flexCenter} flex-col`}>
                        <div className={`${styles.flexCenter} ${styles.padding} sm:flex-row flex-col flex flex-1 gridContainerBooking`}>
                            <div className={`${styles.flexCenter} bg-black-gradient-2 rounded-[20px] box-shadow flex flex-col flex-grow`}>
                                <h2 className={`${styles.heading6} ${styles.flexCenter} text-white mr-4 ml-4`}>
                                    {tarifa.name}
                                </h2>

                                <h2 className={`${styles.heading2} ${styles.flexCenter}`}>
                                    {tarifa.value}€
                                    <p className={`${styles.paragraph} ml-2 mb-4`}> /mes</p>
                                </h2>

                                <div className={`${styles.flexCenter} sm:flex-row flex-col sm:flex mt-4`} >
                                    <button type='button' className={`py-3 px-4 bg-blue-gradient font-poppins font-medium text-[18px] 
                                                        text-primary outline-none ${styles} rounded-[10px] mr-2 mb-2`} onClick={redirectRates}>
                                        Modificar mi tarifa
                                    </button>

                                    <button type='button' className={`py-3 px-4 bg-red-gradient font-poppins font-medium text-[18px] 
                                                        text-primary outline-none ${styles} rounded-[10px] mb-4`} onClick={deleteRate}>
                                        Eliminar mi tarifa
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
    
            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </div>
    )
    
}

export default Profile

