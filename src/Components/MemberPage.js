import { useLocation } from "react-router-dom"

const MemberPage = ({name, pic, intro, hidden}) => {
    const location = useLocation();
    const data = location.state;
    return (
        <div className={`${hidden ? 'noOverflow' : ''}`}>
            {/* <MemberDropDown /> */}
            
            <img className="image" alt="" src={data.pic}></img>
            <h1>{data.name}</h1>
                <p>{data.intro}</p>
                {/* <Link to="/member" className="styledLink">{name}</Link> */}
        </div>
    )
}
export default MemberPage