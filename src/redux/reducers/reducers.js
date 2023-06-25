const iniState = { data: [], coinIDS: [] };

export const apiReducer = (state = iniState, { type, payload }) => {
  switch (type) {
    case "FETCH_API":
      return { ...state, data: payload };

    case "COIN_IDS":
      return { ...state, coinIDS: payload };

    default:
      return state;
  }
};
