import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartImg from '../assets/icons/cart.svg';

function Navbar({ toggleShowCart }) {
  return (
    <>
      <nav>
        <div className="flex justify-between px-10 py-4">
          <div>
            <p className="text-2xl font-bold">AllAround Shop</p>
          </div>
          <div className="flex gap-12">
            <NavLink to="/">
              <p className="font-semibold text-lg px-3 py-1 rounded-lg hover:bg-slate-300">
                Home
              </p>
            </NavLink>
            <NavLink to="shop">
              <p className="font-semibold text-lg px-3 py-1 rounded-lg hover:bg-slate-300">
                Shop
              </p>
            </NavLink>
            <button onClick={() => toggleShowCart()}>
              <img
                src={CartImg}
                alt="cart image"
                className="h-8 px-3 py-1 rounded-lg hover:bg-slate-300"
              />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  toggleShowCart: PropTypes.func,
};

export default Navbar;
