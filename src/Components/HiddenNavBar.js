import { Link } from "react-router-dom"
import { useContext } from "react"
import AppContext from "../AppContext"
const HiddenNavBar = () => {
    const [state, dispatch] = useContext(AppContext)
    const closeNav = (event) => {
        dispatch({type: "hideHiddenNav"})
    }
    return (
        <div className={`hiddenNav ${state.hiddenNavIsShowing ? '' : 'NotShowing'}`}>
            <li className={`hiddenLink ${state.hiddenNavIsShowing ? '' : 'NotShowing'}`}><Link to="/" className="NavLink" onClick={closeNav}>Home</Link></li>
            <li className={`hiddenLink ${state.hiddenNavIsShowing ? '' : 'NotShowing'}`}><Link to="/robots" className="NavLink" onClick={closeNav}>Robots</Link></li>
            <li className={`hiddenLink ${state.hiddenNavIsShowing ? '' : 'NotShowing'}`}><Link to="/portfolio" className="NavLink" onClick={closeNav}>Portfolio</Link></li>
            <li className={`hiddenLink ${state.hiddenNavIsShowing ? '' : 'NotShowing'}`}><Link to="/events" className="NavLink" onClick={closeNav}>Events</Link></li>
            <li className={`hiddenLink ${state.hiddenNavIsShowing ? '' : 'NotShowing'}`}><Link to="/members" className="NavLink" onClick={closeNav}>Members</Link></li>
        </div>
    )
}

export default HiddenNavBar;