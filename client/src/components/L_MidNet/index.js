
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
  { x: '1/9/2022', y: 49.45 },
  { x: '2/9/2022', y: 15.56},
  { x: '3/9/2022', y:  23.82 },
  { x: '4/9/2022', y:  8.47},
  { x: '5/9/2022', y: 2.56 },
  {x: '6/9/2022', y:  6.00 },
  {x: '7/9/2022', y:  5.62 },
  {x: '8/9/2022', y: 86.44 },
  {x: '9/9/2022', y:  28.00 },
  {x: '10/9/2022', y:  25.11 },
  {x: '11/9/2022', y: 3.69 },
  {x: '12/9/2022', y:  4.72 },
  {x: '13/9/2022', y:  15.29 },
  {x: '14/9/2022', y:  30.05},
  {x: '15/9/2022', y:  3.09 },
  {x: '16/9/2022', y:10.95 },
  {x: '17/9/2022', y:  83.77},
  {x: '18/9/2022', y:  20.54 },
  {x: '19/9/2022', y:  31.15 },
  {x: '20/9/2022', y:  5.54},
  {x: '21/9/2022', y:  32.75},
  {x: '22/9/2022', y: 21.56},
  {x: '23/9/2022', y:  1.79 },
  { x: '24/9/2022', y: 0.00 },
  {x: '25/9/2022', y:  3.41},
  {x: '26/9/2022', y:  8.35 },
  {x: '27/9/2022', y: 22.12 },
  {x: '28/9/2022', y:  30.68},
  {x: '29/9/2022', y:  26.78},
  {x: '30/9/2022', y: 6.15 },

];
return (
  
    <Paper>
       <Button variant="contained" style={{colour: '#000000', background: '#000000', marginRight: '30px'}} size='large' onClick= {()=> history.push('/GasDataLanding')}>Back</Button>
    <Typography component="h1" variant="h2" align = 'center'>
      Mid Net Sales
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