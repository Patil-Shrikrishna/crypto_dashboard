// export const CoinList = async () => {
//   const URL =
//     "https://api.coingecko.com/api/v3/coins/list?include_platform=true";

//   const res = await fetch(URL).then((res) => res.json());
//   return res;
// };

// export const coinMarket = async () => {
//   console.log("Coin Market called");
//   const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en
// `;
//   // const currency = "usd";
//   // const orderBy = "market_cap_desc";
//   // const timePeriod = "24h";

//   const res = await fetch(URL, { mode: 'no-cors' })
//   // console.log("res.json()--", await res.json());
//   return await res.json();

//   // .then((res) => res.json());
//   //   .then((data) => data.json());
//   // console.log("res", res);
//   // return res;
// };

export const coinMarket = async () => {
  const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en`;

  try {
    const res = await fetch(URL);

    if (!res.ok) {
      throw new Error('Request failed with status: ' + res.status);
    }

    return await res.json();
  } catch (error) {
    console.error('An error occurred while fetching the coin market:', error);
    throw error;
  }
};