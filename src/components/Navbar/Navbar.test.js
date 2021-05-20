import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders main app title', () => {
  render(<Navbar />);
  const appTitle = screen.getByText(/Shortly/i);
  expect(appTitle).toBeInTheDocument();
});