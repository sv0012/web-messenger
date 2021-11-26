import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import LoginPage from './container/LoginPage';
import HomePage from './container/HomePage';
import RegisterPage from './container/RegisterPage';
import PrivateRoute from './components/PrivateRoute';
import { useEffect } from 'react';
import { auth } from 'firebase';
import { isLoggedInUser } from './actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch();
 
  useEffect(() => {
    if(!auth.authenticated){
      dispatch(isLoggedInUser())
    }
    
  }, [])
  return (
    <div className="App">
      <Router>
        
        <Switch>
          <PrivateRoute path="/" exact component={HomePage} />                
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={RegisterPage} />
        </Switch> 
                     
      </Router>
     
    </div>
  );
}

export default App;
