import CampaignAnalyticsComponent from "./components/CampaignAnalyticsComponent/CampaignAnalyticsComponent";
import DashboardComponent from "./components/DashboardComponent/DashboardComponent";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <DashboardComponent />
      <CampaignAnalyticsComponent />
    </main>
  );
}
