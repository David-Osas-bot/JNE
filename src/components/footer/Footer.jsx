import "./footer.css";
import PIC7 from "../../assets/pic7.jpeg";
import { FaFacebookF } from "react-icons/fa";
import { CgInstagram } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='footer' id="footer">
            <div>
                <img src={PIC7} alt="JNE_img" />
            </div>

            <main>
                <span>
                    <strong>Email:</strong> Anthony@jivenationentertainment.co.uk or Jivenationenter10ment@gmail.com
                </span>

                <span>
                    <strong>Phone:</strong> +44 (0)7874077088
                </span>

                <span>
                    <strong>Business Hours:</strong> Monday – Friday, 9:00 AM – 6:00 PM
                </span>
            </main>

            <aside>
                <ul className="footer_links">
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

                <div>
                    <div className="footer_socials">
                        <a href="https://facebook.com"><FaFacebookF /></a>
                        <a href="https://instagram.com"><CgInstagram /></a>
                        <a href="https://twitter.com"><FaXTwitter /></a>
                    </div>

                    <div className="footer_copyright">
                        <small>&copy; Jive Nation Entertainment. All rights reserved</small>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Footer;