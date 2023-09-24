import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <NavLink to="/">home</NavLink>
      <NavLink to="shop">Shop</NavLink>
    </>
  );
}

export default Navbar;
