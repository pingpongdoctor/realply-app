"use client";

import styles from "./DoughnutChartComponent.module.scss";
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

type DoughnutChartOptions = Parameters<typeof Doughnut>[0]["options"];

const options: DoughnutChartOptions = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      rtl: true,
      position: "bottom",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        padding: 20,
      },
    },
  },
};

export function DoughnutChartComponent() {
  return (
    <div>
      <Doughnut
        options={options}
        style={{ width: "100%", aspectRatio: "1 / 1" }}
        data={data}
      />
    </div>
  );
}
