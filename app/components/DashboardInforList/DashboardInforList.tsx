import DashboardInforItem from "../DashboardInforItem/DashboardInforItem";
import styles from "./DashboardInforList.module.scss";

export default function DashboardInforList() {
  //DEFINE DASHBOARD INFORMATION ARRAY
  const dashboardInforArr: DashBoardInforObj[] = [
    {
      inforName: "Connections",
      inforValue: 2632,
      inforValueInPercent: 56,
    },
    {
      inforName: "Followers",
      inforValue: 2667,
      inforValueInPercent: 0,
    },
    {
      inforName: "Connect Invites",
      inforValue: 100,
      inforValueInPercent: 60,
    },
  ];
  return (
    <ul className={styles.dashboardList}>
      {dashboardInforArr.map((dashboardInfor, index) => (
        <DashboardInforItem
          key={index}
          inforName={dashboardInfor.inforName}
          inforValue={dashboardInfor.inforValue}
          inforValueInPercent={dashboardInfor.inforValueInPercent}
        />
      ))}
    </ul>
  );
}
