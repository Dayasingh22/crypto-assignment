import React, { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import Coin from "./Coin";
import CoinsTableHead from "./CoinsTableHead";

const ALlCurrencies = (props) => {

  return (
    <Fragment>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-[700px] mx-auto mt-8">
          <CoinsTableHead />
          {!props.loadingStatus && (
            <tbody>
              {props.allCoins
                .map((each, index) => {
                  return (
                    <Coin
                      themeStatus={props.theme}
                      key={each.id}
                      num={index + 1}
                      eachData={each}
                      onSetOpenModal={props.onCloseModalHandler}
                    />
                  );
                })}
            </tbody>
          )}
        </table>
        {props.loadingStatus && (
          <div className="z-0">
            <Skeleton className="h-12 my-2" count={5} />
          </div>
        )}
        {!props.loadingStatus && props.errorCoin && (
          <div className="text-center font-medium">
            <p>{props.errorCoin}</p>
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default ALlCurrencies;
