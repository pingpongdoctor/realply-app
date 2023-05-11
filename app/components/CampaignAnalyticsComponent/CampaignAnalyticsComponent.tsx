import SearchBoxComponent from "../SearchBoxComponent/SearchBoxComponent";
import styles from "./CampaignAnalyticsComponent.module.scss";

export default function CampaignAnalyticsComponent() {
  return (
    <div className={styles.campaignAnalyticsComponent}>
      <SearchBoxComponent />
    </div>
  );
}
