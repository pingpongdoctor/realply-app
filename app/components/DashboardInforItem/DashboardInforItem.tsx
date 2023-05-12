import IconComponent from "../IconComponent/IconComponent";
import styles from "./DashboardInforItem.module.scss";

interface Props {
  inforName: string;
  inforValue: number;
  inforValueInPercent: number;
}

export default function DashboardInforItem({
  inforName,
  inforValue,
  inforValueInPercent,
}: Props) {
  return (
    <li className={styles.dashboardInforItem}>
      <p className={styles.dashboardInforItemName}>{inforName}</p>
      <div className={styles.dashboardInforItemWrapper}>
        <p className={styles.dashboardInforItemNumber}>{inforValue}</p>
        <div className={styles.dashboardInforItemSmallWrapper}>
          <IconComponent
            iconSrc="/assets/icons/trend-up.png"
            iconWidth={16}
            iconHeight={16}
          />
          <p className={styles.dashboardInforItemPercent}>
            {inforValueInPercent}%
          </p>
        </div>
      </div>
    </li>
  );
}
