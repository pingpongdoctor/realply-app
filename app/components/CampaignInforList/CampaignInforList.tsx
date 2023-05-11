import CampaignInforItem from "../CampaignInforItem/CampaignInforItem";
import styles from "./CampaignInforList.module.scss";

export default function CampaignInforList() {
  //DEFINE THE CAMPAIGN INFORMATION ARRAY
  const campaignInforArr: CampaignAnalyticsInforObj[] = [
    { inforName: "Invitations sent", inforValue: 286 },
    { inforName: "Pending invitations", inforValue: 12 },
    { inforName: "Profile views", inforValue: 2891 },
  ];

  return (
    <ul className={styles.campaignInforList}>
      {campaignInforArr.map((campaignInforObj) => (
        <CampaignInforItem
          campaignInforItemName={campaignInforObj.inforName}
          campaignInforItemValue={campaignInforObj.inforValue}
        />
      ))}
    </ul>
  );
}
