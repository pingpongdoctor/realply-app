"use client";

import styles from "./DoughnutChartComponent.module.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Invitations sent", "Pending invitations", "Profile views"],
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
        boxWidth: 8,
        boxHeight: 8,
        font: {
          size: 10,
          family: "var(--font-roboto)",
        },
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
