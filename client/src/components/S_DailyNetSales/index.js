
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
  
const data = [
  { x: '1/9/2022', y: 1471.33 },
  { x: '2/9/2022', y: 502.18},
  { x: '3/9/2022', y:  508.89 },
  { x: '4/9/2022', y: 604.63},
  { x: '5/9/2022', y: 1090.72 },
  {x: '6/9/2022', y:  1173.46 },
  {x: '7/9/2022', y: 1140.08},
  {x: '8/9/2022', y: 1292.48},
  {x: '9/9/2022', y: 1119.88},
  {x: '10/9/2022', y: 755.64 },
  {x: '11/9/2022', y: 1115.50 },
  {x: '12/9/2022', y: 235.69 },
  {x: '13/9/2022', y: 1011.27 },
  {x: '14/9/2022', y: 2431.81},
  {x: '15/9/2022', y: 1678.32 },
  {x: '16/9/2022', y: 877.39 },
  {x: '17/9/2022', y: 914.05},
  {x: '18/9/2022', y: 1081.55},
  {x: '19/9/2022', y: 1247.26},
  {x: '20/9/2022', y:  1303.97},
  {x: '21/9/2022', y: 1620.22},
  {x: '22/9/2022', y: 2041.22},
  {x: '23/9/2022', y: 203.75 },
  { x: '24/9/2022', y: 691.39},
  {x: '25/9/2022', y:  210.37},
  {x: '26/9/2022', y: 617.85},
  {x: '27/9/2022', y: 1067.62 },
  {x: '28/9/2022', y:  1281.18},
  {x: '29/9/2022', y: 1500.42},
  {x: '30/9/2022', y: 1177.08 },

];
return (
  
    <Paper>
      <Button variant="contained" style={{colour: '#000000', background: '#000000', marginRight: '30px'}} size='large' onClick= {()=> history.push('/StoresSalesData')}>Back</Button>
    <Typography component="h1" variant="h2" align = 'center'>
      Daily Net Sales
  
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
  
);
}
  
export default App;