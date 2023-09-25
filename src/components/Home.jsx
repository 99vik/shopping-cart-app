import { Link } from 'react-router-dom';
import HomeWallpaper from '../assets/images/hero-wallpaper.jpg';

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
      <div>
        <p>text</p>
      </div>
    </div>
  );
}

export default Home;
