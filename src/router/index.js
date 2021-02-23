import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ButtonIcon from '../components/atoms/ButtonIcon';

const MainRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <ButtonIcon
          icon="heart"
          label="Love button"
          type="outlined"
        />
      </Route>
    </Switch>
  </Router>
);

export default MainRouter;
