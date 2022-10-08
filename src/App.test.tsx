import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from './App';

let queryByText: any;
let getByText: any;

beforeEach(() => {
  let ren = render(<App />);
  queryByText = ren.queryByText;
  getByText = ren.getByText;
});

afterEach(cleanup);

test('renders learn react link', () => {
  const linkElement = screen.getByText(/learn react edwin/i);
  expect(linkElement).toBeInTheDocument();
});

test('Knowing whether plus button works', () => {
  expect(queryByText(/Value/i)).toHaveTextContent(/0/i);
  fireEvent.click(getByText(/Sumar/i));
  expect(queryByText(/Value/i)).toHaveTextContent(/1/i);
});

test('Knowing whether minus button works', () => {
  fireEvent.click(getByText(/Sumar/i));
  expect(queryByText(/Value/i)).toHaveTextContent(/1/i);
  fireEvent.click(getByText(/Restar/i));
  expect(queryByText(/Value/i)).toHaveTextContent(/0/i);
});

