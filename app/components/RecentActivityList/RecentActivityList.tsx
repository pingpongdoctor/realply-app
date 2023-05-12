import RecentActivityItem from "../RecentActivityItem/RecentActivityItem";
import RecentTaskActivityItem from "../RecentTaskActivityItem/RecentTaskActivityItem";
import styles from "./RecentActivityList.module.scss";

export default function RecentActivityList() {
  //RECENT ACTIVITY ARRAY
  const recentActivityArray: (RecentActivityInforObj | RecentTaskInforObj)[] = [
    {
      activityType: "normal",
      activityAvaSrc: process.env.AVATAR_URL_2 || "",
      activityUserName: "Alex Morgan",
      activityAction: "message",
    },
    {
      activityType: "normal",
      activityAvaSrc: process.env.AVATAR_URL_3 || "",
      activityUserName: "Mujo Prosper",
      activityAction: "connection request",
    },
    {
      activityType: "task",
      recentTaskMessage: "Create a campaign for designers",
      recentTaskDueDate: "02/04/2023",
    },
    {
      activityType: "normal",
      activityAvaSrc: process.env.AVATAR_URL_3 || "",
      activityUserName: "Mujo Prosper",
      activityAction: "connection request",
    },
    {
      activityType: "task",
      recentTaskMessage: "Create a campaign for designers",
      recentTaskDueDate: "04/04/2023",
    },
  ];

  return (
    <ul className={styles.recentActivityList}>
      {recentActivityArray.map((recentActivityObj, index) => {
        // RENDER NORMAL ACTIVITY
        if (recentActivityObj.activityType === "normal") {
          return (
            <RecentActivityItem
              key={index}
              recentActivityItemAvaSrc={
                (recentActivityObj as RecentActivityInforObj).activityAvaSrc
              }
              recentActivityItemUserName={
                (recentActivityObj as RecentActivityInforObj).activityUserName
              }
              recentActivityItemAction={
                (recentActivityObj as RecentActivityInforObj).activityAction
              }
            />
          );
        }

        // RENDER TASK
        if (recentActivityObj.activityType === "task") {
          return (
            <RecentTaskActivityItem
              key={index}
              recentTaskMessage={
                (recentActivityObj as RecentTaskInforObj).recentTaskMessage
              }
              recentTaskDueDate={
                (recentActivityObj as RecentTaskInforObj).recentTaskDueDate
              }
            />
          );
        }
      })}
    </ul>
  );
}
