"use client";
import styles from "./ButtonComponent.module.scss";

interface Props {
  btnContent: string;
  btnClassName?: string;
  btnType?: "button" | "submit" | "reset";
  btnOnClickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonComponent({
  btnContent,
  btnClassName,
  btnType,
  btnOnClickHandler,
}: Props) {
  return (
    <button
      onClick={btnOnClickHandler}
      type={btnType ? btnType : "submit"}
      className={`${styles.buttonComponent} ${
        btnClassName ? styles[btnClassName] : ""
      }`}
    >
      {btnContent}
    </button>
  );
}
