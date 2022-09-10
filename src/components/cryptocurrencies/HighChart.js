import React, { useState, useEffect } from "react";
import ReactHighcharts from "react-highcharts/ReactHighstock.src";
import { HistoricalChart } from "./api";
import Skeleton from "react-loading-skeleton";

const HighChart = (props) => {
  const [cardano, setCardano] = useState([]);
  const [xrp, setXrp] = useState([]);
  const [matic, setMatic] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const [csvCardano, setCsvCardano] = useState([]);
  const [csvXrp, setCsvXrp] = useState([]);
  const [csvMatic, setCsvMatic] = useState([]);

  async function fetchingData() {
    try {
      let url = HistoricalChart("cardano", 365, "usd");
      let response = await fetch(url);
      let data = await response.json();
      let url2 = HistoricalChart("ripple", 365, "usd");
      let response2 = await fetch(url2);
      let data2 = await response2.json();
      let url3 = HistoricalChart("matic-network", 365, "usd");
      let response3 = await fetch(url3);
      let data3 = await response3.json();
      setCardano(data.prices);
      setXrp(data2.prices);
      setMatic(data3.prices);
      let csvCardano1 = data.prices;
      let temp = csvCardano1.map((price) => {
        price[0] = new Date(price[0]);
        price.push("Cardano");
        price.push("ADA");
      });
      let csvXRP1 = data2.prices;
      let temp2 = csvXRP1.map((price) => {
        price[0] = new Date(price[0]);
        price.push("Ripple");
        price.push("XRP");
      });
      let csvMatic1 = data3.prices;
      let temp3 = csvMatic1.map((price) => {
        price[0] = new Date(price[0]);
        price.push("Matic-network");
        price.push("MATIC");
      });
      setCsvCardano(csvCardano1);
      setCsvXrp(csvXRP1);
      setCsvMatic(csvMatic1);
      setLoadingState(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchingData();
  }, []);

  var seriesOptions = [
    { name: "Ripple (XRP)", data: xrp },
    { name: "Cardano (ADA)", data: cardano },
    { name: "Polygon (MATIC)", data: matic },
  ];

  const configPrice = {
    rangeSelector: {
      selected: 4,
    },

    yAxis: {
      labels: {
        formatter: function () {
          return (this.value > 0 ? " + " : "") + this.value + "%";
        },
      },
      plotLines: [
        {
          value: 0,
          width: 2,
          color: "silver",
        },
      ],
    },

    title: {
      text: `Prices Stock Chart for XRP, ADA, MATIC`,
    },

    plotOptions: {
      series: {
        compare: "percent",
        showInNavigator: true,
      },
    },

    tooltip: {
      pointFormat:
        '<span style="color:{series.color}">{series.name}</span>: <b>${point.y}</b><br/>',
      valueDecimals: 2,
      split: true,
    },

    series: seriesOptions,
  };

  const openMoal = () => {
    props.onCloseModalHandler(csvCardano, csvXrp, csvMatic);
  };

  return (
    <div className="mt-6">
      {!isLoading && (
        <>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            style={{ marginBottom: "29px" }}
            onClick={openMoal}
          >
            Download Crypto CSV
          </button>

          <ReactHighcharts config={configPrice}></ReactHighcharts>
        </>
      )}
      {isLoading && (
        <div className="z-0">
          <Skeleton className="h-12 my-2" count={3} />
        </div>
      )}
    </div>
  );
};

export default HighChart;
