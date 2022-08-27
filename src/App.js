import logo from './logo.svg';
import './App.css';
import Person from './Components/Person';
import Header from './Components/Header';
import { Route, BrowserRouter, Link, Routes } from "react-router-dom";
import Members from "./Components/Members"
import beluga from "./beluga.png";
import { useState } from "react";
import MainPage from './Components/MainPage';

const App = () => {
  // this.state
  const name = "Orca"
  const [ rendered, changeRender ] = useState("")
  const isShowing = true
  return (<div>
    <Header />
    <BrowserRouter>
    <nav>
    <ul className="mainNav">
    <li><Link to="/" className="homeLink" id="here" />Home</li>
    <li><Link to="/members" className="featureLink" />Members</li>
    <li><Link to="/notebook" className="expertLink" />Engineering Notebook</li>
    <li><Link to="/quiz/" className="quizLink" />Outreach</li>
    {/* <!-- <li><a href="/projects/" class="projectLink">Teams</a></li> --> */}
  </ul>
  </nav>
  <Routes>
  <Route path="/members" element= { <Members /> }></Route>
  <Route exact path="/" element= { <MainPage />}></Route>
  </Routes>
  </BrowserRouter>
  </div>

    
  );
}

export default App;
