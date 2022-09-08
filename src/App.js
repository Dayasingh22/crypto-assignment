import React from "react";
import CryptoCurrencies from "./components/cryptocurrencies/CryptoCurrencies";
import NavBar from "./components/navbar/NavBar";

const App = () => {

  return (
    <div>
      <NavBar />
      <CryptoCurrencies
        themeStatus={true}
      />
    </div>
  );
}

export default App;
