import DashboardInforItem from "../DashboardInforItem/DashboardInforItem";
import styles from "./DashboardInforList.module.scss";

export default function DashboardInforList() {
  //DEFINE DASHBOARD INFORMATION ARRAY
  const dashboardInforArr: DashBoardInforObj[] = [
    {
      inforName: "Connections",
      inforNumber: 2632,
      inforPercent: 56,
    },
    {
      inforName: "Followers",
      inforNumber: 2667,
      inforPercent: 0,
    },
    {
      inforName: "Connect Invites",
      inforNumber: 100,
      inforPercent: 60,
    },
  ];
  return (
    <ul className={styles.dashboardList}>
      {dashboardInforArr.map((dashboardInfor, index) => (
        <DashboardInforItem
          inforName={dashboardInfor.inforName}
          inforNumber={dashboardInfor.inforNumber}
          inforPercent={dashboardInfor.inforPercent}
        />
      ))}
    </ul>
  );
}
