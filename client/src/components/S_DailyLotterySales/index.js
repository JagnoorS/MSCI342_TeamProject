
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
  { x: '1/9/2022', y: 425.00 },
  { x: '2/9/2022', y: 261.01},
  { x: '3/9/2022', y:  282.01 },
  { x: '4/9/2022', y: 307.01},
  { x: '5/9/2022', y: 366.00 },
  {x: '6/9/2022', y:  283.01 },
  {x: '7/9/2022', y: 542.03},
  {x: '8/9/2022', y: 421.00},
  {x: '9/9/2022', y:  682.06},
  {x: '10/9/2022', y: 146.01 },
  {x: '11/9/2022', y: 509.01 },
  {x: '12/9/2022', y: 947.64 },
  {x: '13/9/2022', y: 193.77 },
  {x: '14/9/2022', y: 926.00},
  {x: '15/9/2022', y: 617.00 },
  {x: '16/9/2022', y: 343.00 },
  {x: '17/9/2022', y: 397.01},
  {x: '18/9/2022', y:  364.01},
  {x: '19/9/2022', y:  519.01 },
  {x: '20/9/2022', y:  531.01},
  {x: '21/9/2022', y:  487.63},
  {x: '22/9/2022', y: 157.57},
  {x: '23/9/2022', y:  563.01 },
  { x: '24/9/2022', y: 769.00},
  {x: '25/9/2022', y:  169.00},
  {x: '26/9/2022', y: 17.01},
  {x: '27/9/2022', y: 281.01 },
  {x: '28/9/2022', y:  587.33},
  {x: '29/9/2022', y:  542.02},
  {x: '30/9/2022', y: 801.00 },

];
return (
  <div style={style}>
    <Paper>
    <Typography component="h1" variant="h2" align = 'center'>
      Daily Lottery Sales
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