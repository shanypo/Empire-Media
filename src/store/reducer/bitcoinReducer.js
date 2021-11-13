const INITIAL_STATE = {
  bitcoinData: [],
};

export function bitcoinReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_BITCOIN_DATA":
      return {
        ...state,
        bitcoinData: action.bitcoinData,
      };
    default:
      return state;
  }
}
