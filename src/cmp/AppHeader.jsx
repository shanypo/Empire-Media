import { socketService } from "../services/socketService";
import btc from "../assets/img/btc.png";
import { useEffect, useState } from "react";
const WebSocket = require("isomorphic-ws");

export const AppHeader = () => {
  const [bitcoinData, setData] = useState();

  useEffect(() => {
    const ws = new WebSocket("wss://wstest.fxempire.com?token=btctothemoon");

    ws.onopen = function open() {
      console.log("connected");
      ws.send(`{"type":"SUBSCRIBE","instruments":["cc-btc-usd-cccagg"]}`);
    };

    ws.onmessage = function incoming(data) {
      const newdata = JSON.parse(data.data);
      setData(newdata["cc-btc-usd-cccagg"]);
    };
    return () => {
      ws.onclose = function close() {
        console.log(
          `{"type":"UNSUBSCRIBE","instruments":["cc-btc-usd-cccagg"]}`
        );
      };
    };
  }, []);

  if (!bitcoinData)
    return <div className="page-loading-screen">Loading...</div>;
  return (
    <div className="app-header flex space-between">
      <div className="logo-date">
        <div className="logo flex align-center">
          <img src={btc} alt="btc" />
          <h2>Bitcoin</h2>
        </div>
        <p>As of: {bitcoinData.lastUpdate}</p>
      </div>
      <div className="bitcoin-data flex column">
        <h2>{bitcoinData.last}</h2>
        <div className="change-data flex">
          <p>{bitcoinData.change.toFixed(2)}</p>
          <p>{bitcoinData.percentChange}%</p>
        </div>
      </div>
    </div>
  );
};
