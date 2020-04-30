import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Style';
import { theme } from './Theme';

import Navbar from './components/Navbar';
import Burger from './components/Burger';
import Menu from './components/Menu';
import Home from './contents/Home';
import About from './contents/About';
import Experience from './contents/Experience';
import SkillsView from './contents/SkillsView';
import Contact from './contents/Contact';
import Hobby from './contents/Hobby';
import Projects from './contents/Projects';


function App() {

  const [open, setOpen] = useState(false);

  return (

    <Router>
        <ThemeProvider theme={theme}/>
        <GlobalStyles />

          <div className="App">
            <Navbar />

            <Route exact path="/react_portfolio">
              <Home />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/experiences">
              <Experience />
            </Route>

            <Route exact path="/skills">
              <SkillsView />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>

            <Route exact path="/hobby">
              <Hobby />
            </Route>

            <Route exact path="/projects">
              <Projects />
            </Route>
          </div>

          <div>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>

    </Router>

    );
  }

export default App;



{/* <Route> is the subtag of <Router> or <BrowserRouter>,
with <Route> we decide what content has to be rendered based on the path/URL.
--> “exact” attribute is used when we have multiple identical paths.*/}