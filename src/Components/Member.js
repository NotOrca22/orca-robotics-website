import { Link } from "react-router-dom"
import MemberDropDown from "./MemberDropDown"
const Member = ({name, photo, intro, hidden}) => {
    return (
        <div className={`${hidden ? 'noOverflow' : ''}`}>
            
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