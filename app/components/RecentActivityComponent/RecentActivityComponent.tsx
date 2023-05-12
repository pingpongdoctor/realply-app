import RecentActivityList from "../RecentActivityList/RecentActivityList";
import TimeFilterComponent from "../TimeFilterComponent/TimeFilterComponent";
import styles from "./RecentActivityComponent.module.scss";

export default function RecentActivityComponent() {
  return (
    <div className={styles.recentActivityComponent}>
      <h2 className={styles.recentActivityComponentHeading}>Recent Activity</h2>
      <TimeFilterComponent />
      <RecentActivityList />
    </div>
  );
}
