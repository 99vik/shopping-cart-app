import { render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import App from '../../App.jsx';
import { BrowserRouter } from 'react-router-dom';

describe('App component', () => {
  it('renders nav', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });
});
