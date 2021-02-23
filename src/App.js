import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Homepage</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
