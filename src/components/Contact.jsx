import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { map, phone_call, email, facebook, instagram, linkedin, twitter } from "../assets";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                'service_gsotj59',
                'template_0zk7q4x',
                {
                    from_name: form.name,
                    to_name: "Malli",
                    from_email: form.email,
                    to_email: "mallireddy2001@gmail.com",
                    message: form.message,
                },
                'QsZ9uDKqOn8PHbgQH'
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <div
            className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8'
                >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your good name?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your web address?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What you want to say?'
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>

                    <button
                        type='submit'
                        className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] '
            >
                <div className=" justify-center items-center flex flex-col ">
                    <div className="flex flex-col justify-start items-start ">

                        <h3 className={styles.sectionHeadText}>Contact Us</h3>
                        <div className="flex m-3 flex-row items-center justify-center">
                            <div>
                                <img className="w-12 h-12 object-contain m-3" src={map} />
                            </div>
                            <div>
                                <h3 className="font-extrabold text-[30px] text-green-800">Find Us</h3>
                                <p className="orange-text-gradient">123 Street, Newyork, 43100, United States</p>
                            </div>
                        </div>
                        <div className="flex m-3 flex-row items-center justify-center">
                            <div>
                                <img className="w-12 h-12 object-contain m-3" src={phone_call} />
                            </div>
                            <div>
                                <h3 className="font-extrabold text-[30px] orange-text-gradient">+1 (111) 111 1111</h3>
                            </div>
                        </div>
                        <div className="flex m-3 flex-row items-center justify-center">
                            <div>
                                <img className="w-12 h-12 object-contain m-3" src={email} />
                            </div>
                            <div>
                                <h3 className="font-extrabold text-[30px] orange-text-gradient">email@gmail.com</h3>
                            </div>
                        </div>

                        <h2 className="font-extrabold text-[40px] text-secondary m-2">Social Media Accounts</h2>
                        <div className="m-2 flex flex-row w-full justify-around">
                            <a href="https://facebook.com"><img className="w-1h-12 h-12 object-contain m-3" src={facebook} /></a>
                            <a href="https://instagram.com"><img className="w-1h-12 h-12 object-contain m-3" src={instagram} /></a>
                            <a href="https://linkedin.com"><img className="w-1h-12 h-12 object-contain m-3" src={linkedin} /></a>
                            <a href="https://twiitter.com"><img className="w-1h-12 h-12 object-contain m-3" src={twitter} /></a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");