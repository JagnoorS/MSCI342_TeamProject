
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
  { x: '1/9/2022', y: 55.92  },
  { x: '2/9/2022', y: 53.26 },
  { x: '3/9/2022', y:  38.47 },
  { x: '4/9/2022', y:  143.65 },
  { x: '5/9/2022', y: 116.22 },
  {x: '6/9/2022', y:  125.69 },
  {x: '7/9/2022', y:  51.45 },
  {x: '8/9/2022', y: 5.90 },
  {x: '9/9/2022', y:  105.85 },
  {x: '10/9/2022', y:  52.52 },
  {x: '11/9/2022', y: 76.46 },
  {x: '12/9/2022', y:  44.27 },
  {x: '13/9/2022', y:  37.21 },
  {x: '14/9/2022', y:  37.21},
  {x: '15/9/2022', y:  42.47 },
  {x: '16/9/2022', y:  12.99 },
  {x: '17/9/2022', y:  92.82 },
  {x: '18/9/2022', y:  128.80 },
  {x: '19/9/2022', y:  140.16 },
  {x: '20/9/2022', y:  63.43 },
  {x: '21/9/2022', y:  110.90 },
  {x: '22/9/2022', y:  40.93 },
  {x: '23/9/2022', y:  77.24 },
  { x: '24/9/2022', y: 60.12 },
  {x: '25/9/2022', y:  29.85},
  {x: '26/9/2022', y:  83.89 },
  {x: '27/9/2022', y:  113.99 },
  {x: '28/9/2022', y:  77.29},
  {x: '29/9/2022', y:  67.34 },
  {x: '30/9/2022', y:  80.04 },

];
return (
  <div style={style}>
    <Paper>
    <Typography component="h1" variant="h2" align = 'center'>
      Super Net
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