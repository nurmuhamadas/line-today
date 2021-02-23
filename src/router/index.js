import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Homepage</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default MainRouter;
