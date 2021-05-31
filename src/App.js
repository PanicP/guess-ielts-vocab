import './App.css'
import { Switch, Route, Router } from 'react-router-dom'
// import { ConnectedRouter } from "connected-react-router"
import Home from './components/Home'
import { history } from "./store/index"

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          {/* By using Switch component we're only getting one route rendered at a time */}
          <Route path="/" component={Home} exact />
          {/* <Route path="/quiz" component={Quiz} /> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App
