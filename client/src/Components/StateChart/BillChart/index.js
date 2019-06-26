import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';

import './BillChart.css';

import Chart from 'react-apexcharts';

function BillChart(props) {
  const [initialState, setState] = useState({
    colors: ['#fd0', '#E91E63'],
    series: [],
    labels: [],
  });
  const [optionsState, setOptionsState] = useState({
    options: {},
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
          console.log(labels);
          setState({
            colors: ['#fd0', '#E91E63'],
            series: [...figure],
            labels: [...labels],
          });
          console.log({ setState });
        }
      });
  }, []);

  return (
    <div className="donut">
      <Chart
        options={optionsState.options}
        series={initialState.series}
        type="donut"
        width="380"
      />
    </div>
  );
}

export default BillChart;
