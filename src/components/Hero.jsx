import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import {useEffect} from "react";

const Hero = () => {
    useEffect(()=>{
        //document.getElementById("hommm").scrollIntoView();
    }, [])
  return (
    <section className={`relative w-full h-screen mx-auto`} id="hommm" >
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/*<div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#00cea8]'/>
          <div className='w-1 sm:h-80 h-40 green-gradient' />
        </div>*/}

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className='text-[#00cea8]' >Tanvir</span>
          </h1>

         <p className={`${styles.heroSubText} mt-2 text-white-100`}>
             I am an experienced developer in PHP and JavaScript, <br className='sm:block hidden' />
             specializing in web app development, UI design, and 2D-3D visuals.
          </p>

        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
            <motion.div
                animate={{
                    y: [0, 24, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                className='w-3 h-3 bg-secondary mb-1'
            />
        </a>
      </div>
    </section>
  );
};

export default Hero;
