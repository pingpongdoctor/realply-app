import DashboardDetailedComponent from "./components/DashboardDetailedComponent/DashboardDetailedComponent";
import DashboardGeneralComponent from "./components/DashboardGeneralComponent/DashboardGeneralComponent";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <DashboardGeneralComponent />
      <DashboardDetailedComponent />
    </main>
  );
}
