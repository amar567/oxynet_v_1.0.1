import Homepage from './Homepage'
import About from './About'
import Wholecontact from './Components/ContactUs/Wholecontact'
// import Example from './example'
import {Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={"/"} component={Homepage}/>
        <Route exact path={"/about"} component={About}/>
        <Route exact path={"/team"} component={Wholecontact}/>
        {/* <Route exact path={"/e"} component={Example}/> */}
      {/* <Alert></Alert> */}
      {/* <About></About> */}
      </Router>
    </div>
  )
}

export default App