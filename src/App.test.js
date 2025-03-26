import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('soma 2 + 2 deve ser igual a 4', () => {
  expect(2 + 2).toBe(4);
});

test('soma 2 + 2 deve ser igual a 5 (erro proposital)', () => {
  expect(2 + 2).toBe(5);
});
