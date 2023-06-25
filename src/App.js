import logo from './logo.svg';
import './App.css';
// import Person from './Components/Person';
import Header from './Components/Header';
import { Route, BrowserRouter, Link, Routes, useLocation } from "react-router-dom";
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
const App = () => {
  // this.state
  const name = "Orca"
  const [ rendered, changeRender ] = useState("")
  const [ loggedIn, toggleLog ] = useState(false) 
  const [ currentUser, changeUser ] = useState("Not Logged In")
  const [ loginNavShowing, toggleLoginNav ] = useState(false)
  const [ dummyState, reRender ] = useState("EZ");
  const [ hiddenIsShowing, toggleHidden ] = useState(false);
  const isShowing = true
  const isLoggedIn = loggedIn;
  const currentlyLoggedIn = currentUser;
  const loginNavIsShowing = loginNavShowing
  const hidden = hiddenIsShowing;
  const toggleHiddenNav = () => {
    toggleHidden(!hidden);
  }
  const toggle = () => {
    toggleLoginNav(!loginNavIsShowing)
  }
  const togglelog =() => {
    toggleLog(!isLoggedIn);
  }
  const logIn = ({username}) => {
    toggle(true);
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
  // if (!isLoggedIn) {
  // return (<div>
  //   {/* <Header /> */}
  //   <BrowserRouter>
  //   <nav>
  //   <ul className="mainNav">
  //   <li className='homeLink' id="here"><Link to="/">Home</Link></li>
  //   <li className="homeLink"><Link to="/members">Members</Link></li>
  //   <li className="homeLink"><Link to="/robots">Robots</Link></li>
  //   <li><Link to="/portfolio">Engineering Notebook</Link></li>
  //   <li><Link to="/quiz/">Outreach</Link></li>
  //   {/* <li></li> */}
  //   <div>
  //   <button type="button" onClick={toggle}>{currentlyLoggedIn}</button>
  //   <>
  //   {loginNavIsShowing && <LoginDropDown isLoggedIn={isLoggedIn} />}
  //   </>
  //   </div>
  //   {/* <!-- <li><a href="/projects/" class="projectLink">Teams</a></li> --> */}
  // </ul>
  // </nav>
  // <Routes>
  // <Route path="/members" element= { <Members /> }></Route>
  // <Route exact path="/" element= { <MainPage />}></Route>
  // <Route exact path="/login" element= { <LoginForm />}></Route>
  // <Route path="/portfolio" element = { <Portfolio />}></Route>
  // <Route path="/robots" element = { <Robots />}></Route>
  // </Routes>
  // </BrowserRouter>
  // </div>

    
  // );
  // } else {
    // const location = useLocation();

// console.log('hash', location.hash);
// console.log('pathname', location.pathname);
// const location = useLocation()
const { pathname } = window.location;
    return (<div id="top">
    
      <Header className="header-full-width" updateFunc={toggleHiddenNav}/>
      <BrowserRouter>
      
      <nav>
      <div className='nav'>
      {hidden ? <HiddenNavBar closeNav={closeNav}/> : <Empty />}
      <ul className="mainNav">
      {pathname === "/" ? <li className='homeLink' id="active"><Link to="/" onClick={reRender}>Home</Link></li> : <li className='homeLink'><Link to="/" onClick={reRender}>Home</Link></li>}
      
      {pathname === "/robots" ? <li className='homeLink' id="active"><Link to="/robots" onClick={reRender}>Robots</Link></li> : <li className='homeLink'><Link to="/robots" onClick={reRender}>Robots</Link></li>}

      {pathname === "/portfolio" ? <li className='homeLink' id="active"><Link to="/portfolio" onClick={reRender}>Portfolio</Link></li> : <li className='homeLink'><Link to="/portfolio" onClick={reRender}>Portfolio</Link></li>}

      {pathname === "/events" ? <li className='homeLink' id="active"><Link to="/events" onClick={reRender}>Events</Link></li> : <li className='homeLink'><Link to="/events" onClick={reRender}>Events</Link></li>}

      {pathname === "/members" ? <li className='homeLink' id="active"><Link to="/members" onClick={reRender}>Members</Link></li> : <li className='homeLink'><Link to="/members" onClick={reRender}>Members</Link></li>}

      {/* <li id="homepageDrop"><MemberDropDown /></li> */}
      
      {/* <h2>Current Pathname 👉️ {window.location.pathname}</h2> */}
      {/* {loginNavShowing && (
            <>
              {!currentlyLoggedIn && (
                <>
                  <li className="homeLink"><Link to="/login">Log In</Link></li>
                  <li className="homeLink"><Link to="/register">Register</Link></li>
                </>
              )}
              {currentlyLoggedIn && (
                <>
                  <li className="homeLink"><Link to="/login">Log Out</Link></li>
                  <li className="homeLink"><Link to="/settings">Settings</Link></li>
                </>
              )}
            </>
          )} */}

      
      {/* <!-- <li><a href="/projects/" class="projectLink">Teams</a></li> --> */}
    </ul>
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
  
      
    );
  // }
}

export default App;

// export {toggleHiddenNav};