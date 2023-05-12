"use client";

import styles from "./TimeFilterComponent.module.scss";
import { ChangeEvent, useState, useEffect } from "react";

export default function TimeFilterComponent() {
  //STATES FOR VALUE AND CLASSNAME OF SELECT ELEMENT
  const [value, setValue] = useState<string>("24h");
  const [selectClassName, setSelectClassName] = useState<string>("");

  //FUNCTION HANDLE VALUE STATE
  const handleSetValueState = function (e: ChangeEvent<HTMLSelectElement>) {
    setValue(e.target.value);
  };

  //USE EFFECT TO HANDLE THE SELECT CLASSNAME STATE
  useEffect(() => {
    if (value === "1w") {
      setSelectClassName("timeFilterComponentBiggerWidth");
    } else {
      setSelectClassName("");
    }
  }, [value]);

  return (
    <select
      className={`${styles.timeFilterComponent} ${
        selectClassName ? styles[selectClassName] : ""
      }`}
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
