import orca from "./orca.png";
import ThreeLines from "../3lines.png";
import Empty from "./Empty";
// import toggle
const Header = ({updateFunc}) => {
    const handleClick = () => {
        updateFunc();
    }
    return (
        <div className="header">
            <button type="button" className='NavButton' onClick={handleClick}><img src={ThreeLines}></img></button>
            {/* <button type="button" className='NavButton2' onClick={handleClick}>EEEEEEEEEEEEE</button> */}
            <img className="reduced" alt="" src={orca}></img>
            <h1 className="topText">Team 21587 Orca Robotics</h1>
        </div>
    )
}
export default Header