/* eslint-disable react/prop-types */
const Cards = (props) => {
  const { name, price, pic, desc } = props.item;

  return (
    <div
      data-theme="light"
      className="card card-compact w-72 bg-base-100 shadow-xl"
    >
      <figure>
        <img src={pic} alt="Shoes" />
      </figure>
      <div className="card-body h-48">
        <h2 className="card-title">{name}</h2>
        <p className="my-2">{desc}</p>
        <div className="card-actions justify-between items-center">
          <h3 className="font-semibold text-lg text-slate-800">{`RM${price.toFixed(
            2
          )}`}</h3>
          <button className="btn btn-sm btn-neutral">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
