import {useState, useEffect } from 'react'
import { close, logoElement2, menu } from '../assets';
import {navLinks} from '../constants'
import { useLocalStorage } from '../hooks/useLocalStorage' 
import axios from 'axios'
import CookieConsent, { Cookies } from "react-cookie-consent";
import styles from '../style';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [isAdmin, setIsAdmin] = useState(null);

  const redirectHome = () => {
    window.location.href="/";
  }

  const checkAdminNavbar = async () => {
    try {
      const token = window.localStorage.getItem('token');
      //console.log("TOKEN --> ", token);
      if (token) {
        //console.log("ENTRA");
        const url = 'http://localhost:8082/tfg/users/userType/';
        const urlCompleta = url + token;
        const urlSinComillas = urlCompleta.replace(/"/g, '');
        const response = await axios.get(urlSinComillas);
        //console.log(response.data.comprobar);
        return response.data.comprobar;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const getAdminState = async () => {
    try {
      const isAdmin = await checkAdminNavbar();
      return isAdmin;
    } catch (error) {
      console.error('Error al verificar el estado:', error);
      return false;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const adminState = await getAdminState(); 
      setIsAdmin(adminState); 
    };

    fetchData(); 
  }, []);

  const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
      setExpanded(!expanded);
    };

  return (
    <nav className='w-full flex py-3 justify-between items-left navbar'>
      <CookieConsent
          location="bottom"
          buttonText="Aceptar cookies"
          cookieName="ElementGym Cookie"
          style={{ background: "#ffffff", color: "#000000" }}
          buttonStyle={{ background: "#F8FC10", color: "#000000", fontSize: "20px" }}
          expires={150}
        >
          <h2 className={`${styles.flexLeft} ${styles.heading4} textBlack`}>
            Gestionar consentimiento de las cookies
          </h2>
          <div>
            <p style={{ maxHeight: expanded ? 'none' : '100px', overflow: 'hidden' }}>
              Para ofrecer las mejores experiencias, utilizamos tecnologías como las cookies para almacenar y/o acceder a la información del dispositivo. <br />
              El consentimiento de estas tecnologías nos permitirá procesar datos como el comportamiento de navegación o las identificaciones únicas en este sitio. <br />
              No consentir o retirar el consentimiento, puede afectar negativamente a ciertas características y funciones... <br />
            </p>
            {!expanded && (
              <button onClick={toggleExpand} style={{ background: 'none', border: 'none', color: '#CACD2D', cursor: 'pointer' }}>
                Leer más
              </button>
            )}
          </div>
          <a href="/privacity-page" className={`${styles.flexLeft} text-[18px]`} style={{ color: "black", textDecoration: "underline" }}>Política de privacidad</a>
        </CookieConsent>

      <img src={logoElement2} alt='logoElement' onClick={redirectHome} className='w-[120px] h-[85px] flex flex-start ' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
      {navLinks.map((nav, index) => {
        if (nav.id == 'adminPanel' && window.localStorage.getItem('token') && !isAdmin) {
          return null;
        } 

        if ((nav.id == 'login' || nav.id == 'registro') && window.localStorage.getItem('token')) {
          return null;
        }
        
        if ((nav.id == 'logout' || nav.id == 'perfil' || nav.id == 'reservas' || nav.id == 'adminPanel') && !window.localStorage.getItem('token')) {
          return null;
        }
        return (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] 
                        ${index === navLinks.length - 1 ? 'mr-4' : 'mr-10'} text-white hover:text-secondary`}>
            <a onClick={(event) => {
              if (nav.id == 'logout') {
                try {
                  window.localStorage.removeItem('token');
                  window.location.href = nav.href;
                } catch (error) {
                  console.log(error);
                } 
              } else {
                window.location.href = nav.href; // Redirige a la URL del enlace normalmente
              }
              event.preventDefault(); // Evita la navegación predeterminada
            }}>
              {nav.title}
            </a>
          </li>
        );
      })}
      </ul>
      
      {/*Este apartado es para el menu de movil*/}
      <div className='sm:hidden flex felx-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain mr-10'
          onClick={() => setToggle((prev) => !prev)}/>
        
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[280px] rounded-[10px] sidebar`}>
          <ul className='list-none flex-col justify_end items-center flex-1'>
            { navLinks.map((nav, index) => {
              if (nav.id == 'adminPanel' && window.localStorage.getItem('token') && !isAdmin) {
                return null;
              } 

              if ((nav.id == 'login' || nav.id == 'registro') && window.localStorage.getItem('token')) {
                return null;
              }
              
              if ((nav.id == 'logout' || nav.id == 'perfil' || nav.id == 'reservas' || nav.id == 'adminPanel') && !window.localStorage.getItem('token')) {
                return null;
              }
              return (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[35px] 
                            ${index === navLinks.legth - 1 ? 'mr-0' : 'mb-4'} text-white mt-6`}>
                  <a onClick={(event) => {
                      if (nav.id == 'logout') {
                        try {
                          window.localStorage.removeItem('token');
                          window.location.href = nav.href;
                        } catch (error) {
                          console.log(error);
                        } 
                      } else {
                        window.location.href = nav.href;
                      }
                      event.preventDefault();
                      }}>
                    {nav.title}
                  </a>
                </li>
            )})}
          </ul>
        </div>

      </div>

    </nav>
  )
}

export default Navbar
