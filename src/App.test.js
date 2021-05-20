import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/Navbar/Navbar', () => () => <div data-testid="Navbar" />)
jest.mock('./components/LandingMain/LandingMain', () => () => <div data-testid="LandingMain" />)
jest.mock('./components/Features/Features', () => () => <div data-testid="Features" />)
jest.mock('./components/CallToAction/CallToAction', () => () => <div data-testid="CallToAction" />)
jest.mock('./components/Footer/Footer', () => () => <div data-testid="Footer" />)

test('App contains Navbar components', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId(/Navbar/)).toBeInTheDocument();
});

test('App contains LandingMain components', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId(/LandingMain/)).toBeInTheDocument();
});

test('App contains Features components', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId(/Features/)).toBeInTheDocument();
});

test('App contains CallToAction components', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId(/CallToAction/)).toBeInTheDocument();
});

test('App contains Footer components', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId(/Footer/)).toBeInTheDocument();
});
