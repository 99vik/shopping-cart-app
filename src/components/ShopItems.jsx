import PropTypes from 'prop-types';
import { useState } from 'react';
import CloseIcon from '../assets/icons/close-box.svg';

function ShopItems({ data }) {
  const [productInfo, setProductInfo] = useState(null);

  const items = data.map((item) => {
    return (
      <ShopItem key={item.id} item={item} setProductInfo={setProductInfo} />
    );
  });
  return (
    <>
      {productInfo && (
        <>
          <div className="fixed w-full h-full backdrop-brightness-50 opacity-70 top-0 flex justify-center items-center"></div>
          <div
            className="bg-white fixed w-[600px] top-0 translate-y-1/2 
          right-1/2 translate-x-1/2 flex flex-col items-center p-6 rounded-xl"
          >
            <button
              className="absolute right-2 top-2 hover:opacity-50"
              onClick={() => {
                setProductInfo(null);
              }}
            >
              <img src={CloseIcon} alt="close" className="h-10" />
            </button>
            <img src={productInfo.image} alt="product image" className="w-40" />
          </div>
        </>
      )}
      <div className="grid max-[570px]:grid-cols-1 max-[850px]:grid-cols-2 min-[1200px]:grid-cols-4 grid-cols-3 gap-6 p-6">
        {items}
      </div>
    </>
  );
}

function ShopItem({ item, setProductInfo }) {
  return (
    <div className="border border-neutral-400 rounded-xl p-3 max-[570px]:w-[300px] w-[250px] justify-self-center flex flex-col items-center justify-between gap-3">
      <img
        src={item.image}
        alt="product picture"
        className="h-[100px] max-[570px]:h-[150px] w-fit "
      />
      <p className="text-sm font-semibold text-neutral-600">{item.title}</p>
      <div className="flex justify-between w-full items-center">
        <button
          className="text-md font-semibold bg-neutral-500 hover:bg-neutral-700 px-3 py-1 text-white rounded-lg"
          onClick={() => {
            setProductInfo(item);
          }}
        >
          View more
        </button>
        <p className="text-md font-semibold text-neutral-600 flex items-center">
          $<span className="text-xl text-black">{item.price}</span>
        </p>
      </div>
      <div>Add to cart</div>
    </div>
  );
}

ShopItems.propTypes = {
  data: PropTypes.array,
};

ShopItem.propTypes = {
  item: PropTypes.object,
};

export default ShopItems;
