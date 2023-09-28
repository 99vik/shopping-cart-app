import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
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

  it('renders footer', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('renders cart button', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const cartButton = screen.getByRole('button', { name: /cart button/i });

    expect(cartButton).toBeInTheDocument();
  });

  describe('Cart rendering', () => {
    it("initially doesn't render cart", () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      const cart = screen.queryByAltText(/cart/);

      expect(cart).not.toBeInTheDocument();
    });

    it('renders cart on click', async () => {
      const user = userEvent.setup();

      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      const cartButton = screen.getByRole('button', { name: /cart button/i });
      await user.click(cartButton);
      const cart = screen.getByText(/cart/);

      expect(cart).toBeInTheDocument();
    });
  });
});
