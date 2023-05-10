"use client";

import styles from "./BarChartComponent.module.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export const options = {
  responsive: true,
  //false value allows changing the width and height freely
  maintainAspectRatio: false,
  y: {
    max: 800,
    min: 0,
    ticks: {
      // forces step size to be 100 units
      stepSize: 100,
    },
  },
};

const labels = [""];

export const data = {
  labels,
  datasets: [
    {
      data: [420],
      backgroundColor: "#c2ecc1",
      categoryPercentage: 0.92,
    },
    {
      data: [290],
      backgroundColor: "#1f1f1f",
      categoryPercentage: 0.92,
    },
    {
      data: [740],
      backgroundColor: "#c5c7f6",
      categoryPercentage: 0.92,
    },
  ],
};

export default function ColumnChartComponent() {
  return (
    <div>
      <Bar
        style={{ width: "100%", height: "305px" }}
        options={options}
        data={data}
      />
      <div></div>
    </div>
  );
}
