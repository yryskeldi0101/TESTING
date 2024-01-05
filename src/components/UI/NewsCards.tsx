import React from "react";
import { news_array } from "../../utils/data/data";
import illustration from "../../assets/icons/illustration.svg";

const NewsCards = () => {
  return (
    <div className="carousel w-full">
      {news_array.map((item, index) => {
        return (
          <div className="carousel-item rounded-2xl bg-light" key={index}>
            <div>
              <h1>{item.discount}</h1>
              <p>{item.title}</p>
              <button className="btn bg-blue text-light px-5 py-3">
                Подробнее
              </button>
            </div>
            <div>
              <img src={illustration} alt={illustration} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsCards;
