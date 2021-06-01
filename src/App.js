import './App.css'
import { Switch, Route, Router } from 'react-router-dom'
// import { ConnectedRouter } from "connected-react-router"
import HomePage from './components/HomePage'
import { history } from "./store/index"
import ChoicesPage from './components/ChoicesPage'

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          {/* By using Switch component we're only getting one route rendered at a time */}
          <Route path="/" component={HomePage} exact />
          <Route path="/choices" component={ChoicesPage} />
          {/* <Route path="/guess" component={GuessPage} /> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App
