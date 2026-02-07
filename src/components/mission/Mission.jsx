import "./mission.css";
import VIDEO from "../../assets/video.mp4";

const Mission = () => {
    return (
        <div className="mission_container" id="mission">
            <video autoPlay loop muted playsInline className="video-bg">
                <source src={VIDEO} type="video/mp4" />
            </video>

            <div className="content">
                <div>
                    <span className="mission_title">OUR MISSION</span>
                    <p className="mission_p">Our mission is to deliver exceptional event experiences by combining creativity, organisation, and professionalism. We aim to exceed expectations by turning our clients’ ideas into well-executed, memorable events. </p>
                </div>

                <div>
                    <span className="vision_title">OUR VISION</span>
                    <p className="vision_p">Our vision is to become a leading entertainment and events brand known for creativity, reliability, and outstanding customer experiences. We aspire to set high standards within the events industry while building long-term relationships with our clients and partners.</p>
                </div>
            </div>
        </div>
    );
};

export default Mission;
