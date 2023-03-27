
import React from "react";
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  Title,
  
} from '@devexpress/dx-react-chart-material-ui';
import { Grid, Typography } from "@mui/material";
import { Animation } from "@devexpress/dx-react-chart";
import { Palette } from '@devexpress/dx-react-chart';
import { Tooltip } from '@devexpress/dx-react-chart-material-ui';
import history from "../Navigation/history"
import Button from '@mui/material/Button';

const App = () => {
  const style={
    backgroundImage:"url(https://wallpaper.dog/large/17056599.jpg)",
    height: '93.1vh',
    marginTop:'0px',
    fontsize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}
  
const data = [
  { x: '1/9/2022', y: 6955.826 },
  { x: '2/9/2022', y: 2291.723 },
  { x: '3/9/2022', y: 1783.871},
  { x: '4/9/2022', y: 2711.233 },
  { x: '5/9/2022', y: 5343.402 },
  {x: '6/9/2022', y: 5615.695},
  {x: '7/9/2022', y: 5412.622},
  {x: '8/9/2022', y: 5163.474},
  {x: '9/9/2022', y: 3883.763},
  {x: '10/9/2022', y: 3362.441},
  {x: '11/9/2022', y: 4816.887},
  {x: '12/9/2022', y: 890.008},
  {x: '13/9/2022', y: 4417.152},
  {x: '14/9/2022', y: 11649.364},
  {x: '15/9/2022', y: 6279.964},
  {x: '16/9/2022', y: 3574.923},
  {x: '17/9/2022', y: 3330.649},
  {x: '18/9/2022', y: 4352.668},
  {x: '19/9/2022', y: 4878.895},
  {x: '20/9/2022', y: 4911.572},
  {x: '21/9/2022', y: 6366.495},
  {x: '22/9/2022', y: 7270.002},
  {x: '23/9/2022', y: 2254.842},
  { x: '24/9/2022', y: 799.105},
  {x: '25/9/2022', y: 2286.267},
  {x: '26/9/2022', y: 4041.56},
  {x: '27/9/2022', y: 5046.963},
  {x: '28/9/2022', y: 5455.457},
  {x: '29/9/2022', y: 7057.794},
  {x: '30/9/2022', y: 7276.441},

];
return (
  <div style={style}>
    <Paper>
    <Typography component="h1" variant="h2" align = 'center'>
      Regular Sales
      </Typography>
    <Chart
      data={data}
    >
      {/* <Palette scheme="Ocean"/> */}
      <ArgumentAxis />
      <ValueAxis/>
      
  
      <LineSeries valueField="y" argumentField="x" color = 'red'/>
      <Animation/>
      

    </Chart>

  </Paper>
  </div>
  
);
}
  
export default App;