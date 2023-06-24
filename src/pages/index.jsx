import CardTittle from "../components/CardTittle";
import DropDown from "../components/DropDown";
import MarketCapCards from "../components/MarketCapCards";
import Search from "../components/Search";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";

import { PiCalendarLight } from "react-icons/pi";
import { Pie, Line, Bar } from "react-chartjs-2";

import ButtonComp from "../components/ButtonComp";

import {
  verticalBarData,
  verticalBarOptions,
} from "../chartData/verticalBarChart";

import { Chart, registerables, CategoryScale } from "chart.js";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

import { PieChart } from "../components/charts/PieChart";
import { LineChart } from "../components/charts/LineChart";
// import { BarChart } from "../components/charts/BarChart";

import { Bitcoin, Tether, Xrp } from "../chartData/line";

import { useEffect, useState } from "react";
import { pieData } from "../chartData/pie";
import { coinListData } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { fetchAPI } from "../redux/actions/actions";

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
    id: 7,
    text: <PiCalendarLight className="text-2xl" />,
  },
];

const charts = [
  {
    id: 1,
    type: "line chart",
  },
  {
    id: 2,
    type: "pie chart",
  },
  {
    id: 3,
    type: "bar chart",
  },
];
const crypto = [
  {
    id: 1,
    type: "Bitcoin",
  },
  {
    id: 2,
    type: "Tether",
  },
  {
    id: 3,
    type: "Xrp",
  },
];

const allCharts = [
  {
    id: 1,
    type: <LineChart data={Bitcoin} />,
  },
  {
    id: 2,
    type: <PieChart data={pieData} />,
  },
];

const currencyType = [
  {
    id: 1,
    type: "usd",
  },
  {
    id: 2,
    type: "eur",
  },
  {
    id: 3,
    type: "jpy",
  },
];

const Home = () => {
  const [showChart, setShowChart] = useState("line chart");

  const [showCoinData, setShowCoinData] = useState("Bitcoin");

  const [chooseCurrency, setChooseCurrency] = useState("usd");

  console.log("currency", chooseCurrency);

  const dispatch = useDispatch();

  const coinData = useSelector((state) => state.apiReducer);

  // console.log(coinData.data);

  useEffect(() => {
    coinListData().then((data) => dispatch(fetchAPI(data)));
  }, []);

  const currencyChart = chartDuration.map(({ id, text }) => (
    <li key={id}>
      <ButtonComp text={text} btnclass={"bg-gray-100 text-black"} />
    </li>
  ));
  const currency = chartDuration.map(({ id, text }) => (
    <li key={id}>
      <ButtonComp text={text} btnclass={"bg-gray-100 text-black"} />
    </li>
  ));

  // const typeOfCurrency = currencyType.map((currency) => currency);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const showcharts = allCharts.map(({ type }, index) => {
    if (showChart == charts[index].type) return type;
    // if (showCoinData == crypto[index].type) return;
  });

  return (
    <div className="grid grid-cols-12 grid-rows-5 gap-4 mt-20">
      <div className="col-span-8 row-span-5 space-y-10 col-start-2">
        <div className="col-span-8 col-start-2 row-start-1">
          <div className="flex items-center gap-4 w-full">
            <DropDown
              value={"usd"}
              chartType={currencyType}
              set={setChooseCurrency}
            />
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
              <DropDown
                value={"Cryptocurrency"}
                chartType={crypto}
                set={setShowCoinData}
              />
              <DropDown
                value={"Chart type"}
                chartType={charts}
                set={setShowChart}
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {showcharts}
            {/* <LineChart data={lineData} /> */}

            <div className=" mx-auto justify-center ">
              {/* <LineChart className="" data={lineData} /> */}
              <Bar options={verticalBarOptions} data={verticalBarData} />
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
            <div className="col-span-6 row-span-2  row-start-4 pl-5 space-y-3">
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
        <div></div>
        <div className="col-span-2 row-span-5 col-start-10">
          <div className="col-span-2 row-span-5 col-start-10 row-start-1 row-end-5 p-6 rounded-md bg-white shadow-md">
            <CardTittle title={"Cryptocurrency by market cap"} />
            <ul className="space-y-2  overflow-y-scroll h-[calc(100vh-21rem)] myclass">
              {coinData.data.map(
                ({
                  id,
                  name,
                  market_cap,
                  market_cap_change_percentage_24h,
                }) => (
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
    </div>
  );
};

export default Home;
