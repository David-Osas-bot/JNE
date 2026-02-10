import "./services.css";
import PIC4 from "../../assets/pic4.jpeg";

import { motion } from "framer-motion";


const Services = () => {
    return (
        <div className='services' id="services">
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.2,
                    ease: "easeOut",
                }}
            >
                <div className="services_container">

                    <div className="service_writeup">
                        <div className="services_title">
                            <span>OUR SERVICES</span>
                        </div>

                        <p className="service_p">
                            We provide comprehensive event planning and entertainment services, including:
                            Wedding Planning & Coordination
                            Full and partial wedding planning, coordination, and on-the-day management.

                            Birthday & Private Celebrations
                            Customised planning for milestone birthdays, anniversaries, and private events.

                            Corporate Events
                            Professional planning for conferences, product launches, team-building events, and company parties.

                            Nightclub & Entertainment Events
                            Event management for club nights, themed parties, and live entertainment experiences.

                            Event Styling & Coordination
                            Venue coordination, décor planning, scheduling, and supplier management.

                            Each event is tailored to suit your vision, budget, and style. MISSION
                        </p>
                    </div>

                    <div className="services_img_div">
                        <img src={PIC4} alt="services_img" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Services;