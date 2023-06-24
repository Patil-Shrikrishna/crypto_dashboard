const iniState = { data: ['krishna'] };

export const apiReducer = (state = iniState, { type, payload }) => {
  switch (type) {
    case "FETCH_API":
      return { ...state, data: payload };

    default:
      return state;
  }
};
