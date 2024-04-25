import styles from "../style"
import { logoElement2 } from '../assets'
import { footerLinks, socialMedia } from '../constants'
import { Link } from 'react-router-dom';

const redirectToFooter = (url) => {
  console.log(url)
  window.location.href = url;
}

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-3 w-full`}>  
      <div className="flex-[1.5]  w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white mb-4">
              {footerLink.title}
            </h4>
            <ul>
              {footerLink.links.map((link, index) => (
                <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite 
                                                hover:text-secondary cursor-pointer mb-3`}> 
                  {link.external ? (
                    <Link to={link.url} target="_blank" rel="noopener noreferrer">{link.name}</Link>
                  ) : (
                    <a href={link.url}>{link.name}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    
    <div>
      <p className="font-poppins font-normal text-center text-[14px] leading-[27px] text-white">
        Copyright © 2023 - Element Technologic S.L.
      </p>
    </div>
  </section>
)

export default Footer
