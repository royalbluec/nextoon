import { render, screen } from '@testing-library/react';

import LolomoRow from '../components/LolomoRow/LolomoRow';

test('renders lolomoRow', () => {
  render(<LolomoRow />);
  const lolomoRow = screen.getByRole('lolomoRow');
  expect(lolomoRow).toBeInTheDocument();
});
