import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

test('renders main', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
});
