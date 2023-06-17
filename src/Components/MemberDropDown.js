import { Route, BrowserRouter, Link, Routes } from "react-router-dom";
const MemberDropDown = () => {
    return (
        <div className="dropdown">
            <button className="dropbtn">Members</button>
            <div className="dropdown-content" id="frontLayer">
                <Link to="/Chris">Chris</Link>
                <Link to="/Yixuan">Yixuan</Link>
                {/* <Link to="/login">Register</Link> */}
            </div>
        </div>
    )
}
export default MemberDropDown