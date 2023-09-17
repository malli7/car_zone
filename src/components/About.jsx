import React from 'react'
import { motion } from 'framer-motion'
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Who we are?</p>
                <h2 className={styles.sectionHeadText}>About Us</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                Revitalize Your Ride at Car Zone! Experience premium car wash and expert repair services under one roof.
                We deliver sparkling clean cars and top-notch repairs, ensuring your vehicle always looks and performs its best.
                Trust us with your vehicle's care, we've got you covered!
            </motion.p>
        </>
    )
}

export default SectionWrapper(About, "about");
