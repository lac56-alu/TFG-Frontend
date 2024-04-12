import {useState, userState } from 'react'
import { close, logoElement2, menu } from '../assets';
import {navLinks} from '../constants'
import { useLocalStorage } from '../hooks/useLocalStorage' 

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-3 justify-between items-left navbar'>
      <img src={logoElement2} alt='logoElement' className='w-[120px] h-[85px] flex flex-start ' />
      {/*Crear el menu contenedor de los links de la navBar*/}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
      {navLinks.map((nav, index) => {
        if (nav.id == 'login' && window.localStorage.getItem('token')) {
          return null;
        }
        if ((nav.id == 'logout' || nav.id == 'perfil') && !window.localStorage.getItem('token')) {
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
              if (nav.id == 'login' && window.localStorage.getItem('token')) {
                return null;
              }
              if ((nav.id == 'logout' || nav.id == 'perfil') && !window.localStorage.getItem('token')) {
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
