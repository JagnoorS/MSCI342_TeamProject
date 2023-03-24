
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
  { x: '1/9/2022', y: 14588.03 },
  { x: '2/9/2022', y: 5199.42 },
  { x: '3/9/2022', y:  4437.28 },
  { x: '4/9/2022', y:  6430.59  },
  { x: '5/9/2022', y: 10974.91 },
  {x: '6/9/2022', y:  12168.28 },
  {x: '7/9/2022', y:  11174.68 },
  {x: '8/9/2022', y: 12233.84 },
  {x: '9/9/2022', y:  8514.27 },
  {x: '10/9/2022', y:  6521.43 },
  {x: '11/9/2022', y: 9678.45 },
  {x: '12/9/2022', y:  2231.64 },
  {x: '13/9/2022', y:  8632.28 },
  {x: '14/9/2022', y:  24723.50},
  {x: '15/9/2022', y:  23474.00 },
  {x: '16/9/2022', y:  7252.59 },
  {x: '17/9/2022', y:  7087.43 },
  {x: '18/9/2022', y:  8364.54 },
  {x: '19/9/2022', y:  9706.55 },
  {x: '20/9/2022', y:  9382.89 },
  {x: '21/9/2022', y:  13418.29 },
  {x: '22/9/2022', y:  15976.15 },
  {x: '23/9/2022', y:  4400.40 },
  { x: '24/9/2022', y: 1414.97 },
  {x: '25/9/2022', y:  4870.46 },
  {x: '26/9/2022', y:  8452.61 },
  {x: '27/9/2022', y:  10783.50 },
  {x: '28/9/2022', y: 11522.27 },
  {x: '29/9/2022', y:  14114.84 },
  {x: '30/9/2022', y:  13984.91 },

];
return (
  
    <Paper>
       <Button variant="contained" style={{colour: '#000000', background: '#000000', marginRight: '30px'}} size='large' onClick= {()=> history.push('/GasDataLanding')}>Back</Button>
    <Typography component="h1" variant="h2" align = 'center'>
      Total Gross Gas Sales
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