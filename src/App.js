import Homepage from './Homepage'
// import Example from './example'
import {Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={"/"} component={Homepage}/>
        {/* <Route exact path={"/e"} component={Example}/> */}
      {/* <Alert></Alert> */}
      {/* <About></About> */}
      </Router>
    </div>
  )
}

export default App