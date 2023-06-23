import CardTittle from "../components/CardTittle";
import DropDown from "../components/DropDown";
import MarketCapCards from "../components/MarketCapCards";
import Search from "../components/Search";
import { IoMdArrowDropup } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import ButtonComp from "../components/ButtonComp";
import { PiCalendarLight } from "react-icons/pi";
import { Pie, Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,

} from "chart.js";
import { CategoryScale } from 'chart.js';
import { PieChart } from "../components/charts/PieChart";
import { LineChart } from "../components/charts/LineChart";
// import { barData, barConfig } from "../chartData/bar";
import { lineData, lineConfig } from "../chartData/line";

import { pieData, pieConfig } from "../chartData/pie";

// import pieData from "../chartData/pie";
// import pieConfig from "../chartData/pie";

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
            <DropDown value={"Salena"} />
            <div className=" border w-full rounded-md flex items-center gap-2 px-2 bg-white">
              <span className="border-r">
                <BsSearch className=" mx-2" />
              </span>
              <Search />
            </div>
          </div>
        </div>

        <div className="col-span-8 row-span-2 col-start-2 row-start-2 flex items-center justify-between flex-col">
          {/* here */}
          <div className="flex">
            <ul className="flex items-center gap-3">{currencyChart}</ul>
            <DropDown value={"Cryptocurrency"} />
            <DropDown value={"Chart type"} />
          </div>

          {/* <div className="space-x-4">
            <DropDown value={"Cryptocurrency"} />
            <DropDown value={"Chart type"} />
          </div> */}

          <div className="">
            <LineChart options={lineConfig} data={lineData} />
          </div>
        </div>
        <div className="grid grid-cols-12 grid-rows-2 space-x-4">
          <div className="col-span-6 row-span-2  row-start-4 ">
            <PieChart options={pieConfig} data={pieData} />
          </div>
          <div className="col-span-6 row-span-2  row-start-4 bg-red-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            adipisci sunt dolore at beatae quos labore voluptatum soluta commodi
            ipsam voluptates architecto voluptas deserunt explicabo odit odio,
            debitis mollitia quo animi earum repudiandae tempore, repellendus
            iste? Rerum eveniet sequi eos? Recusandae tempora accusantium aut id
            dignissimos repudiandae eveniet quas suscipit, accusamus
            repellendus? Iure iste labore ut ullam rerum inventore, deleniti
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            adipisci sunt dolore at beatae quos labore voluptatum soluta commodi
            ipsam voluptates architecto voluptas deserunt explicabo odit odio,
            debitis mollitia quo animi earum repudiandae tempore, repellendus
            iste? Rerum eveniet sequi eos? Recusandae tempora accusantium aut id
            dignissimos repudiandae eveniet quas suscipit, accusamus
            repellendus? Iure iste labore ut ullam rerum inventore, deleniti
          </div>
        </div>
      </div>

      <div className="col-span-2 row-span-5 col-start-10">
        <div className="col-span-2 row-span-5 col-start-10 row-start-1 row-end-5 p-6 rounded-md bg-white shadow-md">
          <CardTittle title={"Cryptocurrency by market cap"} />
          <ul className="space-y-2  overflow-y-scroll h-[calc(100vh-21rem)] myclass">
            <MarketCapCards
              icon={<IoMdArrowDropup />}
              marketCap={"20938"}
              coin={"Bitcoin"}
              changePercent={"12.2"}
              marketClass={"text-green-700"}
            />
            <MarketCapCards
              icon={<IoMdArrowDropup />}
              marketCap={"20938"}
              coin={"Bitcoin"}
              changePercent={"12.2"}
              marketClass={"text-green-700"}
            />
            <MarketCapCards
              icon={<IoMdArrowDropup />}
              marketCap={"20938"}
              coin={"Bitcoin"}
              changePercent={"12.2"}
              marketClass={"text-green-700"}
            />{" "}
            <MarketCapCards
              icon={<IoMdArrowDropup />}
              marketCap={"20938"}
              coin={"Bitcoin"}
              changePercent={"12.2"}
              marketClass={"text-green-700"}
            />{" "}
            <MarketCapCards
              icon={<IoMdArrowDropup />}
              marketCap={"20938"}
              coin={"Bitcoin"}
              changePercent={"12.2"}
              marketClass={"text-green-700"}
            />{" "}
            <MarketCapCards
              icon={<IoMdArrowDropup />}
              marketCap={"20938"}
              coin={"Bitcoin"}
              changePercent={"12.2"}
              marketClass={"text-green-700"}
            />{" "}
            <MarketCapCards
              icon={<IoMdArrowDropup />}
              marketCap={"20938"}
              coin={"Bitcoin"}
              changePercent={"12.2"}
              marketClass={"text-green-700"}
            />{" "}
            <MarketCapCards
              icon={<IoMdArrowDropup />}
              marketCap={"20938"}
              coin={"Bitcoin"}
              changePercent={"12.2"}
              marketClass={"text-green-700"}
            />{" "}
            <MarketCapCards
              icon={<IoMdArrowDropup />}
              marketCap={"20938"}
              coin={"Bitcoin"}
              changePercent={"12.2"}
              marketClass={"text-green-700"}
            />{" "}
            <MarketCapCards
              icon={<IoMdArrowDropup />}
              marketCap={"20938"}
              coin={"Bitcoin"}
              changePercent={"12.2"}
              marketClass={"text-green-700"}
            />{" "}
            <MarketCapCards
              icon={<IoMdArrowDropup />}
              marketCap={"20938"}
              coin={"Bitcoin"}
              changePercent={"12.2"}
              marketClass={"text-green-700"}
            />{" "}
            <MarketCapCards
              icon={<IoMdArrowDropup />}
              marketCap={"20938"}
              coin={"Bitcoin"}
              changePercent={"12.2"}
              marketClass={"text-green-700"}
            />
            <MarketCapCards
              icon={<IoMdArrowDropup />}
              marketCap={"20938"}
              coin={"Bitcoin"}
              changePercent={"12.2"}
              marketClass={"text-green-700"}
            />
            <MarketCapCards
              icon={<IoMdArrowDropup />}
              marketCap={"20938"}
              coin={"Bitcoin"}
              changePercent={"12.2"}
              marketClass={"text-green-700"}
            />
            <MarketCapCards
              icon={<IoMdArrowDropup />}
              marketCap={"20938"}
              coin={"Bitcoin"}
              changePercent={"12.2"}
              marketClass={"text-green-700"}
            />
            <MarketCapCards
              icon={<IoMdArrowDropup />}
              marketCap={"20938"}
              coin={"Bitcoin"}
              changePercent={"12.2"}
              marketClass={"text-green-700"}
            />
            <MarketCapCards
              icon={<IoMdArrowDropup />}
              marketCap={"20938"}
              coin={"Bitcoin"}
              changePercent={"12.2"}
              marketClass={"text-green-700"}
            />
            <MarketCapCards
              icon={<IoMdArrowDropup />}
              marketCap={"20938"}
              coin={"Bitcoin"}
              changePercent={"12.2"}
              marketClass={"text-green-700"}
            />
            <MarketCapCards
              icon={<IoMdArrowDropup />}
              marketCap={"20938"}
              coin={"Bitcoin"}
              changePercent={"12.2"}
              marketClass={"text-green-700"}
            />
            <MarketCapCards
              icon={<IoMdArrowDropup />}
              marketCap={"20938"}
              coin={"Bitcoin"}
              changePercent={"12.2"}
              marketClass={"text-green-700"}
            />
            <MarketCapCards
              icon={<IoMdArrowDropup />}
              marketCap={"20938"}
              coin={"Bitcoin"}
              changePercent={"12.2"}
              marketClass={"text-green-700"}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
