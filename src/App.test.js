import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('não permite inserir letras no campo numérico', () => {
  render(<App />);

  const input = screen.getByLabelText('number-input');

  fireEvent.change(input, { target: { value: 'abc' } });

  expect(input.value).toBe('');
});
