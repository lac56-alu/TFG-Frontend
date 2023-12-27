import { feedback } from "../constants"
import styles from "../style"
import FeedbackCard from "./FeedbackCard"

const Feedback = () => (
   <section id="clients" className={`${styles.flexCenter} flex-col relative`}>
    
    <div />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
        Algunas reseñas sobre 
        <br className="sm:block hidden"/>
        nuestras instalaciones
      </h1>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card}/>
      ))}
    </div>
   </section> 
)

export default Feedback
