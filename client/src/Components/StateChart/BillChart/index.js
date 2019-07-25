import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';

import './BillChart.css';

import Chart from 'react-apexcharts';

function BillChart(props) {
  const [initialState, setState] = useState({
    colors: ['#fd0', '#E91E63'],
    labels: [],
    series: [],
  });

  useEffect(() => {
    fetch('api/stats')
      .then(data => {
        return data.json();
      })
      .then(data => {
        let labels = [];
        let figure = [];
        for (let key in data.data) {
          if (key === 'noOfCashTrips' || key === 'noOfNonCashTrips') {
            labels.push(key);
            figure.push(data.data[key]);
          }
        }
        setState({
          colors: ['#fd0', '#E91E63'],
          labels: [...labels],
          series: [...figure],
        });
      });
  }, []);

  return (
    <div className="donut billChart">
      <Chart
        options={{}}
        series={initialState.series}
        type="donut"
        width="380"
      />
    </div>
  );
}

export default BillChart;
