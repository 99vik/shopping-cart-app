import { Outlet } from 'react-router-dom';
import { Footer, Navbar, Cart } from './components/exports';
import { useState } from 'react';

function App() {
  const [showCart, setShowCart] = useState(false);
  function toggleShowCart() {
    showCart ? setShowCart(false) : setShowCart(true);
  }

  return (
    <div className="min-h-screen flex flex-col max-w-screen">
      {showCart && <Cart />}
      <Navbar toggleShowCart={toggleShowCart} />
      <div className="grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
