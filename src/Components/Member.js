import { Link } from "react-router-dom"
import MemberDropDown from "./MemberDropDown"
import AppContext from "../AppContext";
import { useContext } from "react";
const Member = ({name, photo, intro, hidden}) => {
  const [state, dispatch] = useContext(AppContext)
    return (
        <div className={`${state.hiddenNavIsShowing ? 'noOverflow' : ''}`}>
            
            <div className="memberPage">
                {/* <MemberDropDown /> */}
                
                <img className="image" alt="" src={photo}></img>
                {/* <p>{intro}</p> */}
                <Link
  to="/member"
  state={{
    name: name,
    pic: photo,
    intro: intro
  }}
  className="styledLink"
>
  {name}
</Link>            </div>
        </div>
    )
}
export default Member