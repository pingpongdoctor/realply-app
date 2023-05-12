import styles from "./CampaignInforItem.module.scss";

interface Props {
  campaignInforItemName: string;
  campaignInforItemValue: number;
}

export default function CampaignInforItem({
  campaignInforItemName,
  campaignInforItemValue,
}: Props) {
  return (
    <li className={styles.campaignInforItem}>
      <p className={styles.campaignInforItemName}>{campaignInforItemName}</p>
      <p className={styles.campaignInforItemValue}>{campaignInforItemValue}</p>
    </li>
  );
}
