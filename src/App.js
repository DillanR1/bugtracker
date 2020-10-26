import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Views/Components/Pages/Login/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './Views/sidebar/sidebar';
import Dashboard from './Views/Components/Dashboard/dashboard';
import ViewBugPage from './Views/Components/Pages/viewBugs';
import CreateBug from './Views/Components/Bug Create / edit/bugFrom';

function App() {
  const {auth} = useSelector(state => state)
  return (
    <Router>
      {!auth.LoggedIn ? <Login /> :
        <>
          <Sidebar />
          <Switch>
            <Route path="/" exact ><Dashboard /></Route>
            <Route path="/viewbugs"><ViewBugPage /></Route>
            <Router path="/create"><div className='page-container'><CreateBug title="Create Bug" /></div>
            </Router>
          </Switch>
        </>
      }
    </Router>
  );
}

export default App;
