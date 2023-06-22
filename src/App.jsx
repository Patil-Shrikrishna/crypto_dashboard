import DropDown from "./components/DropDown";
import Search from "./components/Search";
import React,{useState} from 'react';
import ButtonComp from './components/ButtonComp';
import MarketCapCards from './components/MarketCapCards';
import CardTittle from './components/CardTittle';
import {BsFillCaretUpFill } from "react-icons/bs";

function App() {

  return (
    <main>
      
      <DropDown  value1={"Chart types"} value2={"Line"} 
      value3={"Bar chart vertical"} value4={"Bar chart horizontal"}/>
      <Search/>
      <ButtonComp name="Exchange" />
      <CardTittle Heading="Cryptocurrency by market cap"/>
      <MarketCapCards icon = {<BsFillCaretUpFill/>} cryptoName='Bitcoin' MarketCap='$196,235' changePercent={'2.14'}/>
      
    </main>
  );
}

export default App;
