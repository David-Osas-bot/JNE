import "./home.css";
import pic3 from "../../assets/pic3.jpeg";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div className="home"
            style={{ backgroundImage: `url(${pic3})` }}>
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.2,
                    ease: "easeOut",
                }}
            >

                <div className="home_writeup">
                    <span className="type-wrapper">
                        <em className="welcome"> Welcome to</em>

                        <Typewriter
                            words={['Jive Nation Entertainment Ltd.']}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={80}
                            deleteSpeed={60}
                            delaySpeed={1200}
                        />
                    </span>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;