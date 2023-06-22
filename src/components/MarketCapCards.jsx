/* eslint-disable react/prop-types */
const MarketCapCards = ({
  coin,
  icon,
  marketCap,
  marketClass,
  changePercent,
}) => {
  return (
    <li className="flex justify-between gap-5 pb-2 border-b ">
      <div>
        <h2 className="text-md font-medium  text-black">{coin}</h2>
        <h3 className="text-gray-400 text-xs">{"Mkt.Cap " + marketCap}</h3>
      </div>
      <p className={`${marketClass} flex items-center text-sm mt-2`}>
        <span className="text-xl ">{icon}</span>
        {`${changePercent}%`}
      </p>
    </li>
  );
};

export default MarketCapCards;
