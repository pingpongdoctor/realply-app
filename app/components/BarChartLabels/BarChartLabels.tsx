import React from "react";
import BarChartLabel from "../BarChartLabel/BarChartLabel";
import styles from "./BarChartLabels.module.scss";

export default function BarChartLabels() {
  //DEFINE THE CHART LABEL INFORMATION ARRAY
  const barChartLabelInforArr: BarChartLabelInforObj[] = [
    {
      labelContent: "Connections",
      labelColorClassname: "barChartLabelSquareDivConnections",
    },
    {
      labelContent: "Followers",
      labelColorClassname: "barChartLabelSquareDivFollowers",
    },
    {
      labelContent: "Connect Invites",
      labelColorClassname: "barChartLabelSquareDivInvites",
    },
  ];

  return (
    <ul className={styles.barChartLabels}>
      {barChartLabelInforArr.map((barChartLabelInfor, index) => (
        <BarChartLabel
          key={index}
          barChartLabelColorClassName={barChartLabelInfor.labelColorClassname}
          barChartContent={barChartLabelInfor.labelContent}
        />
      ))}
    </ul>
  );
}
