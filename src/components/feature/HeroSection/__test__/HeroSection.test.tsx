import { expect, test } from 'vitest';
import HeroSection from '../HeroSection';
import { render, screen } from '@testing-library/react'

test('Hero section renders', () => {
  render(<HeroSection />);
  const imageElement = screen.getByAltText('Models');
  expect(screen.getByText('FIND CLOTHES THAT MATCHES YOUR STYLE')).toBeInTheDocument();
  expect(screen.getByText('Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.')).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument()
});
