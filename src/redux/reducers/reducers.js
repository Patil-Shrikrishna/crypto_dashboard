const iniState = [];

export const apiReducer = (state = iniState, { type, payload }) => {
  switch (type) {
    case "FETCH_API":
      return [...state, payload];

    default:
      return state;
  }
};
