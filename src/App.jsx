import { Outlet } from 'react-router-dom';
import { Footer, Navbar, Cart } from './components/exports';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
