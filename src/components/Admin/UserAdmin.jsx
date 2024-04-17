import { useEffect, useState } from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'
import axios from 'axios'
import swal from 'sweetalert2'

export default function UserAdmin() {
    const [usuarios, setUsuarios] = useState([]);
    const [busqueda, setBusqueda] = useState('');

    useEffect(() => {
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

        getUsers();
    }, []);

    const handleBusquedaChange = (e) => {
        setBusqueda(e.target.value);
    };

    const usuariosFiltrados = usuarios.filter((user) =>
        user.name.toLowerCase().includes(busqueda.toLowerCase())
    );

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
                    <input
                        type="text"
                        placeholder="Buscar usuarios..."
                        value={busqueda}
                        onChange={handleBusquedaChange}
                        className={`${styles.input} mt-4 py-2 px-10 font-poppins rounded-[10px]`}
                    />
                </div>
            </div>

            <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col flex flex-1 gridContainer2`}>
                {usuariosFiltrados.map((user, index) => (
                    <button key={index} className={`${styles.flexCenter} bg-black-gradient-2 rounded-[20px] box-shadow flex flex-col flex-grow sm:mr-4`}>
                        <p className={`${styles.paragraph} ${styles.flexCenter} text-center mt-2 max-w-[90%]`}>
                            {user.name}
                        </p>
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
