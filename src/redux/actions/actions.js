export const fetchAPI = (res) => {
  return {
    type: "FETCH_API",
    payload: res,
  };
};
