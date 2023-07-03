import { useState } from "react"
import { Navigate } from "react-router-dom";
import axios from "axios";
import AppContext from "../AppContext";
import { useContext } from "react";
const LoginForm = ({hidden}) => {
    const [state, dispatch] = useContext(AppContext)
    const [name, setName] = useState(" ")
    const [password, setPassword] = useState(" ")
    const [nav, setNav] = useState(false)
    const [resp, setResp] = useState(" ")
    // const [name, setName] = useState(" ");
    const submit = async e => {
        e.preventDefault();
        const resp = await axios.post("https://192.168.0.155:4888/login?username=beluga&password=w1234", {withCredentials: true});
        setNav(true);
        axios.defaults.headers.common["Authorization"] = `Bearer ${resp["token"]}`
        setResp(resp)

    }
    if (nav) {
        <Navigate to="/"/>
    }
    return (
        <div className="page-container">
        <main className={`formSignin ${state.hiddenNavIsShowing ? 'noOverflow' : ''}`}>
            <form>
                <p>Email: <input type="email" placeholder="orca@orca.com" onChange={e => setName(e.target.value)}></input></p>
                <p>Password: <input type="password"></input></p>
                <button type="submit" onClick={submit}>Submit</button>
            </form>
        </main>
        </div>
    )
}
export default LoginForm