import orca from "./orca.png";
import beluga from "../beluga.png";
import yixuan from "../Yixuan.png";
import MemberDropDown from "./MemberDropDown";
import Member from "./Member";
import { useContext } from "react";
import AppContext from "../AppContext";
import Person from "./Person";
const Members = ({hidden}) => {
    const [state, dispatch] = useContext(AppContext)
    return (
        <div className={`group ${state.hiddenNavIsShowing ? 'noOverflow' : ''}`}>
            {/* <Member name="Chris Wang" photo={orca} intro="eze"></Member> */}
            {/* <Member name="Yiks Li" photo={yixuan} intro="e"></Member> */}
            {/* <Member name="Sophia Wang" photo={beluga} intro="idk"></Member> */}
            
            {/* <MemberDropDown /> */}
            {/* <p>hi</p> */}
        <Person name="orca" desc="not a fish, been an orca since 2008, certified blunderer of pieces in chess" pic={orca} />
        <Person name="beluga" desc="big white fluffy seal, I love to eat, sleep, and flop around at 1 mile per hour" pic={beluga} />
        <Person name="orca 2" desc="team captain, does coding and building, blunders too many pieces in chess" pic={orca} />
        </div>
    )
}

export default Members