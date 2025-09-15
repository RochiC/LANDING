import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MolGen hero headline', () => {
  render(<App />);
  const headline = screen.getByText(/genera posibles medicamentos en segundos/i);
  expect(headline).toBeInTheDocument();
});
