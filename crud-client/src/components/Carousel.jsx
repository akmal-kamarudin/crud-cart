import items from "../lib/ItemShop";

const Carousel = () => {
  return (
    <div className="carousel w-full md:w-3/5 shadow-xl my-8">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={items[0].pic} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            &#10094;
          </a>
          <a href="#slide2" className="btn btn-circle">
            &#10095;
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={items[4].pic} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            &#10094;
          </a>
          <a href="#slide3" className="btn btn-circle">
            &#10095;
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={items[2].pic} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            &#10094;
          </a>
          <a href="#slide4" className="btn btn-circle">
            &#10095;
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={items[3].pic} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            &#10094;
          </a>
          <a href="#slide1" className="btn btn-circle">
            &#10095;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
