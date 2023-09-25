import { Link } from 'react-router-dom';
import HomeWallpaper from '../assets/images/hero-wallpaper.jpg';
import ClothesIcon from '../assets/icons/clothes.svg';
import ElectronicsIcon from '../assets/icons/electronics.svg';
import JewelryIcon from '../assets/icons/jewelry.svg';

function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url("${HomeWallpaper}")`,
        }}
        className="bg-cover bg-center h-[400px] lg:h-[500px]
        flex justify-center"
      >
        <div className="self-end flex flex-col mb-12">
          <div className="flex flex-col mb-10">
            <p className="self-center text-2xl font-bold text-white">
              Welcome to
            </p>
            <p className="text-5xl self-center font-bold text-white">
              AllAround Shop
            </p>
          </div>
          <Link to="shop" className="max-w-fit self-center">
            <button className="bg-white hover:bg-gray-300  py-2 px-4 text-lg rounded-lg font-bold">
              Shop now
            </button>
          </Link>
        </div>
      </div>
      <div className="px-20 py-10">
        <p className="text-gray-600 text-lg tracking-wide">
          Discover a world of endless possibilities in electronics, timeless
          elegance in jewelry, and the latest fashion trends for both men and
          women.
          <br />
          At AllAround Shop, we bring you the best of all worlds.
        </p>
        <div className="flex flex-col">
          <p className="text-gray-600 tracking-wide text-2xl text-center mt-8">
            Shop for:
          </p>
          <div className="flex justify-center mt-8 gap-20">
            <div className="bg-neutral-800 rounded-xl w-[180px] py-4 px-8 aspect-square flex flex-col hover:bg-neutral-500 cursor-pointer">
              <img src={ElectronicsIcon} alt="" className="h-[90px]" />
              <p className="text-white text-2xl self-center">Electronics</p>
            </div>
            <div className="bg-neutral-800 rounded-xl py-4 w-[180px] px-8 aspect-square flex flex-col hover:bg-neutral-500 cursor-pointer">
              <img src={ClothesIcon} alt="" className="h-[90px]" />
              <p className="text-white text-2xl self-center">Clothes</p>
            </div>
            <div className="bg-neutral-800 rounded-xl py-4 px-8 w-[180px] aspect-square flex flex-col hover:bg-neutral-500 cursor-pointer">
              <img src={JewelryIcon} alt="" className="h-[90px]" />
              <p className="text-white text-2xl self-center">Jewelry</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
