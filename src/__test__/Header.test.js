import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';

test('renders header', () => {
  render(<Header />);
  const header = screen.getByRole('header');
  expect(header).toBeInTheDocument();
});

test('renders navigation', () => {
  render(<Header />);
  const navigation = screen.getByRole('navigation');
  expect(navigation).toBeInTheDocument();
});
