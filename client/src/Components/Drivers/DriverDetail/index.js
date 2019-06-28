import React, { useState, useEffect } from 'react';
import getDrivers from '../../../Helpers/getDrivers';

function DriverDetail() {
  const url = window.location.href.split('/');
  const last = url.length - 1;
  const urlPattern = /([\d\w]*[-]).*/g;
  const id = url[last];

  const [driverState, setDriverState] = useState([]);

  console.log(id);

  return <p>Details</p>;
}

export default DriverDetail;
