import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient
                  p-[4px] cursor-pointer`}>
    <a className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`} href="/access-platform">
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] ml-2 mr-2">
          <span className="text-white"> Descubre</span>
        </p>
        <img src={arrowUp}  className="w-[23px] h-[23px] object-contains"/>
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-white">Mucho más</span>
      </p>
    </a>
    
  </div>
)

export default GetStarted
