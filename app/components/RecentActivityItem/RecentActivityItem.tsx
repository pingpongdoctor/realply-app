import AvatarComponent from "../AvatarComponent/AvatarComponent";
import styles from "./RecentActivityItem.module.scss";

interface Props {
  recentActivityItemAvaSrc: string;
  recentActivityItemUserName: string;
  recentActivityItemAction: string;
}

export default function RecentActivityItem({
  recentActivityItemAvaSrc,
  recentActivityItemUserName,
  recentActivityItemAction,
}: Props) {
  return (
    <li className={styles.recentActivityItem}>
      <AvatarComponent
        avatarAlt="activity-avatar"
        avatarSrc={recentActivityItemAvaSrc}
        avatarHeightInPixel={36}
        avatarWidthInPixel={36}
      />
      <p
        className={`${styles.recentActivityItemText} ${styles.recentActivityItemTextBold}`}
      >
        {recentActivityItemUserName}
      </p>
      <p className={styles.recentActivityItemText}>sent you a</p>

      <p
        className={`${styles.recentActivityItemText} ${styles.recentActivityItemTextBold}`}
      >
        {recentActivityItemAction}.
      </p>
    </li>
  );
}
