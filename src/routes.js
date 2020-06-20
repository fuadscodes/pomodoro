import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./views/Login/index";
// import Registration from "./views/Registration/Registration";
// import Dashboard from "./containers/Dashboard/Dashboard";

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Login} />
            {/*<Route exact path="/registration" component={Registration} />*/}
            {/*<Route exact path="/dashboard" component={Dashboard} />*/}
        </Switch>
    )
};

export default Routes;
