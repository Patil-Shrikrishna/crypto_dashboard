import CardTittle from "../components/CardTittle";
import DropDown from "../components/DropDown";
import MarketCapCards from "../components/MarketCapCards";
import Search from "../components/Search";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import ButtonComp from "../components/ButtonComp";
import { PiCalendarLight } from "react-icons/pi";
import { Chart, registerables } from "chart.js";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { PieChart } from "../components/charts/PieChart";
import { LineChart } from "../components/charts/LineChart";
// import { BarChart } from "../components/charts/BarChart";

import { Bitcoin } from "../chartData/line";
import babyBitcoinChartData from '../data/babyBitcoinChartData.json'
import apiCoinList from '../data/apiCoinList.json'
import db from "../data/db.json";
import { useEffect } from "react";
import { pieData } from "../chartData/pie";
import { useDispatch, useSelector } from "react-redux";
import { listAction, marketAction } from "../redux/actions/actions";
import { coinMarket } from "../api/api";
Chart.register(...registerables);
ChartJS.register(ArcElement, Tooltip, Legend);

const chartDuration = [
  {
    id: 1,
    text: "1D",
  },
  {
    id: 2,
    text: "1W",
  },
  {
    id: 3,
    text: "1M",
  },
  {
    id: 4,
    text: "6M",
  },
  {
    id: 5,
    text: "1Y",
  },
  {
    id: 6,
    text: <PiCalendarLight className="text-2xl" />,
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const coinData = useSelector((state) => state.apiReducer);
  console.log("coindata", coinData);
  // let abc = apiCoinList?.map(data => data)
  // console.log('listAction.map(data=>data)', apiCoinList);
  useEffect(() => {
    // coinMarket().then((data) => dispatch(marketAction(data)));
    dispatch(listAction(apiCoinList))
    dispatch(marketAction(babyBitcoinChartData))
    // console.log('babyBitcoinChartData',  babyBitcoinChartData.prices.map(item => item));
  }, [dispatch]);


  const currencyChart = chartDuration.map(({ id, text }) => (
    <li key={id}>
      <ButtonComp text={text} btnclass={"bg-gray-100 text-black"} />
    </li>
  ));

  return (
    <div className="grid grid-cols-12 grid-rows-5 gap-4 mt-20">
      <div className="col-span-8 row-span-5 space-y-10 col-start-2">
        <div className="col-span-8 col-start-2 row-start-1">
          <div className="flex items-center gap-4 w-full">
            {/* <DropDown value={"USD"} /> */}

            {
              <DropDown
                list={db.currency.map(({ id, currency }) => (
                  <option key={id} value={currency}>
                    {currency}
                  </option>
                ))}
              />
            }

            <div className=" border w-full rounded-md flex items-center gap-2 px-2 bg-white">
              <span className="border-r">
                <BsSearch className=" mx-2" />
              </span>
              <Search />
            </div>
          </div>
        </div>

        <div className="col-span-8 row-span-2 col-start-2 row-start-2 space-y-4">
          {/* here */}
          <div className="flex justify-between gap-4">
            <ul className="flex items-center gap-3">{currencyChart}</ul>
            <div className="flex items-center gap-4">
              {/* {CurrencyData} */}
              {
                <DropDown
                  list={coinData.coin_List.map(({ id, name }) => (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  ))}
                />
              }
              {
                <DropDown
                  list={db.charts.map(({ id, chart }) => (
                    <option key={id} value={chart}>
                      {chart}
                    </option>
                  ))}
                />
              }
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* {showcharts} */}
            {/* <LineChart data={Bitcoin} /> */}
          </div>
        </div>
        <div className="grid grid-cols-12 grid-rows-2 space-x-4">
          <div className="col-span-6 row-span-2  row-start-4 ">
            <div className="flex justify-between">
              <CardTittle title={"Portfolio"} />
              <p>
                Total Value: <b>$1000</b>
              </p>
            </div>

            <div>
              <PieChart data={pieData} />
            </div>
          </div>
          <div className="col-span-6 row-span-2  row-start-4 space-y-4">
            <CardTittle title="Exchange Coin" />

            <div className="flex items-start space-x-20">
              <div className="flex">
                <p className="text-orange-400 px-3">sell</p>
                <DropDown value={"Bitcoin"} />
              </div>
              <div className="flex flex-col relative ">
                <label
                  htmlFor="search"
                  className="text-gray-400 text-xs  absolute -top-5 left-0  "
                >
                  Enter value
                </label>
                <Search
                  placeholder={"Avl : 0.002BTC"}
                  inputClass={"border w-40 rounded-md  "}
                />
              </div>
            </div>

            <div className="flex space-x-20">
              <div className="flex">
                <p className="text-green-600 px-3 ">buy</p>
                <DropDown value={"Etheruem"} />
              </div>
              <p className="text-green-600">23000Eth</p>
            </div>
            <div className="text-center">
              <ButtonComp text="Exchange" />
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-2 row-span-5 col-start-10">
        <div className="col-span-2 row-span-5 col-start-10 row-start-1 row-end-5 p-6 rounded-md bg-white shadow-md">
          <CardTittle title={"Cryptocurrency by market cap"} />
          <ul className="space-y-2  overflow-y-scroll h-[calc(100vh-21rem)] myclass">
            {coinData.coin_List.map(
              ({ id, name, market_cap, market_cap_change_percentage_24h }) => (
                <MarketCapCards
                  key={id}
                  icon={
                    market_cap_change_percentage_24h < 0 ? (
                      <IoMdArrowDropdown />
                    ) : (
                      <IoMdArrowDropup />
                    )
                  }
                  marketCap={market_cap}
                  coin={name}
                  changePercent={market_cap_change_percentage_24h}
                  marketClass={
                    market_cap_change_percentage_24h < 0
                      ? "text-red-700"
                      : "text-green-700"
                  }
                />
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
