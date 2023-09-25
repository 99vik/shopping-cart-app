import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ toggleShowCart }) {
  return (
    <>
      <NavLink to="/">home</NavLink>
      <NavLink to="shop">Shop</NavLink>
      <button onClick={() => toggleShowCart()}>Cart</button>
    </>
  );
}

Navbar.propTypes = {
  toggleShowCart: PropTypes.func,
};

export default Navbar;
