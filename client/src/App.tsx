import React from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import Welcome from './Pages/Welcome/Welcome';
import LoginPage from "./Pages/User/Login";
import NsOverview from "./Pages/Namespace/NsOverview";

interface IProps {
    history: any
}

const App:React.FC<IProps> = ({history}) => {
  return (
      <div>
        <Switch>
          <Route history={history} path='/welcome' component={Welcome}/>
          <Route history={history} path='/login' component={LoginPage}/>
          <Route history={history} path='/ns/overview' component={NsOverview}/>
          <Redirect from='/' to='/welcome'/>
        </Switch>
      </div>
  );
};

export default withRouter(App);
