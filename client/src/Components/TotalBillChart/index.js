import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import './TotalBillChart.css';
import Awards from '../Award/';

import fetch from 'node-fetch';

const colors = [
  '#008FFB',
  '#00E396',
  '#FEB019',
  '#FF4560',
  '#775DD0',
  '#546E7A',
  '#26a69a',
  '#D10CE8',
];

class TotalBillChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          events: {
            click: function(chart, w, e) {
              console.log(chart, w, e);
            },
          },
        },
        colors: colors,
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            'Billed Total',
            'Cash Billed Total',
            'Non-Cash Billed Total',
          ],
          labels: {
            style: {
              colors: colors,
              fontSize: '14px',
            },
          },
        },
      },
      series: [
        {
          data: [21, 22, 10, 28, 16, 21, 13, 30],
        },
      ],
    };
  }

  componentDidMount() {
    fetch('/api/stats')
      .then(data => {
        return data.json();
      })
      .then(data => {
        let figure = [];
        for (let key in data.data) {
          if (
            key === 'billedTotal' ||
            key === 'cashBilledTotal' ||
            key === 'nonCashBilledTotal'
          ) {
            figure.push(data.data[key]);
          }
        }
        this.setState({
          series: [{ data: [...figure] }],
        });
      });
  }
  render() {
    return (
      <div className="totalbill-chart">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="160%"
            />
          </div>
        </div>
        <Awards />
      </div>
    );
  }
}

export default TotalBillChart;
