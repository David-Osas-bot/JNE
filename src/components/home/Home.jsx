import "./home.css";
import bg from "../../assets/city.png";
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
    return (

        <div className="home"
            style={{ backgroundImage: `url(${bg})` }}>

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
        </div>
    );
};

export default Home;