import React, { useReducer, useRef } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './containers/Home/Home'
import About from './containers/About/About'
import Projects from './containers/Projects/Projects'
import Contact from './containers/Contact/Contact'
import Skills from './containers/Skills/Skills'
import Nav from './components/Nav/Nav'
import Backdrop from './components/Backdrop/Backdrop'

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

  const contactRef = useRef()

  const scrollHandler = () => {
    console.log(contactRef)
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const showMenuHandler = () => {
    dispatch({ type: 'showMenu'})
  }

  return (
    <BrowserRouter>
      <div className="App">
        {state.showMenu ? <Backdrop hideBackdrop={() => dispatch({ type: 'hideMenu'})} /> : null}
        <Nav onMenuClick={showMenuHandler} onContactClick={scrollHandler}/>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact ref={contactRef}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
