"use client";

import styles from "./TimeFilterComponent.module.scss";
import { ChangeEvent, useState } from "react";

export default function TimeFilterComponent() {
  const [value, setValue] = useState<string>("24h");

  const handleSetValueState = function (e: ChangeEvent<HTMLSelectElement>) {
    setValue(e.target.value);
  };

  return (
    <select
      className={styles.timeFilterComponent}
      defaultValue={"24h"}
      onChange={handleSetValueState}
      name="time-filter"
    >
      <option value="1h">Last 1h</option>
      <option value="24h">Last 24h</option>
      <option value="1w">Last Week</option>
    </select>
  );
}
