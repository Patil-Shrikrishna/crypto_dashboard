import React from 'react'

const MarketCapCards = (props) => {
  return (
    <div  className="flex justify-between gap-5 px-6 bg-slate-100">
      <div><h2 className='text-2xl  text-black'>{props.cryptoName}</h2>
      <h3 className="text-gray-400">{"Mkt.Cap " + props.MarketCap+'%'}</h3></div>
      <p className="flex text-xl  mt-2" > <span className="m-2 ">{props.icon}</span>{props.changePercent}</p>
    </div>
  )
}

export default MarketCapCards
