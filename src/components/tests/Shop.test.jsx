// import { render, screen } from '@testing-library/react';
// import { userEvent } from '@testing-library/user-event';
// import { it, describe, expect, vi } from 'vitest';
// import Shop from '../Shop';

// function Context() {
//   return <></>;
// }

// describe('Shop component', () => {
//   it('renders nav', () => {
//     render(
//       <Context addToCart={vi.fn()}>
//         <Shop />
//       </Context>
//     );

//     screen.debug();

//     expect(2).toBe(2);
//   });
// });

import { render, screen, waitFor } from '@testing-library/react';
import { it, describe, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Shop from '../Shop';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return { ...actual, useOutletContext: () => [[], vi.fn()] };
});

describe('Shop page', () => {
  it('Showing loading animation on loading shop', () => {
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );

    const loader = screen.getByLabelText(/loader animation/);
    expect(loader).toBeInTheDocument();
  });

  it('Rendering items after api call', async () => {
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );

    const items = await waitFor(() => screen.getAllByLabelText(/shop item/));
    screen.debug();
    expect(items.length).toBeGreaterThan(0);
  });
});
