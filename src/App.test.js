import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main app page with title', () => {
  render(<App />);
  const linkElement = screen.getByText(/EMESPERRE/i);
  expect(linkElement).toBeInTheDocument();
});
