import React, { useState } from 'react'
import { SectionWrapper } from '../hoc';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { imageMap } from '../constants';

const Portfolio = () => {
    const [active, setActive] = useState("carWash")
    const images = imageMap[active] || imageMap.default;
    const handleSelectChange = (event) => {
        setActive(event.target.value);
    };

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Best Project Collections</p>
                <h2 className={styles.sectionHeadText}>Our Portfolio.</h2>
            </motion.div>

            <div>
                <div className="sm:hidden">
                    <label htmlFor="tabs" className="sr-only">
                        Select to see images
                    </label>
                    <select
                        id="tabs"
                        onChange={handleSelectChange}
                        value={active}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="">Select to see Portfolio</option>
                        <option value="carWash">Car Wash</option>
                        <option value="Repairing">Repairing</option>
                        <option value="carPaint">Car Paint</option>
                        <option value="newCars">New Cars</option>
                    </select>
                </div>
                <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                    {[
                        { label: "Car Wash", value: "carWash" },
                        { label: "Repairing", value: "Repairing" },
                        { label: "Car Paint", value: "carPaint" },
                        { label: "New Cars", value: "newCars" },
                    ].map((item) => (
                        <li key={item.value} className="w-full">
                            <button type="button"
                                className={`inline-block w-full p-4 rounded-r rounded-l ${active === item.value ? "bg-white-100" : "bg-gray-900"
                                    }`}
                                onClick={() => setActive(item.value)}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={`mt-20 flex flex-wrap justify-around gap-10 w-full flex-col sm:flex-row p-[1px] rounded-[20px] `}>
                {images.map((src, index) => (
                    <img key={index} className='sm:w-[45%] object-contain' src={src} />
                ))}
            </div>

        </>
    )
}

export default SectionWrapper(Portfolio, "portfolio");
