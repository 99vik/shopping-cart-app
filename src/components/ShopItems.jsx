import PropTypes from 'prop-types';

function ShopItems({ data }) {
  console.log(data);
  const items = data.map((item) => {
    return <ShopItem key={item.id} item={item} />;
  });
  return items;
}

function ShopItem({ item }) {
  return (
    <div className="border border-neutral-400 rounded-xl p-3 max-[570px]:w-[300px] w-[250px] justify-self-center flex flex-col items-center justify-between gap-3">
      <img
        src={item.image}
        alt="product picture"
        className="h-[100px] max-[570px]:h-[150px] w-fit "
      />
      <p className="text-sm font-semibold text-neutral-600">{item.title}</p>
      <div className="flex justify-between w-full items-center">
        <button className="text-md font-semibold bg-neutral-500 hover:bg-neutral-700 px-3 py-1 text-white rounded-lg">
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

ShopItem.propTypes = {
  item: PropTypes.object,
};

export default ShopItems;
