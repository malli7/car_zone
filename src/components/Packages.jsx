import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { packages } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";


const PackageCard = ({
    index,
    name,
    price,
    tags,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
            >
                <div className='mt-5 flex flex-row justify-around'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <h3 className='orange-text-gradient font-bold text-[24px]'>{price}</h3>
                </div>

                <div className='mt-4 flex flex-col gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            ➢&nbsp;{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Packages = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>All Automative Repair Packages</p>
                <h2 className={`${styles.sectionHeadText}`}>Our Packages.</h2>
            </motion.div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {packages.map((packag, index) => (
                    <PackageCard key={`package-${index}`} index={index} {...packag} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Packages, "packages");
