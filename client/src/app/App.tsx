import React, { useContext } from 'react';
import {Redirect, Route, RouteComponentProps, Switch, withRouter} from 'react-router-dom';
import Welcome from '../pages/Welcome/Welcome';
import LoginPage from "../pages/User/Login";
import NsOverview from "../pages/Namespace/NsOverview";
import SimpleLayout from "../layouts/SimpleLayout";
import NsLayout from "../layouts/NsLayout";
import NsUnit from "../pages/Namespace/NsUnit";
import NsFunc from "../pages/Namespace/NsFunc";
import { RootStoreContext } from "../shared/stores/rootStore";
import {observer} from "mobx-react";

const App:React.FC<RouteComponentProps> = ({location}) => {
    const rootStore = useContext(RootStoreContext);

    return (
        <div>
            <Switch>
                <Route path='/welcome'>
                    <SimpleLayout> <Welcome/> </SimpleLayout>
                </Route>
                <Route path='/login'>
                    <SimpleLayout> <LoginPage/> </SimpleLayout>
                </Route>
                <Route path='/ns/:path?'>
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

export default withRouter(observer(App));
