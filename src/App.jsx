import logo from './logo.svg';
import './App.css';

// Imports
import React from 'react'
import { Route, Routes  } from 'react-router-dom'

// Import Context
import { MyContext } from './context'

// Import pages
import Home from './app/pages/Home'
import Portfolio from './app/pages/Portfolio'
import About from './app/pages/About'

// Import components
import Header from './app/components/header'

function App() {
  return (
      <MyContext.Consumer>
        {(context) => (
          <div className="App">
            <Header context={context} />
            <Routes>
              <Route exact={true} path="/" element={ <Home/> } />
              <Route path="/portfolio" element={ <Portfolio/> }/>
              <Route path="/about" element={ <About/> } />
            </Routes>            
          </div>
        )}
      </MyContext.Consumer>
  );
}

export default App;