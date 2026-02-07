import "./footer.css";
import JNE from "../../assets/jne.png";

const Footer = () => {
    return (
        <div className='footer' id="footer">
            <div>
                <img src={JNE} alt="JNE_img" />
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

            </aside>
        </div>
    );
};

export default Footer;