import { motion } from "framer-motion"
import { styles } from "../styles"
import { car_top_view } from "../assets"


const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div><img src={car_top_view} className="w-4 h-10 bg-red-600 rounded-t-full  rounded-b-full" /></div>
                    <div className="w-1 sm:h-80 h-40 red-gradient" />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText} orange-text-gradient`}>Car Services</h1>
                    <p className={`${styles.heroSubText} text-red-700  font-extrabold mt-2`}>We offer best car wash, car repair services.</p>
                </div>
            </div>

            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{ y: [0, 24, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="h-0 w-0 border-x-8 border-x-transparent border-t-[16px] border-t-white-100 my-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Hero
