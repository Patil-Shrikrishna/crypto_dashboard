import CardTittle from "../components/CardTittle";
import DropDown from "../components/DropDown";
import MarketCapCards from "../components/MarketCapCards";
import Search from "../components/Search";
import { IoMdArrowDropup } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import ButtonComp from "../components/ButtonComp";
import { PiCalendarLight } from "react-icons/pi";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartUtils,
} from "chart.js";
const Utils = ChartUtils.init();
ChartJS.register(ArcElement, Tooltip, Legend);
const pieData = {
  labels: ["Luna", "Tether", "Ethereum"],
  datasets: [
    {
      label: "My First Dataset",
      data: [250, 375, 375],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};
const pieConfig = {
  type: "pie",
  data: pieData,
};

const labels = Utils.months({ count: 7 });
const lineData = {
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};
const lineConfig = {
  type: "line",
  data: lineData,
};

const filterArray = [
  {
    id: 1,
    text: "1D",
  },
  {
    id: 2,
    text: "1D",
  },
  {
    id: 3,
    text: "1D",
  },
  {
    id: 4,
    text: "1D",
  },
  {
    id: 5,
    text: "1D",
  },
  {
    id: 6,
    text: <PiCalendarLight className="text-2xl" />,
  },
];

const Home = () => {
  const filterCurrency = filterArray.map(({ id, text }) => (
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

        <div className="col-span-8 row-span-2 col-start-2 row-start-2 flex items-center justify-between">
          {/* here */}

          <div>
            <ul className="flex items-center gap-3">{filterCurrency}</ul>
          </div>

          <div className="space-x-4">
            <DropDown value={"Cryptocurrency"} />

            <DropDown value={"Chart type"} />
          </div>

          <Line options={lineConfig} data={lineData} />
        </div>
        <div className="grid grid-cols-12 grid-rows-2 space-x-4">
          <div className="col-span-6 row-span-2  row-start-4 ">
            <Pie options={pieConfig} data={pieData} />
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
