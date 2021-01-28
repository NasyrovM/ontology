import React from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import Welcome from '../pages/Welcome/Welcome';
import LoginPage from "../pages/User/Login";
import NsOverview from "../pages/Namespace/NsOverview";
import SimpleLayout from "../layouts/SimpleLayout";
import NsLayout from "../layouts/NsLayout";
import NsUnit from "../pages/Namespace/NsUnit";
import NsFunc from "../pages/Namespace/NsFunc";

interface IProps {
    history: any
}

const App:React.FC<IProps> = ({history}) => {
  return (
      <div>
        <Switch>
          <Route history={history} path='/welcome'>
              <SimpleLayout> <Welcome/> </SimpleLayout>
          </Route>
          <Route history={history} path='/login'>
              <SimpleLayout> <LoginPage/> </SimpleLayout>
          </Route>
          <Route history={history} path='/ns/:path?'>
              <NsLayout>
                  <Route path='/ns/overview' component={NsOverview}/>
                  <Route path='/ns/unit' component={NsUnit}/>
                  <Route path='/ns/func' component={NsFunc}/>
              </NsLayout>
          </Route>
          <Redirect from='/' to='/welcome'/>
        </Switch>
      </div>
  );
};

export default withRouter(App);
