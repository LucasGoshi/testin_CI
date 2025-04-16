import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('exibe erro ao digitar uma string no campo numérico', () => {
  render(<App />);
  
  const input = screen.getByLabelText('number-input');
  
  fireEvent.change(input, { target: { value: 'abc' } });

  // Esse texto ainda não existe no app, então o teste vai falhar
  const errorMessage = screen.getByText(/apenas números são permitidos/i);
  expect(errorMessage).toBeInTheDocument();
});
