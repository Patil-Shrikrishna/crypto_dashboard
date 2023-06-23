const currency = "usd";
const page = 1;

export const coinListData = async () => {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&coin&order=market_cap_desc&per_page=50&page=${page}&sparkline=false&locale=en`;

  const res = await fetch(url);
  return await res.json();
};
