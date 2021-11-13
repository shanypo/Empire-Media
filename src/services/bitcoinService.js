import axios from "axios";
import { serviceStorage } from "./storageService";

export const bitcoinService = {
  getData,
};

// const gData = {
//   last,
//   change,
//   precentChange,
//   lastUpdate,
// };

const MINUTE_URL =
  "https://www.fxempire.com/api/v1/en/crypto-coin/chart/candles/histominute?aggregate=1&e=CCCAGG&fsym=BTC&tsym=usd&limit=30";
const FIVE_MINUTE_URL =
  "https://www.fxempire.com/api/v1/en/crypto-coin/chart/candles/histominute?aggregate=5&e=CCCAGG&fsym=BTC&tsym=usd&limit=30";
const HOUR_URL =
  "https://www.fxempire.com/api/v1/en/crypto-coin/chart/candles/histohour?aggregate=1&e=CCCAGG&fsym=BTC&tsym=usd&limit=30";
const DAYS_URL =
  "https://www.fxempire.com/api/v1/en/crypto-coin/chart/candles/histoday?aggregate=7&e=CCCAGG&fsym=BTC&tsym=usd&limit=30";

async function getData(data) {
  var url = "";
  switch (data) {
    case "minute":
      url = MINUTE_URL;
      break;
    case "fiveMinutes":
      url = FIVE_MINUTE_URL;
      break;
    case "hour":
      url = HOUR_URL;
      break;
    case "days":
      url = DAYS_URL;
      break;
  }

  const priceChange =
    serviceStorage.loadFromStorage(data) || (await axios.get(url));
  serviceStorage.storeToStorage(data, priceChange);
  return priceChange.data.data;
}
