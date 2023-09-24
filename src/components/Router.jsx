import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Checkout, Shop, Home } from './exports';
import App from '../App';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'shop', element: <Shop /> },
        { path: 'checkout', element: <Checkout /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
