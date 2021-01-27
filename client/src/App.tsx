import React from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import Welcome from './Pages/Welcome/Welcome';
import LoginPage from "./Pages/User/Login";
import NsOverview from "./Pages/Namespace/NsOverview";
import SimpleLayout from "./Layouts/SimpleLayout";
import NsLayout from "./Layouts/NsLayout";
import NsUnit from "./Pages/Namespace/NsUnit";
import NsFunc from "./Pages/Namespace/NsFunc";

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
