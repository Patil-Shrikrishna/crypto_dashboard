export const fetchAPI = (res) => {
  return {
    type: "FETCH_API",
    payload: res,
  };
};

export const coinIDS = (data) => {
  return {
    type: "COIN_IDS",
    payload: data,
  };
};
