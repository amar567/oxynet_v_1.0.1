import Homepage from './Homepage'
import About from './About'
// import Example from './example'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Wholecontact from './Components/ContactUs/Wholecontact';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={"/"} component={Homepage}/>
        <Route exact path={"/about"} component={About}/>
        <Route exact path={"/team"} component={Wholecontact}/>
      </Router>
    </div>
  )
}

export default App