import React, { useReducer, useRef } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav/Nav'
import Backdrop from './components/Backdrop/Backdrop'

import Home from './containers/Home/Home'
import About from './containers/About/About'
import Projects from './containers/Projects/Projects'
import Experience from './containers/Experience/Experience'
import Interests from './containers/Interests/Interests'
import Contact from './containers/Contact/Contact'
import Skills from './containers/Skills/Skills'

import Tetris from './containers/Projects/Tetris/Tetris'
import CircuitMapper from './containers/Projects/CircuitMapper/CircuitMapper'
import Derive from './containers/Projects/Derive/Derive'
import StreetShare from './containers/Projects/StreetShare/StreetShare'


const reducer = (state, action) => {
  switch(action.type){
    case 'showMenu': {
      return { showMenu: true }
    }
    case 'hideMenu': {
      return { showMenu: false }
    }
    default: {
      return state
    }
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, { showMenu: false })

  const homeRef = useRef()
  const aboutRef = useRef()
  const projectsRef = useRef()
  const skillsRef = useRef()
  const experienceRef = useRef()
  const interestsRef = useRef()
  const contactRef = useRef()

  const scrollHandler = (reference) => {
    setTimeout(() => {
      reference.current.scrollIntoView({ behavior: 'smooth' })
    }, 50);
  }

  const showMenuHandler = () => {
    dispatch({ type: 'showMenu'})
  }

  return (
    <BrowserRouter>
      <div className="App">
        {state.showMenu ? 
          <Backdrop 
            hideBackdrop={() => {
              dispatch({ type: 'hideMenu'})
            }} 
            onMenuClick={scrollHandler}
            homeRef={homeRef}
            aboutRef={aboutRef}
            projectsRef={projectsRef}
            skillsRef={skillsRef}
            experienceRef={experienceRef}
            interestsRef={interestsRef}
            contactRef={contactRef}
            /> 
            : null}
        <Nav 
          onMenuClick={showMenuHandler} 
          onContactClick={scrollHandler} 
          contactRef={contactRef}
          />
        <Switch>
          <Route exact path='/'>
            <Home ref={homeRef}/>
            <About ref={aboutRef}/>
            <Projects ref={projectsRef}/>
            <Skills ref={skillsRef}/>
            <Experience ref={experienceRef}/>
            <Interests ref={interestsRef}/>
            <Contact ref={contactRef}/>
          </Route>
          <Route exact path='/tetris'>
            <Tetris 
              onContactClick={scrollHandler} 
              contactRef={contactRef}
            />
          </Route>
          <Route exact path='/circuit-mapper'>
            <CircuitMapper 
              onContactClick={scrollHandler} 
              contactRef={contactRef}
            />
          </Route>
          <Route exact path='/derive'>
            <Derive 
              onContactClick={scrollHandler} 
              contactRef={contactRef}
            />
          </Route>
          <Route exact path='/street-share'>
            <StreetShare 
              onContactClick={scrollHandler} 
              contactRef={contactRef}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
