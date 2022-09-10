import React, { useState } from "react";
import { CSVLink } from "react-csv";

const DownloadCSV = (props) => {
  const [data, setData] = useState(props.csvCardano);
  const [fileName, setFileName] = useState("cardano.csv");

  return (
    <div
      className={`w-[95%] max-w-[400px] rounded-2xl fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-1/2 h-[88%] max-h-[200px] z-10 flex flex-col md:flex-row overflow-hidden ${
        props.theme === true ? "bg-white" : "bg-[#0a1929] text-white"
      }`}
    >
      <div class="flex justify-center p-5">
        <div class="mb-3 xl:w-80">
          <select
            class="form-select appearance-none
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="select crypto example"
            onChange={(e) => {
              if (e.target.value === "xrp") {
                setData(props.csvXrp);
                setFileName("xrp.csv");
              } else if (e.target.value === "matic") {
                setData(props.csvMatic);
                setFileName("matic.csv");
              } else {
                setData(props.csvCardano);
                setFileName("cardano.csv");
              }
            }}
          >
            <option selected value="ada">
              Cardano (ADA)
            </option>
            <option value="xrp">Ripple (XRP)</option>
            <option value="matic">Matic (MATIC)</option>
          </select>
          <div className="h-full md:w-[100%] my-5">
            <CSVLink
              data={data}
              filename={fileName}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Download
            </CSVLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DownloadCSV;
