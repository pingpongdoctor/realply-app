import styles from "./CampaignAnalyticsComponent.module.scss";
import DateSelectionComponent from "../DateSelectionComponent/DateSelectionComponent";

export default function CampaignAnalyticsComponent() {
  return (
    <div className={styles.campaignAnalyticsComponent}>
      <h2 className={styles.campaignAnalyticsComponentHeading}>
        Campaign Analytics
      </h2>
      <DateSelectionComponent />
    </div>
  );
}
