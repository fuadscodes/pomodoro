import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from './views/Login/index';
import Registration from "./views/Registration/index";
import Dashboard from "./views/Dashboard/index";

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Registration} />
            <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
    )
};

export default Routes;
