import { Link } from "react-router-dom"

const HiddenNavBar = ({closeNav}) => {
    return (
        <div className="hiddenNav">
            <li className="hiddenLink"><Link to="/" className="NavLink" onClick={closeNav}>Home</Link></li>
            <li className="hiddenLink"><Link to="/robots" className="NavLink" onClick={closeNav}>Robots</Link></li>
            <li className="hiddenLink"><Link to="/portfolio" className="NavLink" onClick={closeNav}>Portfolio</Link></li>
            <li className="hiddenLink"><Link to="/events" className="NavLink" onClick={closeNav}>Events</Link></li>
            <li className="hiddenLink"><Link to="/members" className="NavLink" onClick={closeNav}>Members</Link></li>
        </div>
    )
}

export default HiddenNavBar;