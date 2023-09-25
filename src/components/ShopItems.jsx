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
    <div className="border border-neutral-400 rounded-xl py-6 px-2 w-[250px] justify-self-center">
      <img src={item.image} alt="product picture" className="h-[100px]" />
      <p className="text-sm font-semibold text-neutral-600">{item.title}</p>
    </div>
  );
}

ShopItem.propTypes = {
  item: PropTypes.object,
};

export default ShopItems;
