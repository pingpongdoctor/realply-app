"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["", "", ""],
  datasets: [
    {
      data: [30, 30, 30],
      backgroundColor: ["#c2ecc1", "#1f1f1f", "#c5c7f6"],
    },
  ],
};

export function DoughnutChartComponent() {
  return (
    <div>
      <Doughnut style={{ width: 178, height: 178 }} data={data} />
    </div>
  );
}
