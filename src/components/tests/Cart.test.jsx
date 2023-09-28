import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { it, describe, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Cart from '../Cart.jsx';

describe('Cart component', () => {
  const toggleShowCart = vi.fn();
  const deleteCartItem = vi.fn();

  it('Renders close button', () => {
    const cartItems = [];

    render(
      <BrowserRouter>
        <Cart
          toggleShowCart={toggleShowCart}
          cartItems={cartItems}
          deleteCartItem={deleteCartItem}
        />
      </BrowserRouter>
    );
    const button = screen.getByRole('button', { name: /close cart/i });
    expect(button).toBeInTheDocument();
  });

  it('Triggering closing cart on clicking close', async () => {
    const user = userEvent.setup();

    const cartItems = [];

    render(
      <BrowserRouter>
        <Cart
          toggleShowCart={toggleShowCart}
          cartItems={cartItems}
          deleteCartItem={deleteCartItem}
        />
      </BrowserRouter>
    );
    const button = screen.getByRole('button', { name: /close cart/i });
    await user.click(button);

    expect(toggleShowCart).toBeCalled();
  });

  it('Shows "No items in cart text" on empty cart', () => {
    const cartItems = [];

    render(
      <BrowserRouter>
        <Cart
          toggleShowCart={toggleShowCart}
          cartItems={cartItems}
          deleteCartItem={deleteCartItem}
        />
      </BrowserRouter>
    );
    const text = screen.getByText(/no items in cart./i);
    expect(text).toBeInTheDocument();
  });

  it('Showing items in cart', () => {
    const cartItems = [
      [
        2,
        {
          id: 1,
          title: 'Title for product',
          price: 100.0,
          description: 'Product description',
          category: "men's clothing",
          image: 'image-path',
          rating: {
            rate: 4.9,
            count: 120,
          },
        },
      ],
      [
        4,
        {
          id: 2,
          title: 'Title for product',
          price: 100.0,
          description: 'Product description',
          category: "men's clothing",
          image: 'image-path',
          rating: {
            rate: 4.9,
            count: 120,
          },
        },
      ],
      [
        1,
        {
          id: 3,
          title: 'Title for product',
          price: 100.0,
          description: 'Product description',
          category: "men's clothing",
          image: 'image-path',
          rating: {
            rate: 4.9,
            count: 120,
          },
        },
      ],
    ];

    render(
      <BrowserRouter>
        <Cart
          toggleShowCart={toggleShowCart}
          cartItems={cartItems}
          deleteCartItem={deleteCartItem}
        />
      </BrowserRouter>
    );
    const itemsInCart = screen.getAllByLabelText(/cart item/);

    expect(itemsInCart.length).toBe(3);
  });

  it('Deletes item in cart', async () => {
    const user = userEvent.setup();

    const cartItems = [
      [
        2,
        {
          id: 1,
          title: 'Title for product',
          price: 100.0,
          description: 'Product description',
          category: "men's clothing",
          image: 'image-path',
          rating: {
            rate: 4.9,
            count: 120,
          },
        },
      ],
      [
        4,
        {
          id: 2,
          title: 'Title for product',
          price: 100.0,
          description: 'Product description',
          category: "men's clothing",
          image: 'image-path',
          rating: {
            rate: 4.9,
            count: 120,
          },
        },
      ],
      [
        1,
        {
          id: 3,
          title: 'Title for product',
          price: 100.0,
          description: 'Product description',
          category: "men's clothing",
          image: 'image-path',
          rating: {
            rate: 4.9,
            count: 120,
          },
        },
      ],
    ];

    render(
      <BrowserRouter>
        <Cart
          toggleShowCart={toggleShowCart}
          cartItems={cartItems}
          deleteCartItem={deleteCartItem}
        />
      </BrowserRouter>
    );

    const deleteButtons = screen.getAllByRole('button', { name: /Remove/ });
    await user.click(deleteButtons[0]);
    await user.click(deleteButtons[1]);

    expect(deleteCartItem).toBeCalledTimes(2);
  });
});
