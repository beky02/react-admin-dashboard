import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import Login from './Screens/Login';
import AdminDashboard from './Screens/Admin';
import UserDashboard from './Screens/User';

const AppWrapper = styled.div`
  background-color: white;
`;

function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={
            () => <Redirect to='/login' />
          } />
          <Route path='/login' component={Login} />
          <Route path='/admin' component={AdminDashboard} />
          <Route path='/user' component={UserDashboard} />

        </Switch></BrowserRouter>

    </AppWrapper>
  );
}

export default App;

