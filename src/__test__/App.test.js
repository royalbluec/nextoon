import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from '../App';

const queryClient = new QueryClient();

test('renders main', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  );
  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
});
