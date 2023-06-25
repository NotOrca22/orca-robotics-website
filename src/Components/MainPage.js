import orca from "./orca.png"
import trophyImage from "../trophyImage.jpg";
import ImageSlider from "../Slider/ImageSlider";
import { SliderData } from "../Slider/SliderData";
import comcast from "../comcast.png";
import bae from "../bae.png";
import techaction from "../techaction.png";
import deka from "../deka.png";
import gobilda from "../gobilda.png";
const MainPage = ({hidden}) => {
    // console.log(hidden);
    return (
    <div className={`mainContent ${hidden ? 'noOverflow' : ''}`}>
    <div className="text">
        
        <div className="past">
           <h1>We are Orca Robotics #21587</h1>
           <p>We are a group of 6 middle and high schoolers from Potomac, MD. In August 2022, we decided to start an FTC team to work on a robot together and to improve our knowledge of STEM. Since then, we have put in hundreds of hours designing, building, programming, and driving our robot, as well as reaching out to the community. We have competed in 4 events, 3 qualifiers and the Chesapeake Regional Championship. We learned a lot from our first season and we hope to perform even better next season.</p>
        </div>
        <div className="present">
            <h1>Future Goals</h1>
            <p>In the future, we want to reach out to the community more, improve our skills to improve our robot, and hopefully qualify for Worlds.</p>
        </div>
        <div className="future">
            <h1>Sponsors</h1>
            <div className="sponsors">
            <img src={comcast} alt=""></img>
            <img src={bae} alt=""></img>
            <img src={deka} alt=""></img>
            <img src={techaction} alt=""></img>
            <img src={gobilda} alt=""></img>
            </div>
        </div>
    </div>
    <h1>Photos</h1>
    <div className="photos">
        <ImageSlider slides={SliderData} shouldRender={true}/>
    </div>
    </div>
)}
export default MainPage;