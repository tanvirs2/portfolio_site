import {motion} from "framer-motion";
import {fadeIn, textVariant} from "../utils/motion";
import {styles} from "../styles";
import React from "react";
import {SectionWrapper} from "../hoc";

const MyStory = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center mt-4 `}>
                    A story that better describes my natural problem solving talent.
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    My childhood Story.
                </h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-light text-[17px] leading-[30px] text-center'
            >
                <b>Problem-solving skills:</b> I have a natural ability to identify and solve problems. I am able to think critically and creatively to come up with solutions that are both effective and efficient. I am also able to troubleshoot problems and identify the root cause of the issue.

                <br/>
                <br/>

                When I was 10 years old, I was playing by myself near the edge of a field while my childhood best friend was playing cricket with our other friends in the field. During the game, my friend accidentally threw the ball into the neighbor's bathroom and it got stuck in the toilet. The neighbor, who was the landlord, shouted at my friend and demanded that he retrieve the ball from the toilet. My friend was very scared and didn't know what to do, so he came to me for help. He knew that I was known among our friends for being intelligent so he asked me for a solution. He said, "Tanvir, you're very talented, so please help me with your wise solution. It's a difficult situation, and I don't know how to solve it on my own." I thought for a moment and came up with an idea. I asked my friend to bring me a plastic pen that had run out of ink and a long wooden stick. Once he collected both items, I inserted the stick into the pen's hole and burned a small area of the pen. Then, I instructed my friend to hold the pen against the surface of the ball and keep it there until it cooled down. As the pen cooled, it stuck tightly to the ball. Finally, my friend was able to pull out the pen using the stick, and the problem was solved.

            </motion.p>
        </>
    );
}


export default SectionWrapper(MyStory, "myStory");
