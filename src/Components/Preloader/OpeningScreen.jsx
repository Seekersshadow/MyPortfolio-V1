import React,{ useEffect } from 'react'
import Style from './OpeningScreen.module.css'
import { motion} from "framer-motion"


const OpeningScreen = () => {
  useEffect(() => {
    // preLoaderAnim();
  }, []);
  return (
    <div className={Style.openingScreen}>
      <div className={Style.centerContainer}>
        <motion.div className={Style.openingLogo} 
          initial={{opacity:0, scale:0}}
          animate ={{opacity:1,scale:1}}
          transition={{
            duration:4,
            ease:'easeIn',
            type:"spring"
          }}
        >
          <img src="./logo.png" alt="logo" />
        </motion.div>
        <motion.div
         className={Style.textContent}
         initial = {{transform:"translateX(-100px)" , opacity: 0}}
         animate={{transform:"translateX(0px)",opacity:1}}
         transition={{
          type:"spring",
          duration: 4,
          ease: 'easeIn'}}
         >
          <span>Eat</span>
          <span>Code</span>
          <span>Repeat</span>
        </motion.div>
      </div>
    </div>
  )
}

export default OpeningScreen