import { render, screen } from '@testing-library/react';
import Banner from '../components/Banner/Banner';

test('renders banner', () => {
  render(<Banner />);
  const banner = screen.getByRole('banner');
  expect(banner).toBeInTheDocument();
});
