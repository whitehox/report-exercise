import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';

import './GenderChart.css';

import Chart from 'react-apexcharts';

function GenderChart(props) {
  const [initialState, setState] = useState({
    series: [],
    labels: [],
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
          if (key === 'male' || key === 'female') {
            labels.push(key);
            figure.push(data.data[key]);
          }
        }
        setState({
          series: [...figure],
          labels: [...labels],
        });
      });
  }, []);

  return (
    <div className="donut">
      <Chart
        options={{}}
        series={initialState.series}
        type="donut"
        width="380"
      />
    </div>
  );
}

export default GenderChart;
