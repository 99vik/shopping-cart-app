import { Outlet } from 'react-router-dom';
import { Footer, Navbar, Cart } from './components/exports';
import { useState } from 'react';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState(0);

  function toggleShowCart() {
    showCart ? setShowCart(false) : setShowCart(true);
  }

  function addToCart(counter, item) {
    let newCart = cart;
    const array = [counter, item];
    newCart.push(array);
    setCart(newCart);
    setNumberOfItems(countItems(newCart));
  }

  function countItems(newCart) {
    return newCart.reduce(
      (accumulator, currentValue) => accumulator + currentValue[0],
      0
    );
  }

  return (
    <div className="min-h-screen flex flex-col max-w-screen">
      {showCart && <Cart toggleShowCart={toggleShowCart} cartItems={cart} />}
      <Navbar toggleShowCart={toggleShowCart} numberOfItems={numberOfItems} />
      <div className="grow">
        <Outlet context={[addToCart, cart]} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
