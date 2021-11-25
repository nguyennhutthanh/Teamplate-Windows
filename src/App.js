import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar, NavBarLink, SystemThemeFollower, TransitionToLeft } from 'react-windows-ui'
import Page0 from './pages/page0'
import Page1 from './pages/page1'
import Page2 from './pages/page2'

const App = () => {
    return (
        <Router basename="react-windows-ui">

          <TransitionToLeft />
          {/*for registering right page transition*/}

          <SystemThemeFollower/>

          <NavBar 
            title="App Boilderplate"
            titleShort={<i className="icons10-windows"></i>}
          //titleShort="R" render text or icons
          //mobileHasIcons={true}
            shadowOnScroll={true}>

            <h1>Pages</h1>
            <div className="app-hr"></div>

            <NavBarLink
              to="/"
              exact={true}
              text="Home"
              icon={<i className="icons10-home"></i>}
            />

            <NavBarLink
              to="/page1"
              text="Page1"
              icon={<i className="icons10-grid-2"></i>}
            />

            <NavBarLink
              to="/page2"
              text="Page2"
              icon={<i className="icons10-columns"></i>}
            />

          </NavBar>

          <Switch>
            <Route path="/" component={Page0}  exact />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
          </Switch>

        </Router>
    )
  }
    
export default App