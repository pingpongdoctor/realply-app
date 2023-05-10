import IconComponent from "../IconComponent/IconComponent";
import styles from "./DashboardInforItem.module.scss";

interface Props {
  inforName: string;
  inforNumber: number;
  inforPercent: number;
}

export default function DashboardInforItem({
  inforName,
  inforNumber,
  inforPercent,
}: Props) {
  return (
    <li className={styles.dashboardInforItem}>
      <p className={styles.dashboardInforItemName}>{inforName}</p>
      <div className={styles.dashboardInforItemWrapper}>
        <p className={styles.dashboardInforItemNumber}>{inforNumber}</p>
        <div className={styles.dashboardInforItemSmallWrapper}>
          <IconComponent
            IconSrc="/assets/icons/trend-up.png"
            IconClassName="iconOfDashBoardInfor"
          />
          <p className={styles.dashboardInforItemPercent}>{inforPercent}</p>
        </div>
      </div>
    </li>
  );
}
