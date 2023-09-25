import { Outlet } from 'react-router-dom';
import { Footer, Navbar, Cart } from './components/exports';
import { useState } from 'react';

function App() {
  const [showCart, setShowCart] = useState(false);
  function toggleShowCart() {
    showCart ? setShowCart(false) : setShowCart(true);
  }

  return (
    <>
      {showCart && <Cart />}
      <Navbar toggleShowCart={toggleShowCart} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
