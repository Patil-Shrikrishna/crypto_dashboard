import { useSelector } from "react-redux";
import babyBitcoinChartData from '../data/babyBitcoinChartData.json'
export const Bitcoin = () => {
  // const coinData = useSelector((state) => state.apiReducer);

  return {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First Dataset",
        data: babyBitcoinChartData.prices.map(item => item),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        // tension: 0.1 ,
      },
    ],
  };
};
