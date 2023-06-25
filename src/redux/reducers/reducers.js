const iniState = { coin_Market: [], coin_List: [] };

export const apiReducer = (state = iniState, { type, payload }) => {
  switch (type) {
    case "FETCH_MARKET":
      return { ...state, coin_Market: payload };

    case "COIN_LIST":
      return { ...state, coin_List: payload };

    default:
      return state;
  }
};
