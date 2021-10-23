import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { Provider } from 'react-redux';

import { HomePage } from './components/pages/HomePage';
import { MyPublicationPage } from './components/pages/MyPublicationPage';

import store from './stateManagement/store';

const App = () => {
  return (
    <Router>
      <Provider store={ store }>
        <Switch>
          <Route path='/home' exact component={ HomePage } />
          <Route path='/my-publications' exact component={ MyPublicationPage } />
          
          <Redirect from='/' to='home' />
        </Switch>
      </Provider>
    </Router>
  )
}

export default App;