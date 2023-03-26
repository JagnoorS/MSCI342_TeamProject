
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
  { x: '1/9/2022', y: 1462.93 },
  { x: '2/9/2022', y: 409.74},
  { x: '3/9/2022', y:  413.51 },
  { x: '4/9/2022', y: 441.74},
  { x: '5/9/2022', y: 1011.46 },
  {x: '6/9/2022', y:  1183.52},
  {x: '7/9/2022', y:1555.99},
  {x: '8/9/2022', y: 596.41},
  {x: '9/9/2022', y: 390.78},
  {x: '10/9/2022', y: 729.80 },
  {x: '11/9/2022', y:182.25 },
  {x: '12/9/2022', y: 1232.72 },
  {x: '13/9/2022', y: 1868.95 },
  {x: '14/9/2022', y: 1777.86},
  {x: '15/9/2022', y: 725.13 },
  {x: '16/9/2022', y: 582.72 },
  {x: '17/9/2022', y: 914.05},
  {x: '18/9/2022', y: 723.45},
  {x: '19/9/2022', y: 843.87},
  {x: '20/9/2022', y:  1220.26},
  {x: '21/9/2022', y: 744.00},
  {x: '22/9/2022', y: 1388.62},
  {x: '23/9/2022', y: 203.75 },
  { x: '24/9/2022', y: 885.89},
  {x: '25/9/2022', y:  229.54},
  {x: '26/9/2022', y: 406.34},
  {x: '27/9/2022', y: 729.57 },
  {x: '28/9/2022', y: 626.99},
  {x: '29/9/2022', y: 1074.33},
  {x: '30/9/2022', y: 982.63 },









];
return (
  
    <Paper>
    <Typography component="h1" variant="h2" align = 'center'>
      Daily Store Sales
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