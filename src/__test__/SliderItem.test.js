import { render, screen } from '@testing-library/react';

import SliderItem from '../components/Slider/SliderItem';

test('renders sliderItem', () => {
  render(<SliderItem />);
  const sliderItem = screen.getByRole('sliderItem');
  expect(sliderItem).toBeInTheDocument();
});
