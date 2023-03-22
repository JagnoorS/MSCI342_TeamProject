import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from '../Home';
import history from './history';
import Landing from "../Landing"
import ManagerLanding from "../ManagerLanding"
import EmployeeLanding from "../EmployeeLanding"
import M_EmployeeLoggedHours from "../M_EmployeeLoggedHours"
import E_LogEmployeeHours from "../E_LogEmployeeHours"
import CustomerLadning from "../CustomerLanding"
import NavBar from "../NavBar"
import SalesEntry from "../SalesEntry";
import NonEmployeePage from "../NonEmployeePage";
import AppTest from "../Application";
import Help from "../Help";
import EmployeeAvailability from "../EmployeeAvailability";
import ManagerChecklist from "../ManagerChecklist";
import M_Announcements from "../M_Announcements"
import CustomerFeedback from '../CustomerFeedback'
import E_TimeOff from '../E_TimeOff'



export default function PrivateRoute({
  //authenticated,
  //...rest
}) {
  return (
    
    <Router history={history}>
      <NavBar/>
      <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/ManagerLanding" exact component={ManagerLanding} />
      <Route path="/EmployeeLanding" exact component={EmployeeLanding} />
      <Route path="/M_EmployeeLoggedHours" exact component={M_EmployeeLoggedHours} />
      <Route path="/E_LogEmployeeHours" exact component={E_LogEmployeeHours} />
      <Route path="/SalesEntry" exact component={SalesEntry} />
      <Route path="/NonEmployeePage" exact component={NonEmployeePage} />
      <Route path="/Application" exact component={AppTest} />
      <Route path="/Help" exact component={Help} />
      <Route path="/CustomerLanding" exact component={CustomerLadning} />
      <Route path="/EmployeeAvailability" exact component={EmployeeAvailability} />
      <Route path="/ManagerChecklist" exact component={ManagerChecklist} />
      <Route path="/M_Announcements" exact component={M_Announcements} />
      <Route path="/CustomerFeedback" exact component={CustomerFeedback} />
      <Route path="/TimeOff" exact component={E_TimeOff} />
      </Switch>
    </Router>
  );
}

