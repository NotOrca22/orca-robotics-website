import orca from "./orca.png";
import beluga from "../beluga.png";
import Person from "./Person";
const Members = () => {
    return (
        <div className="group">
            {/* <p>hi</p> */}
        <Person name="orca" desc="not a fish, been an orca since 2008, certified blunderer of pieces in chess" pic={orca} />
        <Person name="beluga" desc="big white fluffy seal, I love to eat, sleep, and flop around at 1 mile per hour" pic={beluga} />
        </div>
    )
}

export default Members