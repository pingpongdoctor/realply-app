"use client";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import dayjs from "dayjs";
import IconClientComponent from "../IconClientComponent/IconClientComponent";
import styles from "./DateSelectionComponent.module.scss";
import { useState } from "react";

export default function DateSelectionComponent() {
  //THE STATE FOR OPENING THE CALENDAR
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //FUNCTION TO HANDLE THE ISOPEN STATE
  const handleToggleCalendar = function () {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dateSelectionComponent}>
      {/* CALCULATOR ICON */}
      <IconClientComponent
        iconSrc="/assets/icons/black-calculator.png"
        iconWidth={18}
        iconHeight={18}
        iconClassName="iconClientComponentDateSelect"
      />

      {/* MUI CALENDAR COMPONENT */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateRangePicker
          className={styles.dateSelectionComponentCalendar}
          sx={{
            ".MuiOutlinedInput-root": {
              borderRadius: 8,
              fontSize: 15,
              paddingLeft: 1.22,
              fontFamily: "var(--font-sulphur-point)",
            },
            ".MuiOutlinedInput-notchedOutline": {
              border: "none",
              padding: 0,
            },
            ".MuiButtonBase-root": {
              padding: 0,
            },
            ".MuiInputBase-input": {
              padding: 0,
            },
          }}
          format="MMM DD"
          defaultValue={[dayjs("2022-03-10"), dayjs("2022-04-10")]}
          slots={{ field: SingleInputDateRangeField }}
          open={isOpen}
        />
      </LocalizationProvider>

      {/* ARROW SQUARE DOWN ICON */}
      <IconClientComponent
        iconSrc="/assets/icons/arrow-square-down.png"
        iconWidth={18}
        iconHeight={18}
        iconClassName="iconClientComponentDateSelect"
        iconOnClickHandler={handleToggleCalendar}
      />
    </div>
  );
}
