import { useEffect, useState } from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'
import axios from 'axios'
import swal from 'sweetalert2'
import { searchIcon } from '../../assets';


export default function UserAdmin() {
    const [usuarios, setUsuarios] = useState([]);
    const [busqueda, setBusqueda] = useState('');

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const url = 'http://localhost:8082/tfg/users/getUsersAdmin/';
            const tokenUser = window.localStorage.getItem('token');
            const urlCompleta = url + tokenUser;
            const urlSinComillas = urlCompleta.replace(/"/g, '');
            const response = await axios.get(urlSinComillas);

            setUsuarios(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleBusquedaChange = (e) => {
        setBusqueda(e.target.value);
    };

    const usuariosFiltrados = usuarios.filter((user) =>
        (user.name.toLowerCase() + ' ' + user.lastname.toLowerCase()+ ' ' + user.identity_document.toLowerCase()).includes(busqueda.toLowerCase())
    );

    const showProfile = (user) => {
        swal.fire({
            title: `<div className="flex justify-start items-start"> 
                        <p> <strong>Nombre: </strong>${user.name} ${user.lastname}</p>
                        <p><strong>Teléfono: </strong>${user.telephone ? user.telephone : "No tiene"}</p>
                        <p><strong>Email: </strong>${user.email}</p>
                        <p><strong>identity_document: </strong>${user.identity_document ? user.identity_document : "No tiene"}</p>
                        <p><strong>Dirección: </strong>${user.adress ? user.adress : "No tiene"}</p>
                    </div>`,
            confirmButtonText: "Cerrar",
            icon: "info",
        });        
    };

    const actionDeleteUser = (async (idUser) => {
        try{
            const url = 'http://localhost:8082/tfg/users/deleteUserAdmin/';
            const tokenUser = window.localStorage.getItem('token');
            const urlCompleta = url + tokenUser + "/" + idUser.toString();
            const urlSinComillas = urlCompleta.replace(/"/g, '');
            const response = await axios.delete(urlSinComillas);

            swal.fire({
                icon: 'success',
                title: "¡Usuario borrado!",
                text: "Has borrado el usuario correctamente.",
                showConfirmButton: false,
                timer: 5000
            });
            getUsers();
        } catch(error){
            swal.fire({
                icon: 'error',
                title: error.response.data.errorMessage
            });
            console.error('Error de la API:', error.response.data.errorMessage);
        }
    });

    const deleteUser = (user) => {
        swal.fire({
            icon: 'warning',
            title: "Advertencia",
            text: "¿Está seguro que desea eliminar este usuario?",
            showDenyButton: true,
            denyButtonText: 'No',
            showConfirmButton: true,
            confirmButtonText: 'Si',
            confirmButtonColor: '#000000'
        }).then(response => {
            try {
                if (response.isConfirmed) {
                    actionDeleteUser(user.id);
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


    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={` ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`${styles.flexCenter} sm:flex-row flex-col `} >
                <div className="flex flex-col justify-center items-center">
                    <div className="text-center">
                        <h2 className={`${styles.heading2}`}>
                            Adminstración de usuarios
                        </h2>
                    </div>
                    
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Buscar usuarios..."
                            value={busqueda}
                            onChange={handleBusquedaChange}
                            className={`${styles.input} mt-4 py-2 px-16 font-poppins rounded-[10px]`}
                        />
                        <img src={searchIcon} alt='searchIcon' className='absolute top-0 right-0 w-[30px] h-[30px] mt-5 mr-2' /> 
                    </div>

                </div>
            </div>

            <div className={`${styles.padding} sm:flex-row flex-col flex-grow flex flex-1 gridContainer2`}>
                {usuariosFiltrados.map((user, index) => (
                    <button key={index} className={`bg-black-gradient-2 rounded-[20px] box-shadow flex flex-grow sm:mr-4`}>
                        <div className={`${styles.flexLeft} flex flex-grow`} >
                            <p className={`${styles.paragraph} text-left mt-2 ml-5 max-w-[90%] mr-4`}>
                                {user.name} {user.lastname}
                            </p>
                        </div>

                        <div className={`${styles.flexRight} flex flex-grow`} >
                            <button type='button' className={`${styles.flexCenter} py-2 px-4 bg-blue-gradient font-poppins font-medium text-[14px] 
                                                                text-primary outline-none ${styles} rounded-[10px] mr-2 mb-2 mt-2`} onClick={() => showProfile(user)}>
                                Ver perfil 
                            </button>

                            <button type='button' className={`${styles.flexCenter} py-2 px-4 bg-red-gradient font-poppins font-medium text-[14px] 
                                                                text-primary outline-none ${styles} rounded-[10px] mb-2 mt-2 mr-2`} onClick={() => deleteUser(user)}>
                                Eliminar usuario
                            </button>
                        </div>
                    </button>
                ))}
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
