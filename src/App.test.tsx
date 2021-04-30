import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('shows a title', () => {
  render(<App />);
  expect(screen.getByText('Data collection')).toBeInTheDocument();
});
