import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Veikali from "./components/Veikali"
import Razotaji from "./components/Razotaji"
import Produkti from "./components/Produkti"
import Home from './components/Home'


  



function App() {
  

  return (
    <Router>
      <div style={{background: '#95AD6F'}}><Header /></div>
        
          <Switch>
          <Route path="/Home" component={ Home } />
                <Route path="/Veikali" component={ Veikali } />
                <Route path="/Razotaji" component={ Razotaji } />
                <Route path="/Produkti" component={ Produkti } />
          </Switch>
          <Footer/>
    </Router>
  );
}

export default App;
