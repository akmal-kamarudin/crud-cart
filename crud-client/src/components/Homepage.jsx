import React from "react";
import Carousel from "./Carousel";
import Cards from "./Cards";
import itemShop from "../lib/ItemShop";

const Homepage = () => {
  const renderItems = itemShop.map((items, index) => {
    return (
      <React.Fragment key={index}>
        <div className="flex flex-col items-center w-full">
          <Cards item={items} />
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="flex flex-col items-start text-justify justify-start w-full py-8">
      <h1 className="font-bold text-xl lg:text-2xl text-slate-800">
        🎊OFFERS!!
      </h1>
      <p className="font-semibold text-lg mt-4 lg:text-xl text-slate-600">
        Check out the latest offers in town during this festive season.
      </p>
      <div className="flex flex-col w-full items-center justify-center text-center">
        <Carousel />
      </div>
      <h1 className="font-bold text-xl lg:text-2xl text-slate-800">🛍️ITEMS</h1>
      <p className="font-semibold text-lg mt-4 lg:text-xl text-slate-600">
        New items for all categories, add to your cart today.
      </p>
      <div className="flex flex-row flex-wrap place-content-center sm:place-content-stretch gap-x-8">
        {renderItems}
      </div>
    </div>
  );
};

export default Homepage;
