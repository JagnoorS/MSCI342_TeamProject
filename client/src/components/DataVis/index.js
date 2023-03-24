import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { useEffect } from 'react';
// import GasData from 'data\Timmins-2.csv'

const data = [
  { year: '1950', population: 2.525, sales: 1.2},
  { year: '1960', population: 3.018, sales: 1.2},
  { year: '1970', population: 3.682, sales: 1.2},
  { year: '1980', population: 4.440, sales: 1.2},
  { year: '1990', population: 5.310, sales: 1.2},
  { year: '2000', population: 6.127, sales: 1.2},
  { year: '2010', population: 6.930, sales: 1.6},
];


export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="population"
            argumentField="year"
          />
          <Title text="World population" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
