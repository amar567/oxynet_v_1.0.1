import Homepage from './Homepage'
import About from './About'
// import Example from './example'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Wholecontact from './Components/ContactUs/Wholecontact';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={"/covinet/"} component={Homepage}/>
        <Route exact path={"/covinet/about"} component={About}/>
        <Route exact path={"/covinet/team"} component={Wholecontact}/>
      </Router>
    </div>
  )
}

export default App