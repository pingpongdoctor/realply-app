interface LinkInforObj {
  content: string;
  iconSrc: string;
}

interface DashBoardInforObj {
  inforName: string;
  inforValue: number;
  inforValueInPercent: number;
}

interface CampaignAnalyticsInforObj {
  inforName: string;
  inforValue: number;
}

interface BarChartLabelInforObj {
  labelContent: string;
  labelColorClassname: string;
}

interface RecentActivityInforObj {
  activityType: "normal" | "task";
  activityAvaSrc: string;
  activityUserName: string;
  activityAction: string;
}

interface RecentTaskInforObj {
  activityType: "normal" | "task";
  recentTaskMessage: string;
  recentTaskDueDate: string;
}
