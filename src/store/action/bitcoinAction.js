import { bitcoinService } from "../../services/bitcoinService";

export function loadBitcoinData(timeFrame = "days") {
  return async (dispatch) => {
    try {
      const bitcoinData = await bitcoinService.getData(timeFrame);
      dispatch({ type: "SET_BITCOIN_DATA", bitcoinData });
    } catch (err) {
      console.log(err);
    }
  };
}
