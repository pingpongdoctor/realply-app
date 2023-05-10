import DashboardInforList from "../DashboardInforList/DashboardInforList";
import styles from "./DashboardComponent.module.scss";

export default function DashboardComponent() {
  return (
    <div className={styles.dashboardComponent}>
      <h1 className={styles.dashboardComponentHeading}>Dashboard</h1>
      <DashboardInforList />
    </div>
  );
}
