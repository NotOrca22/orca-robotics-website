import logo from './logo.svg';
import './App.css';
// import Person from './Components/Person';
import Header from './Components/Header';
import { Route, BrowserRouter, Link, Routes, useLocation } from "react-router-dom";
import { useReducer } from 'react';
import Members from "./Components/Members"
import beluga from "./beluga.png";
import { useState } from "react";
import MainPage from './Components/MainPage';
import LoginForm from './Components/LoginForm';
import Portfolio from './Components/Portfolio';
import Robots from './Components/Robots';
import LoginDropDown from './Components/LoginDropdown';
import LogOut from './Components/LogOut';
import Footer from './Components/Footer';
import Member from './Components/Member';
import Yixuan from "./Yixuan.png";
import MemberDropDown from './Components/MemberDropDown';
import orca from "./Components/orca.png";
import PastEvents from './Components/PastEvents';
import MemberPage from './Components/MemberPage';
import ThreeLines from "./3lines.png";
import HiddenNavBar from './Components/HiddenNavBar';
import Empty from './Components/Empty';
import Navbar from './Components/Navbar';
import AppContext from './AppContext';
const App = () => {
  // loggedIn false, 
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'Login':
        return {...state, loggedIn: true}
      case 'Logout':
        return {...state, loggedIn: false}
      case 'changePage':
        return {...state, currentPage: action.currentPage}
      case 'toggleHiddenNav':
        return {...state, hiddenNavIsShowing: !state.hiddenNavIsShowing}
      case 'hideHiddenNav':
        return {...state, hiddenNavIsShowing: false}
    }
  }
  const initialState = {
    loggedIn: false, 
    currentPage: "home",
    hiddenNavIsShowing: false
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  // const [state, dispatch] = useReducer(reducer, initalState)
  // this.state
  const name = "Orca"
  const [ rendered, changeRender ] = useState("")
  const [ loggedIn, toggleLog ] = useState(false) 
  const [ currentUser, changeUser ] = useState("Not Logged In")
  const [ dummyState, reRender ] = useState("EZ");
  const [ hiddenIsShowing, toggleHidden ] = useState(false);
  // const [hiddenIsShowing, dispatch]
  const isShowing = true
  const isLoggedIn = loggedIn;
  const currentlyLoggedIn = currentUser;
  const hidden = hiddenIsShowing;
  const toggleHiddenNav = () => {
    toggleHidden(!hidden);
  }

  const togglelog =() => {
    toggleLog(!isLoggedIn);
  }
  const logIn = ({username}) => {
    changeUser(username);
  }
  const logOut = () => {
    toggleLog(false);
    changeUser("Not logged in")
  }
  const register = ({username}) => {
    changeUser(username);
    toggleLog(true)
  }
  const goToSettings = () => {
    reRender("idk");
  }
  const closeNav = () => {
    toggleHidden(false);
  }

    return (
    <AppContext.Provider value={[state, dispatch]}>
    <div id="top">
    
      <Header className="header-full-width" updateFunc={toggleHiddenNav}/>
      <BrowserRouter>
      
      <nav>
      <div className='nav'>
      <HiddenNavBar/>
      <Navbar />
    </div>
    </nav>
    {/* <div className="vertical">
              <button type="button" onClick={toggle}>
                {isLoggedIn ? {currentlyLoggedIn} : "Not Logged In"}
              </button>
              {loginNavShowing && <LoginDropDown isLoggedIn={isLoggedIn} />}
      </div> */}
    <div className='empty-container'>

    </div>
    <div className="content" >
    <Routes>
    <Route path="/members" element= { <Members hidden={hidden}/> }></Route>
    <Route exact path="/" element= { <MainPage hidden={hidden}/>}></Route>
    <Route exact path="/login" element= { <LoginForm hidden={hidden}/>}></Route>
    <Route path="/portfolio" element = { <Portfolio hidden={hidden}/>}></Route>
    <Route path="/robots" element = { <Robots hidden={hidden}/>}></Route>
    <Route path="/events" element={< PastEvents hidden={hidden}/>}></Route>
    <Route path="/logout" element = { <LogOut hidden={hidden}/>}></Route>
    <Route path="/Chris" element = { <Member name="Chris Wang" intro="I am orca" img={orca} hidden={hidden}/>}></Route>
    <Route path="/Yixuan" element = { <Member name="Yixuan Li" intro="i do violin" img={Yixuan} hidden={hidden}/>}></Route>
    <Route path="/member" element={<MemberPage hidden={hidden}/>}></Route>
    </Routes>
    <div className='rightAlign'>
        <LoginDropDown isLoggedIn={false} onLoginClick={logIn} onLogoutClick={logOut} onSettingsClick={goToSettings} onRegisterClick={register}></LoginDropDown>
      </div>
    </div>
    </BrowserRouter>
    <div className='footer'>
    <Footer />
    </div>
    </div>
  </AppContext.Provider>
      
    );
  // }
}

export default App;

// export {toggleHiddenNav};