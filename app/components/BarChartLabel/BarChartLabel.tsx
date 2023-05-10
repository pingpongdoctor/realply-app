import styles from "./BarChartLabel.module.scss";

interface Props {
  barChartLabelColorClassName: string;
  barChartContent: string;
}

export default function BarChartLabel({
  barChartLabelColorClassName,
  barChartContent,
}: Props) {
  return (
    <li className={styles.barChartLabel}>
      <div
        className={`${styles.barChartLabelSquareDiv} ${styles[barChartLabelColorClassName]}`}
      ></div>
      <p className={styles.barChartLabelText}>{barChartContent}</p>
    </li>
  );
}
