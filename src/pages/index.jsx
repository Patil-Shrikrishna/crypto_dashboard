import CardTittle from "../components/CardTittle";
import DropDown from "../components/DropDown";
import MarketCapCards from "../components/MarketCapCards";
import Search from "../components/Search";
import { IoMdArrowDropup } from "react-icons/io";
import { BsSearch } from "react-icons/bs";

import { PiCalendarLight } from "react-icons/pi";
import { Pie, Line } from "react-chartjs-2";
import { Bar } from 'react-chartjs-2';
import React from 'react';
import ButtonComp from "../components/ButtonComp";
import {
  Chart as ChartJS,
  
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  
   ArcElement,
 
  Legend,
} from 'chart.js';

import { verticalBarData,verticalBarOptions } from "../chartData/verticalBarChart";

import { Chart, registerables } from 'chart.js';

import { CategoryScale } from 'chart.js';
import { PieChart } from "../components/charts/PieChart";
import { LineChart } from "../components/charts/LineChart";
// import { barData } from "../chartData/bar";
import { lineData } from "../chartData/line";
import { pieData } from "../chartData/pie";
// import pieData from "../chartData/pie";


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

const Home = () => {
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
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

 
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

          <div className=" mx-auto justify-center ">
            {/* <LineChart className="" data={lineData} /> */}
             <Bar options={verticalBarOptions } data={verticalBarData} />
          </div>
         
        </div>
        <div className="grid grid-cols-12 grid-rows-2 space-x-4">
          <div className="col-span-6 row-span-2  row-start-4 ">
            <div className="flex justify-between">
              <CardTittle title={'Portfolio'} />
          
              <p>Total Value: <b>$1000</b></p>
            </div>
            <div>
              <PieChart data={pieData} />
             
            </div>
          </div>
          <div className="col-span-6 row-span-2  row-start-4 pl-5 space-y-3">
        <CardTittle title="Exchange Coin"/>
        
       <div className="flex items-start space-x-20">
           <div className="flex"><p className="text-orange-400 px-3">sell</p>
          <DropDown value={"Bitcoin"}/></div>
    
           <div className="flex flex-col relative ">
             <label htmlFor="search" className="text-gray-400 text-xs  absolute -top-5 left-0  "> Enter value
   </label>
    <Search placeholder={"Avl : 0.002BTC"} inputClass={"border w-40 rounded-md  "}/>
           </div>
       
       </div>
       
      
    
       <div className="flex space-x-20"> 
       <div className="flex"
       ><p className="text-green-600 px-3 ">buy</p>
       < DropDown value={"Etheruem"}/></div>
      <p className="text-green-600">23000Eth</p></div>
  

       <div className="text-center"> <ButtonComp text="Exchange"/></div>
       
       
          </div>
        </div>
      </div>
<div>
  
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
