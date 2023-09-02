import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import {useEffect} from "react";
import {arrowDown} from "../assets";

const Hero = () => {
    useEffect(()=>{
        //document.getElementById("hommm").scrollIntoView();
    }, [])

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
                staggerDirection: -1
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

  return (
    <section className={`relative w-full h-screen mx-auto`} id="hommm" >
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 overflow-hidden`}
      >
        {/*<div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#00cea8]'/>
          <div className='w-1 sm:h-80 h-40 green-gradient' />
        </div>*/}

        <motion.div
            initial={{
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                initial={{
                    borderColor: '#652626'
                }}
                animate={{
                    borderColor: '#2853a5'
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="border-4 border-indigo-500/50 p-5 pt-0"
            >
                <motion.div
                    animate={{
                        x:[-31, 1030, 1030, -31, -31],
                        y:[-13, -13,    230, 230, -13]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    className="w-0"
                >
                    <div className="w-5 h-5 rounded-full bg-[#2853a5]"/>

                </motion.div>


            {/*<motion.div
                initial={{ x:0 }}
                animate={{ x:1000 }}
                transition={{
                    duration: 2,
                }}
            >

                <motion.div
                    initial={{ y:0 }}
                    animate={{ y:300 }}
                    transition={{
                        delay:2,
                        duration: 1,
                    }}
                >

                    <motion.div
                        initial={{ x:0 }}
                        animate={{ x:-1000 }}
                        transition={{
                            delay:3,
                            duration: 2,
                        }}
                    >
                        <motion.div
                            initial={{ y:0 }}
                            animate={{ y:-300 }}
                            transition={{
                                delay:5,
                                duration: 1,
                            }}
                        >
                            <div className="w-5 h-5 rounded-full bg-secondary mb-1"/>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>*/}


              <h1 className={`${styles.heroHeadText} text-white`}>
                Hello, I'm <span className='text-[#00cea8]' >Tanvir</span>
              </h1>

             <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                 I am an experienced developer in PHP and JavaScript, <br className='sm:block hidden' />
                 specializing in web app development, UI design, and 2D-3D visuals.
              </p>
            </motion.div>
        </motion.div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>

            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                <div
                    className='w-3 h-5 rounded-full bg-secondary mb-1'
                />
            </div>

            <motion.div className='w-9 h-3 mb-1'
                        animate={{
                            y: [0, 24, 0]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
            >
                <motion.img

                    src={arrowDown}

                />
            </motion.div>

        </a>
      </div>
    </section>
  );
};

export default Hero;
