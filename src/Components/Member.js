import MemberDropDown from "./MemberDropDown"
const Member = ({name, intro, img}) => {
    return (
        <div>
            
            <div className="memberPage">
                {/* <MemberDropDown /> */}
                <h1>{name}</h1>
                <img className="image" alt="" src={img}></img>
                <p>{intro}</p>
            </div>
        </div>
    )
}
export default Member