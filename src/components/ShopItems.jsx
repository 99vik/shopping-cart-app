import PropTypes from 'prop-types';
import { useState } from 'react';
import CloseIcon from '../assets/icons/close-box.svg';
import StarIcon from '../assets/icons/star.svg';

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
        <ViewInfoModule
          setProductInfo={setProductInfo}
          productInfo={productInfo}
        />
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

function ViewInfoModule({ productInfo, setProductInfo }) {
  return (
    <>
      <div className="fixed w-full h-full backdrop-brightness-50 opacity-70 top-0 flex justify-center items-center"></div>
      <div
        className="bg-white fixed max-[680px]:w-[90%] w-[600px] bottom-1/2 translate-y-1/2
          right-1/2 translate-x-1/2 flex flex-col items-center px-3 md:px-6 py-4 gap-4 rounded-xl"
      >
        <button
          className="absolute right-2 top-2 hover:opacity-50"
          onClick={() => {
            setProductInfo(null);
          }}
        >
          <img src={CloseIcon} alt="close" className="h-10" />
        </button>
        <p className="text-center text-md  md:text-xl font-semibold px-8">
          {productInfo.title}
        </p>
        <img
          src={productInfo.image}
          alt="product image"
          className="max-w-[220px] w-[50%] aspect-auto"
        />
        <div>
          <p className="text-sm text-neutral-500">Description</p>
          <p className="text-sm">{productInfo.description}</p>
        </div>
        <div className="self-start">
          <p className="text-sm text-neutral-500">Rating</p>
          <div className="flex gap-10">
            <div className="flex justify-center items-center gap-1">
              <img src={StarIcon} alt="star icon" className="h-6" />
              <p className="text-lg font-semibold">{productInfo.rating.rate}</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <p className="text-md">Votes:</p>
              <p className="text-md">{productInfo.rating.count}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ShopItems.propTypes = {
  data: PropTypes.array,
};

ShopItem.propTypes = {
  item: PropTypes.object,
  setProductInfo: PropTypes.func,
};

ViewInfoModule.propTypes = {
  setProductInfo: PropTypes.func,
  productInfo: PropTypes.object,
};

export default ShopItems;
