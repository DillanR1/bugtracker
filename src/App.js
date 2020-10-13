import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Views/Login/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './Views/sidebar/sidebar';
import ViewBugPage from './Views/Pages/viewBugs';

function App() {
  const {auth} = useSelector(state => state)
  return (
    <Router>
    {!auth.LoggedIn ? <Login /> :
      <>
        <Sidebar />
        <Switch>
          <Route path="/viewbugs"><ViewBugPage /></Route>
        </Switch>
        <ViewBugPage />
      </>
    }
    </Router>
  );
}

export default App;
