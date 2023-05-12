import styles from "./CampaignAnalyticsComponent.module.scss";
import DateSelectionComponent from "../DateSelectionComponent/DateSelectionComponent";
import CampaignInforList from "../CampaignInforList/CampaignInforList";
import { DoughnutChartComponent } from "../DoughnutChartComponent/DoughnutChartComponent";
import { RadarChartComponent } from "../RadarChartComponent/RadarChartComponent";
import { Suspense } from "react";

export default function CampaignAnalyticsComponent() {
  return (
    <div className={styles.campaignAnalyticsComponent}>
      {/* SMALL FLEX CONTAINER OF HEADING AND DATE PICKER */}
      <div className={styles.campaignAnalyticsComponentSmallFlexContainer}>
        <h2 className={styles.campaignAnalyticsComponentHeading}>
          Campaign Analytics
        </h2>
        <DateSelectionComponent />
      </div>

      {/* CAMPAIGN ANALYTICS INFORMATION LIST */}
      <CampaignInforList />

      {/* BIG FLEX CONTAINER FOR DOUGHNUT AND RADAR CHARTS */}
      <div className={styles.campaignAnalyticsComponentBigFlexContainer}>
        <Suspense fallback={<p>Loading Chart...</p>}>
          <DoughnutChartComponent />
        </Suspense>

        <Suspense fallback={<p>Loading Chart...</p>}>
          <RadarChartComponent />
        </Suspense>
      </div>
    </div>
  );
}
