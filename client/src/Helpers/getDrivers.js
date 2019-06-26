import fetch from 'node-fetch';

function getDrivers() {
  const driverFetch = fetch('/api/drivers');
  const drivers = [];
  driverFetch
    .then(data => {
      return data.json();
    })
    .then(data => {
      drivers.push(data.data);
    });
  console.log(drivers);
  return drivers;
}

export default getDrivers;
