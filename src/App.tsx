import React from "react";
import Header from "./components/Header";
import PaddingXContainer from "./components/UI/PaddingXContainer";
import Categories from "./containers/Categories";
import Bestsellers from "./containers/Bestsellers";
import HistoriesContainer from "./containers/HistoriesContainer";
import AuctionItems from "./containers/AuctionItems";
import NewsContainer from "./containers/NewsContainer";
import StoreAddresses from "./containers/StoreAddresses";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <PaddingXContainer>
        <HistoriesContainer />
        <Categories />
        <Bestsellers />
        <NewsContainer />
        <AuctionItems />
        <StoreAddresses />
      </PaddingXContainer>
      <Footer />
    </div>
  );
}

export default App;
