import AvatarComponent from "../AvatarComponent/AvatarComponent";
import IconComponent from "../IconComponent/IconComponent";
import SearchBoxComponent from "../SearchBoxComponent/SearchBoxComponent";
import UserInforComponent from "../UserInforComponent/UserInforComponent";
import styles from "./CampaignAnalyticsComponent.module.scss";

export default function CampaignAnalyticsComponent() {
  return (
    <div className={styles.campaignAnalyticsComponent}>
      {/* SEARCH BOX */}
      <SearchBoxComponent />

      {/* BELL ICON */}
      <div className={styles.campaignAnalyticsComponentBellIconWrapper}>
        <IconComponent iconSrc="/assets/icons/notification-bing.png" />
      </div>

      <UserInforComponent />
    </div>
  );
}
