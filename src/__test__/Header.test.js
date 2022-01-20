import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header/Header';

test('renders header', () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const header = screen.getByRole('header');
  expect(header).toBeInTheDocument();
});

test('renders navigation', () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const navigation = screen.getByRole('primary-navigation');
  expect(navigation).toBeInTheDocument();
});

test('renders logo', () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const logo = screen.getByRole('logo');
  expect(logo).toBeInTheDocument();
});
