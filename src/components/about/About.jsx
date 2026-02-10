import "./about.css";
import PIC2 from "../../assets/pic2.jpeg";
import { motion } from "framer-motion";


const About = () => {
    return (
        <div className='about' id="about">
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.2,
                    ease: "easeOut",
                }}
            >

                <div className="about_container">
                    <div className="about_img">
                        <img src={PIC2} alt="about_img" />
                    </div>

                    <div className="about_writeup">
                        <div className="about_title">
                            <span>ABOUT US</span>
                        </div>

                        <p className="about_p">
                            Jive Nation Entertainment Ltd is a dynamic events and entertainment company dedicated to creating unforgettable experiences.

                            We specialise in planning and delivering high-quality events ranging from weddings and birthday celebrations to corporate functions, nightclubs, and private parties.

                            Our team is passionate about bringing ideas to life through careful planning, creative execution, and attention to detail. Whether it’s an intimate gathering or a large-scale event, we work closely with our clients to ensure every occasion is unique, seamless, and memorable.

                            At Jive Nation Entertainment Ltd, we don’t just plan events, we create moments
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;