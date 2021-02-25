import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { HomePage } from '../components/pages';

const MainRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/tab/:tab">
        <HomePage />
      </Route>
    </Switch>
  </Router>
);

export default MainRouter;
