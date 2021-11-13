import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadBitcoinData } from "../store/action/bitcoinAction";

export const TimeFrame = () => {
  const [timeFrame, setClass] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBitcoinData());
  }, []);

  const loadData = async (timeFrame) => {
    dispatch(loadBitcoinData(timeFrame));
    setClass(timeFrame);
  };

  return (
    <div className="time-to-show flex">
      <p
        className={`pointer ${timeFrame === "minute" ? "active" : ""}`}
        onClick={() => loadData("minute")}
      >
        1 Minute
      </p>
      <p
        className={`pointer ${timeFrame === "fiveMinutes" ? "active" : ""}`}
        onClick={() => loadData("fiveMinutes")}
      >
        5 Minutes
      </p>
      <p
        className={`pointer ${timeFrame === "hour" ? "active" : ""}`}
        onClick={() => loadData("hour")}
      >
        1 Hour
      </p>
      <p
        className={`pointer ${timeFrame === "hour" ? "active" : ""}`}
        onClick={() => loadData("days")}
      >
        1 Week
      </p>
    </div>
  );
};
