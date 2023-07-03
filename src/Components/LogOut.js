import AppContext from "../AppContext";
import { useContext } from "react";
const LogOut = ({hidden}) => {
    const [state, dispatch] = useContext(AppContext)
    return(<h1 className={`${state.hiddenNavIsShowing ? 'noOverflow' : ''}`}>You have successfully logged out.</h1>)
}

export default LogOut;