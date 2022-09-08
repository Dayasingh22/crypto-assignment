import React from "react";
import ReactHighcharts from "react-highcharts/ReactHighstock.src";
import data from "./data.json";
import data2 from "./data2.json";
import data3 from "./data3.json";

const HighChart = () => {
  var seriesOptions = [
    { name: "Google", data: data },
    { name: "Apple", data: data2 },
    { name: "Microsoft", data: data3 },
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
      text: `Stock Chart`,
    },

    plotOptions: {
      series: {
        compare: "percent",
        showInNavigator: true,
      },
    },

    tooltip: {
      pointFormat:
        '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
      valueDecimals: 2,
      split: true,
    },

    series: seriesOptions,
  };
  return (
    <div className="mt-6">
      <ReactHighcharts config={configPrice}></ReactHighcharts>
    </div>
  );
};

export default HighChart;
