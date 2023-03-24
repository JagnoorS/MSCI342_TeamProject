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
import EmployeeChecklist from '../EmployeeChecklist'
import E_TimeOff from '../E_TimeOff'
import SignUp from "../SignUp";
import signIn from "../SignIn";
import { AuthProvider, useAuth } from '../Firebase/context';


const serverURL = ""

export default function PrivateRoute({
  //authenticated,
  //...rest
}) {

  const { currentUser } = useAuth()

  const [role, getrole] = React.useState()
  

  const getRole = () => {
    callApigetRole()
      .then(res => {
        console.log("callApigetRole returned: ", res)
        var parsed = JSON.parse(res.express);
        console.log("callApigetRole parsed: ", parsed);
        getrole(parsed[0].role);
      })
  }

  React.useEffect(() => {
    getRole();
  }, [currentUser]);

  console.log(role)

  const callApigetRole = async () => {
    const url = serverURL + "/api/getRole";
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      headers:{
        'Content-Type':"application/json"
      },
      body: JSON.stringify({
        userEmail: currentUser.email,
      })
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }
  return (
    <AuthProvider>
    <Router history={history}>
      <NavBar/>
      <Switch>
      <Route path="/" exact component={Landing} />
      {role === "Manager" && <Route path="/ManagerLanding" exact component={ManagerLanding} />}
      {role === "Employee" &&  <Route path="/EmployeeLanding" exact component={EmployeeLanding} />}
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
      <Route path="/EmployeeChecklist" exact component={EmployeeChecklist} />
      <Route path="/TimeOff" exact component={E_TimeOff} />
      <Route path="/SignUp" exact component={SignUp} />
      <Route path="/SignIn" exact component={signIn} />
      </Switch>
    </Router>
    </AuthProvider>
  );
}

