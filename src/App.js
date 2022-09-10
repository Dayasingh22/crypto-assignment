import React, { useState } from "react";
import CryptoCurrencies from "./components/cryptocurrencies/CryptoCurrencies";
import NavBar from "./components/navbar/NavBar";
import Modal from "./components/Modal";

const App = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [csvCardano, setCsvCardano] = useState([]);
  const [csvXrp, setCsvXrp] = useState([]);
  const [csvMatic, setCsvMatic] = useState([]);

  const onCloseModalHandler = (ada, xrp, matic) => {
    setModalStatus((status) => !status);
    setCsvCardano(ada);
    setCsvXrp(xrp);
    setCsvMatic(matic);
  };

  return (
    <div>
      <NavBar />
      <CryptoCurrencies themeStatus={true} onsetModal={onCloseModalHandler} />
      {modalStatus && (
        <Modal
          themeStatus={true}
          onsetModal={onCloseModalHandler}
          csvCardano={csvCardano}
          csvXrp={csvXrp}
          csvMatic={csvMatic}
        />
      )}
    </div>
  );
};

export default App;
