import {useState, userState } from 'react'

import { close, logoElement2, menu } from '../assets';
import {navLinks} from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logoElement2} alt='logoElement' className='w-[120px] h-[85px]' />

      {/*Crear el menu contenedor de los links de la navBar*/}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        { navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] 
                        ${index === navLinks.legth - 1 ? 'mr-0' : 'mr-10'} text-white hover:text-secondary`}>
              <a href={`#&{nav.id}`}> {nav.title} </a>

            </li>
        ))}
      </ul>
      
      {/*Este apartado es para el menu de movil*/}
      <div className='sm:hidden flex felx-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain mr-10'
          onClick={() => setToggle((prev) => !prev)}/>
        
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-[10px] sidebar`}>
          <ul className='list-none flex-col justify_end items-center flex-1'>
            { navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] 
                            ${index === navLinks.legth - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                  <a href={`#&{nav.id}`}> {nav.title} </a>

                </li>
            ))}
          </ul>
        </div>

      </div>

    </nav>
  )
}

export default Navbar
