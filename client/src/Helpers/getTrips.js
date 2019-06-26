import fetch from 'node-fetch';

function getTrips() {
  const tripsFetch = fetch('/api/trips');
  const trips = [];
  tripsFetch
    .then(data => {
      return data.json();
    })
    .then(data => {
      trips.push(data.data);
    });
  return trips;
}

export default getTrips;
