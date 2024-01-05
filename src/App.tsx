import React from "react";
import Header from "./components/Header";
import PaddingXContainer from "./components/UI/PaddingXContainer";
import Categories from "./containers/Categories";
import Bestsellers from "./containers/Bestsellers";
import Histories from "./containers/HistoriesContainer";

function App() {
  return (
    <div>
      <Header />
      <PaddingXContainer>
        <Histories />
        <Categories />
        <Bestsellers />
      </PaddingXContainer>
    </div>
  );
}

export default App;
