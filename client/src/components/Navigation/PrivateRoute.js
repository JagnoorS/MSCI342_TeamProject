import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from '../Home';
import history from './history';
import Landing from "../Landing"
import ManagerLanding from "../ManagerLanding"
import EmployeeLanding from "../EmployeeLanding"
import M_EmployeeLoggedHours from "../M_EmployeeLoggedHours"

export default function PrivateRoute({
  //authenticated,
  //...rest
}) {
  return (
    
    <Router history={history}>
      <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/ManagerLanding" exact component={ManagerLanding} />
      <Route path="/EmployeeLanding" exact component={EmployeeLanding} />
      <Route path="/M_EmployeeLoggedHours" exact component={M_EmployeeLoggedHours} />
      </Switch>
    </Router>
  );
}