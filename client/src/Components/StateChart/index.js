import React from 'react';
import './StateChart.css';

import GenderChart from './GenderChart';
import BillChart from './BillChart';
function StateChart() {
  return (
    <div className="chart-display">
      <GenderChart />
      <BillChart />
    </div>
  );
}

export default StateChart;
