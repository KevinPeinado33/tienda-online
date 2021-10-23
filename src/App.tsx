import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { HomePage } from './components/pages/HomePage';
import { MyPublicationPage } from './components/pages/MyPublicationPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/home' exact component={ HomePage } />
        <Route path='/my-publications' exact component={ MyPublicationPage } />
        
        <Redirect from='/' to='home' />
      </Switch>
    </Router>
  )
}

export default App;