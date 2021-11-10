import { render, screen } from '@testing-library/react';
import App from './App';

test('should render welcome message at index page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Smarkets/i);
  expect(linkElement).toBeInTheDocument();
});
