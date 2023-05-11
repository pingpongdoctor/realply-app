import BarChartComponent from "../BarChartComponent/BarChartComponent";
import BarChartLabels from "../BarChartLabels/BarChartLabels";
import DashboardInforList from "../DashboardInforList/DashboardInforList";
import styles from "./DashboardGeneralComponent.module.scss";

export default function DashboardGeneralComponent() {
  return (
    <div className={styles.dashboardGeneralComponent}>
      {/* HEADING TEXT */}
      <h1 className={styles.dashboardGeneralComponentHeading}>Dashboard</h1>

      {/* DASHBOARD INFORMATION LIST */}
      <DashboardInforList />

      {/* BAR CHART */}
      <BarChartComponent />

      {/* BAR CHART LABELS */}
      <BarChartLabels />
    </div>
  );
}
