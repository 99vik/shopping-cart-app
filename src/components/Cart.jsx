import { NavLink } from 'react-router-dom';
import CloseIcon from '../assets/icons/close-box.svg';
import PropTypes from 'prop-types';

function Cart({ toggleShowCart, cartItems }) {
  const cartItemCards = cartItems.map((item) => {
    return <CartItem key={item[1].id} item={item} />;
  });

  return (
    <>
      <div className="fixed w-full h-full bg-black opacity-20 top-0 flex justify-center items-center"></div>
      <div className="cart pt-3 pb-10 px-4 bg-white z-10 border-l border-neutral-500 fixed right-0 h-full w-[400px] z-5">
        <button
          onClick={() => {
            toggleShowCart();
          }}
        >
          <img
            src={CloseIcon}
            alt="close icon"
            className="h-10 absolute top-2 right-2"
          />
        </button>
        {cartItems.length === 0 ? (
          <div className="h-full w-full flex justify-center items-center">
            <p className="text-2xl ">No items in cart.</p>
          </div>
        ) : (
          <div className="h-full w-full flex flex-col gap-3">
            <p className="text-2xl font-bold">Cart</p>
            <div className="overflow-auto flex flex-col gap-3">
              {cartItemCards}
            </div>
            <button
              className="text-md font-semibold bg-neutral-500 w-full hover:bg-neutral-700 py-1 text-white rounded-lg mt-1"
              onClick={() => {
                alert('Not working');
              }}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function CartItem({ item }) {
  const quantity = item[0];
  const itemInfo = item[1];
  return (
    <div className="flex border-neutral-300 border px-4 py-2 gap-6 items-center rounded-lg">
      <img src={itemInfo.image} alt="item picture" className="w-[100px]" />
      <div>
        <p className="text-sm mb-1">{itemInfo.title}</p>
        <p className="text-sm text-neutral-600">Quantity: {quantity}</p>
        <p className="text-sm text-neutral-600">
          Price: ${quantity * itemInfo.price}
        </p>
      </div>
    </div>
  );
}

Cart.propTypes = {
  toggleShowCart: PropTypes.func,
  cartItems: PropTypes.array,
};

CartItem.propTypes = {
  item: PropTypes.array,
};

export default Cart;
