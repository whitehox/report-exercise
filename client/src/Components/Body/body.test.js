import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Body from './index';

afterEach(cleanup);

describe('Body Components', () => {
  test('Should check if search bar mounts', () => {
    const { container } = render(<Body />);
    const searchBar = container.querySelector('.search-bar');

    expect(searchBar).toBeTruthy();
  });

  test('Should check if chart container mounts', () => {
    const { container } = render(<Body />);
    const chartBar = container.querySelector('.chart-display');

    expect(chartBar).toBeTruthy();
  });

  test('Should check if total bill chart container mounts', () => {
    const { container } = render(<Body />);
    const billChartContainer = container.querySelector('.totalbill-chart');

    expect(billChartContainer).toBeTruthy();
  });

  test('Should check if trip table container mounts', () => {
    const { container } = render(<Body />);
    const tripTableContainer = container.querySelector('.trips-table');

    expect(tripTableContainer).toBeTruthy();
  });
});

describe('Body charts components', () => {
  test('Should check if gender and bill charts mounts', () => {
    const { container } = render(<Body />);

    const billChart = container.querySelector('.billChart');
    const genderChart = container.querySelector('.genderChart');
    const totalBillChart = container.querySelector('.totalChart');

    expect(billChart).toBeTruthy();
    expect(genderChart).toBeTruthy();
    expect(totalBillChart).toBeTruthy();
  });
});

describe('Trips table', () => {
  test('Should check', () => {
    const { container, debug, getAllByText } = render(<Body />);
    const tableContainer = container.querySelector('.trips-table');

    expect(getAllByText(/TRIPS DETAILS/)).not.toBeNull();
    expect(tableContainer).toBeTruthy();
  });
});
