import AppContext from "../AppContext";
import { useContext } from "react";
const PastEvents = ({hidden}) => {
    const [state, dispatch] = useContext(AppContext)
    return (
        <div className={`events ${state.hiddenNavIsShowing ? 'noOverflow' : ''}`}>
            <div className="event1 eventTop">
                <h1>Mechanicsville, VA Qualifier</h1>
                <li>5-0 in Qualifying Matches, 2nd Seed Captain</li>
                <li>Captain of Semi-Finalist Alliance with 11112 and 8535, 2nd Highest OPR of 106</li>
            </div>
            <div className="event2">
                <h1>DC Qualifier</h1>
                <li>5-0 in Qualifying Matches, 1st Seed Captain</li>
                <li>Winning Alliance Captain, Alliance with Teams 8702 and 3583</li>
                <li>Top OPR of 115</li>
            </div>
            <div className="event1">
                <h1>Laurel, MD Qualifier</h1>
                <li>5-0 in Qualifying Matches, 1st Seed Captain</li>
                <li>Finalist Alliance Captain with 21232 and 20123</li>
                <li>Judges' Choice Award</li>
            </div>
            <div className="event2">
                <h1>Chesapeake Regional Championship</h1>
                <li>2-3 in Qualifying Matches, Rank 15</li>
            </div>
        </div>
    )
}
export default PastEvents;