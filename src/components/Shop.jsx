import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ShopItems from './ShopItems';
import { useOutletContext } from 'react-router-dom';

function Shop() {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState(null);
  const [category, setCategory] = useState('electronics');
  const [addToCart] = useOutletContext();

  function handleCategory(_category) {
    if (_category === category) {
      return;
    }
    setLoader(true);
    setCategory(_category);
  }

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await fetchedData.json();
      setData(data);
      setLoader(false);
    }
    fetchData();
  }, [category]);

  return (
    <>
      <CategoriesButtons handleCategory={handleCategory} category={category} />
      {loader ? <LoaderSvg /> : <ShopItems data={data} addToCart={addToCart} />}
    </>
  );
}

function LoaderSvg() {
  return (
    <div className="flex h-[400px] justify-center items-center">
      <svg
        className="h-[100px] animate-spin"
        aria-hidden="true"
        viewBox="0 0 100 101"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="#00000030"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="#000000"
        />
      </svg>
    </div>
  );
}

function CategoriesButtons({ handleCategory, category }) {
  return (
    <div className="flex justify-center max-[680px]:gap-2 max-[530px]:text-sm gap-12 px-2 mt-4">
      <button
        className={`text-md font-semibold bg-neutral-500 hover:bg-neutral-700 max-[530px]:px-2 px-3 py-1 text-white rounded-lg ${
          category === 'electronics' ? 'bg-neutral-700' : null
        }`}
        onClick={() => {
          handleCategory('electronics');
        }}
      >
        Electronics
      </button>
      <button
        className={`text-md font-semibold bg-neutral-500 hover:bg-neutral-700 px-3 py-1 text-white rounded-lg ${
          category === "men's clothing" ? 'bg-neutral-700' : null
        }`}
        onClick={() => {
          handleCategory("men's clothing");
        }}
      >
        Men&apos;s Clothes
      </button>
      <button
        className={`text-md font-semibold bg-neutral-500 hover:bg-neutral-700 px-3 py-1 text-white rounded-lg ${
          category === "women's clothing" ? 'bg-neutral-700' : null
        }`}
        onClick={() => {
          handleCategory("women's clothing");
        }}
      >
        Women&apos;s clothes
      </button>
      <button
        className={`text-md font-semibold bg-neutral-500 hover:bg-neutral-700 px-3 py-1 text-white rounded-lg ${
          category === 'jewelery' ? 'bg-neutral-700' : null
        }`}
        onClick={() => {
          handleCategory('jewelery');
        }}
      >
        Jewelery
      </button>
    </div>
  );
}

CategoriesButtons.propTypes = {
  handleCategory: PropTypes.func,
  category: PropTypes.string,
};

export default Shop;
