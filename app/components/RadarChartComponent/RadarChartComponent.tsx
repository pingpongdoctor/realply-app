"use client";

import styles from "./RadarChartComponent.module.scss";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type RadarChartOptions = Parameters<typeof Radar>[0]["options"];

const options: RadarChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      rtl: false,
      position: "bottom",

      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        color: "#94979a",
        padding: 30,
        boxWidth: 6,
        boxHeight: 6,
        font: {
          size: 10,
          family: "var(--font-roboto)",
        },
      },
    },
  },

  scales: {
    r: {
      max: 90,
      min: 10,
      beginAtZero: false,
      pointLabels: {
        color: "#00000099",
        font: { size: 8, family: "var(--font-roboto)" },
      },
      ticks: {
        color: "#94979a",
        font: { size: 8, family: "var(--font-roboto)" },
        stepSize: 10,
        count: 9,
      },
    },
  },
};

export const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Campaign 2",
      data: [40, 80, 70, 40, 10, 80, 63],
      backgroundColor: "rgba(197, 199, 246, 0.3)",
      borderColor: "#C5C7F6",
      borderWidth: 1,
    },
    {
      label: "Campaign 1",
      data: [60, 20, 40, 10, 70, 60, 60],
      backgroundColor: "rgba(194, 236, 193, 0.3)",
      borderColor: "#c2ecc1",
      borderWidth: 1,
    },
  ],
};

export function RadarChartComponent() {
  return (
    <div>
      <Radar
        options={options}
        style={{ width: "100%", aspectRatio: "1.06 / 1" }}
        data={data}
      />
    </div>
  );
}
