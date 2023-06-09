"use client";

import styles from "./DoughnutChartComponent.module.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

//DEFINE DATA
export const data = {
  labels: ["Invitations sent", "Pending invitations", "Profile views"],
  datasets: [
    {
      data: [30, 30, 30],
      backgroundColor: ["#c2ecc1", "#1f1f1f", "#c5c7f6"],
    },
  ],
};

//GET DATA TYPE FOR THE OPTIONS
type DoughnutChartOptions = Parameters<typeof Doughnut>[0]["options"];

//DEFINE OPTIONS
const options: DoughnutChartOptions = {
  maintainAspectRatio: true,
  responsive: true,
  plugins: {
    legend: {
      rtl: false,
      position: "bottom",

      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        color: "#94979a",
        padding: 8,
        boxWidth: 8,
        boxHeight: 8,
        font: {
          size: 8,
          family: "Roboto",
        },
      },

      title: {
        display: true,
      },
    },
  },
};

export function DoughnutChartComponent() {
  return (
    <div className={styles.doughnutChartComponent}>
      <Doughnut options={options} style={{ width: 224 }} data={data} />
    </div>
  );
}
