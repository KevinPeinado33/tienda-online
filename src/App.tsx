import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './stateManagement/store';
import { LoginPage } from './components/pages/LoginPage';

import { HomePage } from './components/pages/HomePage';
import { MyPublicationPage } from './components/pages/MyPublicationPage';

import { NavBar } from './components/ui/organisms/NavBar';

const App = () => {
  return (
    <Router>
      <Provider store={ store } >
        <NavBar />
        <Switch>
          <Route path='/home' exact component={ HomePage } />
          <Route path='/my-publications' exact component={ MyPublicationPage } />
          <Route path='/sign-in' exact component={ LoginPage } />
          
          <Redirect from='/' to='/home' />
        </Switch>
      </Provider>
    </Router>
  )
}

export default App;