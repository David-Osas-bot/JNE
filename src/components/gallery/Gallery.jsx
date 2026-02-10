import "./gallery.css";
import PIC1 from "../../assets/pic1.jpeg";
import PIC2 from "../../assets/pic2.jpeg";
import PIC3 from "../../assets/pic3.jpeg";
import PIC4 from "../../assets/pic4.jpeg";
import PIC5 from "../../assets/pic4.jpeg";
import PIC6 from "../../assets/pic6.jpeg";
import PIC7 from "../../assets/pic7.jpeg";



const Gallery = () => {
    return (
        <div className='galleryBanner' id="gallery">
            <div className="slider" style={{ '--quantity': 10 }}>
                <div className="items" style={{ '--position': 1 }}>
                    <img src={PIC1} alt="" />
                </div>
                <div className="items" style={{ '--position': 2 }}>
                    <img src={PIC2} alt="" />

                </div>
                <div className="items" style={{ '--position': 3 }}>
                    <img src={PIC3} alt="" />

                </div>
                <div className="items" style={{ '--position': 4 }}>
                    <img src={PIC4} alt="" />

                </div>
                <div className="items" style={{ '--position': 5 }}>
                    <img src={PIC5} alt="" />

                </div>
                <div className="items" style={{ '--position': 6 }}>
                    <img src={PIC6} alt="" />

                </div>
                <div className="items" style={{ '--position': 7 }}>
                    <img src={PIC7} alt="" />
                </div>
                <div className="items" style={{ '--position': 8 }}>
                    <img src={PIC3} alt="" />

                </div>
                <div className="items" style={{ '--position': 9 }}>
                    <img src={PIC3} alt="" />

                </div>
                <div className="items" style={{ '--position': 10 }}>
                    <img src={PIC3} alt="" />

                </div>
            </div>
            {/* <div className="content">
                <h1>CSS ONLY</h1>
                <div className="author">
                    <h2>STEVE DEV</h2>
                    <p><b>Junior FontendDev</b></p>
                    <p>Stay tuned to some animation</p>
                </div>
                <div className="model"></div>
            </div> */}
        </div>
    );
};

export default Gallery;