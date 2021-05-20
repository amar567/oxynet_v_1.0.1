import Homepage from './Homepage'
import {Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={"/"} component={Homepage}/>
      {/* <Alert></Alert> */}
      {/* <About></About> */}
      </Router>
    </div>
  )
}

export default App