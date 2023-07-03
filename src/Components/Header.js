import orca from "./orca.png";
import ThreeLines from "../3lines.png";
import Empty from "./Empty";
import { useContext } from "react";
import AppContext from "../AppContext";

const Header = ({updateFunc}) => {
    const handleClick = () => {
        updateFunc();
    }
    const [state, dispatch] = useContext(AppContext)
    const toggleHidden = (event) => {
        dispatch({type: 'toggleHiddenNav'})
    }
    return (
        <div className="header">
            <button type="button" className='NavButton' onClick={toggleHidden}><img src={ThreeLines}></img></button>
            {/* <button type="button" className='NavButton2' onClick={handleClick}>EEEEEEEEEEEEE</button> */}
            <img className="reduced" alt="" src={orca}></img>
            <h1 className="topText">Team 21587 Orca Robotics</h1>
        </div>
    )
}
export default Header