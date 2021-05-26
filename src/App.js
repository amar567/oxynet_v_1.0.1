import Homepage from './Homepage'
import About from './About'
// import Example from './example'
import {Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={"/"} component={Homepage}/>
        <Route exact path={"/about"} component={About}/>
        {/* <Route exact path={"/e"} component={Example}/> */}
      {/* <Alert></Alert> */}
      {/* <About></About> */}
      </Router>
    </div>
  )
}

export default App