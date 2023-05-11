"use client";

import styles from "./IconClientComponent.module.scss";
import Image from "next/image";

interface Props {
  iconSrc: string;
  iconClassName?: string;
  iconWidth?: number;
  iconHeight?: number;
  iconOnClickHandler?: () => void;
}

export default function IconClientComponent({
  iconSrc,
  iconClassName,
  iconWidth,
  iconHeight,
  iconOnClickHandler,
}: Props) {
  return (
    <div onClick={iconOnClickHandler}>
      <Image
        src={iconSrc}
        alt="client-icon"
        priority={false}
        width={iconWidth ? iconWidth : 20}
        height={iconHeight ? iconHeight : 20}
        className={iconClassName ? styles[iconClassName] : ""}
      />
    </div>
  );
}
