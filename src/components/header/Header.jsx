import "./header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react"; 
import JNE from "../../assets/jne.png";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header>
            <div className="logo">
                <img src={JNE} alt="JNE_img" />
            </div>


            <ul className={`links ${isOpen ? "active" : ""}`}>
                <li>
                    <a href="#about">About Us</a>
                </li>

                <li>
                    <a href="#services">Our Services</a>
                </li>

                <li>
                    <a href="#mission">Our Mission</a>
                </li>

                <li>
                    <a href="#mission">Our Vision</a>
                </li>

                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div class="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <RxHamburgerMenu className="icon" />
            </div>
        </header>
    );
};

export default Header;