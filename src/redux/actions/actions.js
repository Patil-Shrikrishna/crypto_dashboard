export const marketAction = (data) => {
  return {
    type: "FETCH_MARKET",
    payload: data,
  };
};

export const listAction = (data) => {
  return {
    type: "COIN_LIST",
    payload: data,
  };
};
