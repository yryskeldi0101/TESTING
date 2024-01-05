import React from "react";
import NewsCards from "../components/UI/NewsCards";

const NewsContainer = () => {
  return (
    <div>
      <h2 className="my-10 text-2xl font-bold">Новости</h2>
      <NewsCards />
    </div>
  );
};

export default NewsContainer;
