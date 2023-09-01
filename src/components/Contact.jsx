import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import {github, gitlab, linkedin} from "../assets";

const Contact = () => {

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[1] bg-black-100/75 p-8 rounded-2xl'
      >
        <p className={`${styles.sectionSubText} text-center`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} text-center`}>Contact.</h3>

        <div className="text-center">
          <a href="https://github.com/tanvirs2" target="_blank">
            <img src={github} alt="" className="inline m-3"/>
          </a>

          <a href="https://www.linkedin.com/in/tanvirs2/" target="_blank">
            <img src={linkedin} alt="" className="inline m-3 rounded-full" width={126}/>
          </a>

          <a href="https://gitlab.com/tanvirs2" target="_blank">
            <img src={gitlab} alt="" className="inline m-3"/>
          </a>
        </div>

        <div className="text-center">

          <p className="mt-7"><a href="mailto:tanvir603@gmail.com">TANVIR603@GMAIL.COM</a></p>
        </div>

      </motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, "contact");
