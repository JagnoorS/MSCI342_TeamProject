import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from '../Home';
import history from './history';
import Landing from "../Landing"
import ManagerLanding from "../ManagerLanding"
import EmployeeLanding from "../EmployeeLanding"
import M_EmployeeLoggedHours from "../M_EmployeeLoggedHours"
import E_LogEmployeeHours from "../E_LogEmployeeHours"
import CustomerLanding from "../CustomerLanding"
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
import DataVis from '../DataVis'
import L_RegularSales from '../L_RegularSales'
import GraphLanding from "../GraphLanding";
import GasDataLanding from "../GasDataLanding"
import StoresSalesData from "../StoreSalesData"
import L_TotalNet from "../L_TotalNet"
import L_TotalGross from "../L_TotalGross"
import L_SuperNet from "../L_SuperNet"
import L_RegularNet from "../L_RegularNet"
import L_MidNet from "../L_MidNet"
import L_DieselNet from "../L_DieselNet"
import S_DailyLotterySales from '../S_DailyLotterySales'
import S_DailyNetSales from '../S_DailyNetSales'
import S_DailyStoreSales from '../S_DailyStoreSales'  
import S_NetCreditCard from '../S_NetCreditCard'
import S_NetStoreSales from '../S_NetStoreSales'  

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
      <Route path="/CustomerLanding" exact component={CustomerLanding} />
      <Route path="/EmployeeAvailability" exact component={EmployeeAvailability} />
      <Route path="/ManagerChecklist" exact component={ManagerChecklist} />
      <Route path="/M_Announcements" exact component={M_Announcements} />
      <Route path="/CustomerFeedback" exact component={CustomerFeedback} />
      <Route path="/EmployeeChecklist" exact component={EmployeeChecklist} />
      <Route path="/TimeOff" exact component={E_TimeOff} />
      <Route path="/DV" exact component={DataVis} />
      <Route path="/L_RegularSales" exact component={L_RegularSales} />
      <Route path="/GraphLanding" exact component={GraphLanding} />
      <Route path="/StoresSalesData" exact component={StoresSalesData} />
      <Route path="/GasDataLanding" exact component={GasDataLanding} />
      <Route path="/L_TotalNet" exact component={L_TotalNet} />
      <Route path="/L_TotalGross" exact component={L_TotalGross} />
      <Route path="/L_SuperNet" exact component={L_SuperNet} />
      <Route path="/L_RegularNet" exact component={L_RegularNet} />
      <Route path="/L_MidNet" exact component={L_MidNet} />
      <Route path="/L_DieselNet" exact component={L_DieselNet} />
      <Route path="/S_DailyLotterySales" exact component={S_DailyLotterySales} />
      <Route path="/S_DailyNetSales" exact component={S_DailyNetSales} />
      <Route path="/S_DailyStoreSales" exact component={S_DailyStoreSales} />
      <Route path="/S_NetCreditCard" exact component={S_NetCreditCard}/>
      <Route path="/S_NetStoreSales" exact component={S_NetStoreSales} />

 

      
      </Switch>
    </Router>
  );
}

