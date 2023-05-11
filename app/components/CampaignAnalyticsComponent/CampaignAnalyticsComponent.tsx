import styles from "./CampaignAnalyticsComponent.module.scss";
import DateSelectionComponent from "../DateSelectionComponent/DateSelectionComponent";
import CampaignInforList from "../CampaignInforList/CampaignInforList";

export default function CampaignAnalyticsComponent() {
  return (
    <div className={styles.campaignAnalyticsComponent}>
      {/* SMALL FLEX CONTAINER OF HEADING AND DATE PICKER */}
      <div className={styles.campaignAnalyticsComponentSmallFlexContainer}>
        <h2 className={styles.campaignAnalyticsComponentHeading}>
          Campaign Analytics
        </h2>
        <DateSelectionComponent />
      </div>

      {/* CAMPAIGN ANALYTICS INFORMATION LIST */}
      <CampaignInforList />
    </div>
  );
}
