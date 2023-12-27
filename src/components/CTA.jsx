import styles from "../style"
import Button from "./Button"

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}
                        sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div className="flex-1 flex flex-col">
            <h2 className={styles.heading2}>
                ¡Prueba nuestros servicios ahora!
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-2`}>
                Transforma tu vida y alcanza tus objetivos de fitness con nuestras increíbles tarifas de gimnasio. 
                Selecciona tu tarifa hoy y da el primer paso hacia un cuerpo más fuerte y saludable.
            </p>
        </div>
        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-2`}>
            <Button />
        </div>
    </section>
)


export default CTA