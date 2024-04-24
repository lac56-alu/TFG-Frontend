import { useEffect, useState } from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function AccessPlatform() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={` ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Navbar />
          </div>
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
              <Footer />
          </div>
      </div>
    </div>
  )
}
