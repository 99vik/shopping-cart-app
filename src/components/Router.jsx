import { createBrowserRouter, RouterProvider, NavLink } from 'react-router-dom';
import { Shop, Home } from './exports';
import App from '../App';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'shop', element: <Shop /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

function ErrorPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-20 h-screen">
        <p className="text-4xl text-neutral-700">Looks like you got lost..</p>
        <NavLink to="/">
          <button className="text-xl px-8 py-2 text-md font-semibold bg-neutral-500 w-full hover:bg-neutral-700 text-white rounded-lg mt-1">
            Go back
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default Router;
