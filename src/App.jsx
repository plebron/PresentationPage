import logo from './logo.svg';
import './App.css';

// Imports
import React from 'react'
import { Route } from 'react-router-dom'

// Import Context
import { MyContext } from './context'

// Import pages
//import Home from './pages/Home'
//import Portfolio from './pages/Portfolio'
//import About from './pages/About'

// Import components
//import Header from './components/Header'

function App() {
  return (
    <MyContext.Consumer>
      {(context) => (
        <React.Fragment>
          { /* <Header context={context} /> */}

          { /*<Route exact={true} path="/" component={Home}/>
           <Route path="/portfolio" component={Portfolio}/>
          <Route path="/about" component={About}/> */ }
        </React.Fragment>
      )}
    </MyContext.Consumer>
  );
}

export default App;
