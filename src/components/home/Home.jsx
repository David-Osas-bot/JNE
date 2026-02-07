import "./home.css";
import bg from "../../assets/city.png";

const Home = () => {
    return (

        <div className="home"
            style={{ backgroundImage: `url(${bg})` }}>

            <div className="home_writeup">
                <span>
                   <em className="welcome"> Welcome to</em> Jive Nation Entertainment Ltd.

                </span>
            </div>
        </div>
    );
};

export default Home;