export const CoinList = async () => {
  const URL =
    "https://api.coingecko.com/api/v3/coins/list?include_platform=true";
  const currency = "usd";
  const orderBy = "market_cap_desc";
  const timePeriod = "24h";
  const res = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data.map(({ id }) => id))
    .then((data) =>
      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${data.toString()}&order=${orderBy}&per_page=50&page=1&sparkline=false&price_change_percentage=${timePeriod}&locale=en`
      )
    );
};

// export const CoinListData = async () => {
//   // const coinIDs = useSelector((state) => state.apiReducer);

//   const currency = "usd";
//   const orderBy = "market_cap_desc";
//   const timePeriod = "24h";
//   const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinIDs}&order=${orderBy}&per_page=50&page=1&sparkline=false&price_change_percentage=${timePeriod}&locale=en`;

//   const res = await fetch(url);
//   console.log("coinIDS", await res.json());
// };
// // CoinListData();
// export const coinChartData = async () => {
//   const listURL =
//     "https://api.coingecko.com/api/v3/coins/list?include_platform=true";

//   const listRes = await fetch(listURL);
//   const listData = await listRes.json();
//   console.log("listData", listData[0]);
// };

// CoinList();
