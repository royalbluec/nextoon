import { render, screen } from '@testing-library/react';

import Slider from '../components/Slider/Slider';

test('renders slider', () => {
  render(<Slider />);
  const slider = screen.getByRole('slider');
  expect(slider).toBeInTheDocument();
});
