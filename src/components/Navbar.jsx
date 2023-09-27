import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuIcon from '../assets/icons/menu.svg';
import CloseIcon from '../assets/icons/close-box.svg';
import { useState } from 'react';
import Cart from './Cart';

function Navbar({ toggleShowCart, numberOfItems, cartItems, deleteCartItem }) {
  const [smallScreenMenu, setSmallScreenMenu] = useState(false);

  function SmallScreenNavMenu({
    setSmallScreenMenu,
    toggleShowCart,
    cartItems,
    deleteCartItem,
  }) {
    return (
      <div className="small-menu w-full h-full z-10 fixed bg-white flex flex-col justify-start items-center pt-20">
        <button
          className="absolute top-2 right-2"
          onClick={() => {
            setSmallScreenMenu(false);
          }}
        >
          <img src={CloseIcon} alt="close icon" className="h-14" />
        </button>
        <div className="flex justify-evenly w-full">
          <NavLink to="/">
            <button
              onClick={() => {
                setSmallScreenMenu(false);
              }}
              className="text-xl font-semibold bg-neutral-500 w-full py-2 px-8 text-white rounded-lg"
            >
              Home
            </button>
          </NavLink>
          <NavLink to="shop">
            <button
              onClick={() => {
                setSmallScreenMenu(false);
              }}
              className="text-xl font-semibold bg-neutral-500 w-full py-2 px-8 text-white rounded-lg"
            >
              Shop
            </button>
          </NavLink>
        </div>
        <Cart
          toggleShowCart={toggleShowCart}
          cartItems={cartItems}
          deleteCartItem={deleteCartItem}
        />
      </div>
    );
  }

  return (
    <>
      {smallScreenMenu && (
        <SmallScreenNavMenu
          setSmallScreenMenu={setSmallScreenMenu}
          toggleShowCart={toggleShowCart}
          cartItems={cartItems}
          deleteCartItem={deleteCartItem}
        />
      )}
      <nav className="z-1">
        <div className="flex justify-between items-center px-2 md:px-10 py-4 border border-b-neutral-300">
          <div className="">
            <p className="text-2xl font-bold align-middle">AllAround Shop</p>
          </div>
          <div className="sm:hidden">
            <button
              onClick={() => {
                setSmallScreenMenu(true);
              }}
            >
              <img src={MenuIcon} alt="menu" className="h-12" />
            </button>
          </div>
          <div className="flex gap-12 max-sm:hidden">
            <NavLink to="/">
              <p className="font-semibold text-lg px-3 py-1 rounded-lg hover:bg-neutral-800 hover:text-white">
                Home
              </p>
            </NavLink>
            <NavLink to="shop">
              <p className="font-semibold text-lg px-3 py-1 rounded-lg hover:bg-neutral-800 hover:text-white">
                Shop
              </p>
            </NavLink>
            <button
              onClick={() => toggleShowCart()}
              className="flex justify-center items-center"
            >
              <svg
                className="h-8 px-3 py-1 rounded-lg hover:bg-neutral-800 hover:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
              </svg>
              {numberOfItems !== 0 && (
                <p className="font-extrabold text-sm bg-gray-400 w-6 h-6 rounded-full ml-[-12px] mt-[-20px]">
                  {numberOfItems}
                </p>
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  setSmallScreenMenu: PropTypes.func,
  toggleShowCart: PropTypes.func,
  numberOfItems: PropTypes.number,
  cartItems: PropTypes.array,
  deleteCartItem: PropTypes.func,
};

export default Navbar;
