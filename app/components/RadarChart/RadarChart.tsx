import styles from "./RadarChart.module.scss";
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

export const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      data: [2, 9, 3, 5, 2, 3, 3],
      backgroundColor: "rgba(194, 236, 193, 0.3)",
      borderColor: "#c2ecc1",
      borderWidth: 1,
    },
  ],
};

export function RadarChart() {
  return (
    <div>
      <Radar data={data} />
    </div>
  );
}
