import CloseIcon from '../assets/icons/close-box.svg';
import DeleteIcon from '../assets/icons/trash-can.svg';
import PropTypes from 'prop-types';

function Cart({ toggleShowCart, cartItems, deleteCartItem }) {
  const cartItemCards = cartItems.map((item) => {
    return (
      <CartItem key={item[1].id} item={item} deleteCartItem={deleteCartItem} />
    );
  });

  return (
    <>
      <div className="fixed w-full h-full max-sm:hidden bg-black opacity-20 top-0 flex justify-center items-center"></div>
      <div
        className="md:cart pt-3 pb-10 px-4 bg-white border-l border-neutral-500 md:fixed right-0 grow h-full max-sm:h-1/2 max-sm:w-full w-[400px]"
        aria-label="cart"
      >
        <button
          aria-label="close cart"
          onClick={() => {
            toggleShowCart();
          }}
        >
          <img
            src={CloseIcon}
            alt="close icon"
            className="max-sm:hidden h-10 absolute top-2 right-2"
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
              className="text-md font-semibold bg-blue-500 w-full hover:bg-blue-700 py-1 text-white rounded-lg mt-1"
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

function CartItem({ item, deleteCartItem }) {
  const quantity = item[0];
  const itemInfo = item[1];
  return (
    <div
      className="flex border-neutral-300 border px-4 py-2 gap-6 items-center rounded-lg"
      aria-label="cart item"
    >
      <img src={itemInfo.image} alt="item picture" className="w-[100px]" />
      <div>
        <p className="text-sm mb-1">{itemInfo.title}</p>
        <p className="text-sm text-neutral-600">Quantity: {quantity}</p>
        <p className="text-sm text-neutral-600">
          Price: ${quantity * itemInfo.price}
        </p>
        <button
          className="text-sm flex justify-center items-center px-2 gap-1 font-semibold bg-rose-600 hover:bg-rose-800 py-[3px] text-white rounded-md mt-2"
          onClick={() => {
            deleteCartItem(item);
          }}
        >
          Remove
          <img src={DeleteIcon} alt="" className="w-4" />
        </button>
      </div>
    </div>
  );
}

Cart.propTypes = {
  toggleShowCart: PropTypes.func,
  cartItems: PropTypes.array,
  deleteCartItem: PropTypes.func,
};

CartItem.propTypes = {
  item: PropTypes.array,
  deleteCartItem: PropTypes.func,
};

export default Cart;
