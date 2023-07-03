import { useLocation } from "react-router-dom"
import AppContext from "../AppContext";
import { useContext } from "react";
const MemberPage = ({name, pic, intro, hidden}) => {
    const [state, dispatch] = useContext(AppContext)
    const location = useLocation();
    const data = location.state;
    return (
        <div className={`${state.hiddenNavIsShowing ? 'noOverflow' : ''}`}>
            {/* <MemberDropDown /> */}
            
            <img className="image" alt="" src={data.pic}></img>
            <h1>{data.name}</h1>
                <p>{data.intro}</p>
                {/* <Link to="/member" className="styledLink">{name}</Link> */}
        </div>
    )
}
export default MemberPage