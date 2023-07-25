/* eslint-disable react/prop-types */
const Cards = (props) => {
  const { name, price, pic, multiplier } = props.item;

  console.log(name, price, pic, multiplier);

  return (
    <div data-theme="light" className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://nb.scene7.com/is/image/NB/m5740vl1_nb_05_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
