import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import BackDrop from "./BackDrop";
import DownloadCSV from "./DownloadCSV";

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop
          onClick={() => {
            props.onsetModal();
          }}
        />,
        document.getElementById("modal")
      )}{" "}
      {ReactDOM.createPortal(
        <DownloadCSV
          theme={props.themeStatus}
          csvCardano={props.csvCardano}
          csvXrp={props.csvXrp}
          csvMatic={props.csvMatic}
        />,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};
export default Modal;
