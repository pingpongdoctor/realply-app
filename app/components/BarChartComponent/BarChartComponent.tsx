"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

//GET DATA TYPE FOR THE OPTIONS
type BarChartOptions = Parameters<typeof Bar>[0]["options"];

//DEFINE OPTIONS
export const options: BarChartOptions = {
  maintainAspectRatio: false,
  responsive: true,

  plugins: {
    legend: {
      rtl: false,
      position: "bottom",

      labels: {
        color: "#131313",
        textAlign: "right",
        boxPadding: 0.5,
        boxWidth: 15,
        boxHeight: 15,
        useBorderRadius: true,
        borderRadius: 5,
        font: {
          size: 12,
        },
      },
    },
  },

  scales: {
    y: {
      beginAtZero: true,
      min: 0,
      max: 800,
      ticks: {
        stepSize: 100,
        color: "#94979a",
        font: { size: 12, family: "Rubik" },
      },
    },
  },
};

//DEFINE DATA FOR THE BAR CHART
const labels = [""];
export const data = {
  labels,
  datasets: [
    {
      label: "Connections",
      data: [420],
      backgroundColor: "#c2ecc1",
      categoryPercentage: 0.92,
    },
    {
      label: "Followers",
      data: [290],
      backgroundColor: "#1f1f1f",
      categoryPercentage: 0.92,
    },
    {
      label: "Connect Invites",
      data: [740],
      backgroundColor: "#c5c7f6",
      categoryPercentage: 0.92,
    },
  ],
};

export default function BarChartComponent() {
  return (
    <div>
      <Bar
        style={{ width: "100%", height: "330px" }}
        options={options}
        data={data}
      />
    </div>
  );
}
