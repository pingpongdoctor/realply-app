import IconComponent from "../IconComponent/IconComponent";
import styles from "./RecentTaskActivityItem.module.scss";

interface Props {
  recentTaskMessage: string;
  recentTaskDueDate: string;
}

export default function RecentTaskActivityItem({
  recentTaskMessage,
  recentTaskDueDate,
}: Props) {
  return (
    <li className={styles.recentTaskActivityItem}>
      <IconComponent
        iconSrc="/assets/icons/3square.png"
        iconWidth={18}
        iconHeight={18}
      />
      <p className={styles.recentTaskActivityItemText}>Upcoming Task -</p>
      <p
        className={`${styles.recentTaskActivityItemText} ${styles.recentTaskActivityItemTextBold}`}
      >
        {recentTaskMessage}
      </p>
      <p className={styles.recentTaskActivityItemText}>due on</p>
      <p
        className={`${styles.recentTaskActivityItemText} ${styles.recentTaskActivityItemTextBold}`}
      >
        {recentTaskDueDate}.
      </p>
    </li>
  );
}
