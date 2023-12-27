import styles from '../style';
import GetStarted from './GetStarted';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col x1:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <p className={`${styles.paragraph} text-white`}>
          <span className='text-white'>
            👋🏼 Bienvenido a Element!
          </span>
        </p>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[63px] text-[50px] text-white 
                       ss:leading-[100px] leading-[75px]'>
          Conoce el <br className='sm:block hidden'/> {" "}
          <span className='text-gradient'>
            Método Element
          </span> <br className='sm:block hidden'/> {" "}
          y empieza a sentirte bien
        </h1>

        <div className='ss:flex hidden md_mr-4'>
          <GetStarted />
        </div>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[40px] text-[25px] text-white 
                       ss:leading-[100px] leading-[75px]'>
          <p className={`${styles.paragraph} max-w-[470px] mt-4`}>
            En Element ponemos desde tu llegada al club este método en marcha para que consigas todos tus objetivos.
          </p>          
        </h1>
      </div>
    </div>
  </section>
)

export default Hero
