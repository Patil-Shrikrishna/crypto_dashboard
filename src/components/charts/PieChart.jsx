import React from "react";
import { Pie } from "react-chartjs-2";

export const PieChart = ({ data, options }) => {
  return <Pie options={options} data={data} />;
};
