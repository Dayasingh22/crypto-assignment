import React, { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import ALlCurrencies from "./AllCurrencies";
import HighChart from "./HighChart";

const CryptoCurrencies = (props) => {
  const [allCryptoCoin, setCryptoCoin] = useState([]);
  const [isLoading, setLoadingState] = useState(false);
  const [error, setError] = useState(null);
  const [showEffect, setShowEffect] = useState(true);

  async function fetchingData() {
    if (showEffect) {
      setLoadingState(true);
    }
    setError(null);
    try {
      let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false`;
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error("Some thing Went Wrong");
      }
      let data = await response.json();
      const filteredResult = data.filter(function (coin) {
        return (
          coin.symbol === "ada" ||
          coin.symbol === "xrp" ||
          coin.symbol === "matic"
        );
      });
      setCryptoCoin(filteredResult);
    } catch (error) {
      setError(error.message);
    }
    setLoadingState(false);
  }

  //fetches data in every 5 seconds
  setTimeout(() => {
    setShowEffect(false);
    fetchingData();
  }, 5000);

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div className="p-8 max-w-[1300px] mx-auto">
      <ALlCurrencies
        theme={props.themeStatus}
        allCoins={allCryptoCoin}
        errorCoin={error}
        loadingStatus={isLoading}
      />
      <HighChart onCloseModalHandler={props.onsetModal} />
    </div>
  );
};
export default CryptoCurrencies;
