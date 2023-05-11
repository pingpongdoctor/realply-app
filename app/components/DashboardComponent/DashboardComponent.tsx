import BarChartComponent from "../BarChartComponent/BarChartComponent";
import BarChartLabels from "../BarChartLabels/BarChartLabels";

import DashboardInforList from "../DashboardInforList/DashboardInforList";
import styles from "./DashboardComponent.module.scss";

export default function DashboardComponent() {
  return (
    <div className={styles.dashboardComponent}>
      {/* HEADING TEXT */}
      <h1 className={styles.dashboardComponentHeading}>Dashboard</h1>

      {/* DASHBOARD INFORMATION LIST */}
      <DashboardInforList />

      {/* BAR CHART */}
      <BarChartComponent />

      {/* BAR CHART LABELS */}
      <BarChartLabels />
    </div>
  );
}
