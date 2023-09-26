import { Outlet } from 'react-router-dom';
import { Footer, Navbar, Cart } from './components/exports';
import { useState } from 'react';
import { func } from 'prop-types';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  function toggleShowCart() {
    showCart ? setShowCart(false) : setShowCart(true);
  }

  function addToCart(counter, item) {
    let newCart = cart;
    const array = [counter, item];
    newCart.push(array);
    setCart(newCart);
    console.log(newCart);
  }

  function countItems() {
    return cart.reduce(
      (accumulator, currentValue) => accumulator + currentValue[0],
      0
    );
  }

  return (
    <div className="min-h-screen flex flex-col max-w-screen">
      {showCart && <Cart />}
      <Navbar toggleShowCart={toggleShowCart} numberOfItems={countItems()} />
      <div className="grow">
        <Outlet context={[addToCart, cart]} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
