import RecentActivityList from "../RecentActivityList/RecentActivityList";
import TimeFilterComponent from "../TimeFilterComponent/TimeFilterComponent";
import styles from "./RecentActivityComponent.module.scss";

export default function RecentActivityComponent() {
  return (
    <div className={styles.recentActivityComponent}>
      {/* WRAPPER OF THE HEADING TEXT AND THE TIME FILTER */}
      <div className={styles.recentActivityComponentWrapper}>
        <h2 className={styles.recentActivityComponentHeading}>
          Recent Activity
        </h2>
        <TimeFilterComponent />
      </div>

      {/* RECENT ACTIVITY LIST */}
      <RecentActivityList />
    </div>
  );
}
