import React,{useState} from 'react';
import ButtonComp from './components/ButtonComp';
import MarketCapCards from './components/MarketCapCards';
import CardTittle from './components/CardTittle';
import {BsFillCaretUpFill } from "react-icons/bs";

function App() {

  return (
    <main>
      <ButtonComp name="Exchange" />
      <CardTittle Heading="Cryptocurrency by market cap"/>
      <MarketCapCards icon = {<BsFillCaretUpFill/>} cryptoName='Bitcoin' MarketCap='$196,235' changePercent={'2.14'}/>
      
    </main>
  );
}

export default App;
