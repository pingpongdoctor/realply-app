import CampaignAnalyticsComponent from "../CampaignAnalyticsComponent/CampaignAnalyticsComponent";
import IconComponent from "../IconComponent/IconComponent";
import RecentActivityComponent from "../RecentActivityComponent/RecentActivityComponent";
import SearchBoxComponent from "../SearchBoxComponent/SearchBoxComponent";
import UserInforComponent from "../UserInforComponent/UserInforComponent";
import styles from "./DashboardDetailedComponent.module.scss";

export default function DashboardDetailedComponent() {
  return (
    <div className={styles.DashboardDetailedComponent}>
      <div className={styles.DashboardDetailedComponentContainer}>
        {/* FLEX CONTAINER OF SEARCH BOX, BELL ICON AND USER INFORMATION COMPONENT */}
        <div className={styles.DashboardDetailedComponentFlexContainer}>
          {/* SEARCH BOX */}
          <SearchBoxComponent />
          {/* BELL ICON */}
          <div className={styles.DashboardDetailedComponentBellIconWrapper}>
            <IconComponent iconSrc="/assets/icons/notification-bing.png" />
          </div>
          {/* USER INFORMATION COMPONENT*/}
          <UserInforComponent />
        </div>

        {/* CAMPAIGN ANALYTICS */}
        <CampaignAnalyticsComponent />

        {/* RECENT ACTIVITY COMPONENT */}
        <RecentActivityComponent />
      </div>
    </div>
  );
}
