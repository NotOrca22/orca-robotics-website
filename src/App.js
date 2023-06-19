import logo from './logo.svg';
import './App.css';
// import Person from './Components/Person';
import Header from './Components/Header';
import { Route, BrowserRouter, Link, Routes } from "react-router-dom";
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
const App = () => {
  // this.state
  const name = "Orca"
  const [ rendered, changeRender ] = useState("")
  const [ loggedIn, toggleLog ] = useState(false) 
  const [ currentUser, changeUser ] = useState("Not Logged In")
  const [ loginNavShowing, toggleLoginNav ] = useState(false)
  const isShowing = true
  const isLoggedIn = loggedIn;
  const currentlyLoggedIn = currentUser;
  const loginNavIsShowing = loginNavShowing
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
    return (<div id="top">
    
      <Header className="header-full-width" />
      <BrowserRouter>
      {/* <button type="button" onClick={toggle}>
                {isLoggedIn ? currentlyLoggedIn : "Not Logged In"}
              </button> */}
      <nav>
      <ul className="mainNav">
      <li className='homeLink' id="here"><Link to="/">Home</Link></li>
      
      <li className="homeLink"><Link to="/robots">Robots</Link></li>
      <li><Link to="/portfolio">Portfolio</Link></li>
      <li><Link to="/events">Events</Link></li>
      <li id="homepageDrop"><MemberDropDown /></li>
      
      
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
    </nav>
    {/* <div className="vertical">
              <button type="button" onClick={toggle}>
                {isLoggedIn ? {currentlyLoggedIn} : "Not Logged In"}
              </button>
              {loginNavShowing && <LoginDropDown isLoggedIn={isLoggedIn} />}
      </div> */}
    <div className='empty-container'>

    </div>
    <div className='content'>
    <Routes>
    <Route path="/members" element= { <Members /> }></Route>
    <Route exact path="/" element= { <MainPage />}></Route>
    <Route exact path="/login" element= { <LoginForm />}></Route>
    <Route path="/portfolio" element = { <Portfolio />}></Route>
    <Route path="/robots" element = { <Robots />}></Route>
    <Route path="/events" element={< PastEvents />}></Route>
    <Route path="/logout" element = { <LogOut />}></Route>
    <Route path="/Chris" element = { <Member name="Chris Wang" intro="I am orca" img={orca}/>}></Route>
    <Route path="/Yixuan" element = { <Member name="Yixuan Li" intro="i do violin" img={Yixuan}/>}></Route>
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
