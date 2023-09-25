import { NavLink } from 'react-router-dom';

function Cart() {
  return (
    <>
      <div className="bg-slate-400 absolute right-0 h-full w-[30%]">
        <NavLink to="checkout">Checkout</NavLink>
      </div>
    </>
  );
}

export default Cart;
