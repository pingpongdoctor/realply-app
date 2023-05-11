import styles from "./IconComponent.module.scss";
import Image from "next/image";

interface Props {
  iconSrc: string;
  iconClassName?: string;
  iconWidth?: number;
  iconHeight?: number;
}

export default function IconComponent({
  iconSrc,
  iconClassName,
  iconWidth,
  iconHeight,
}: Props) {
  return (
    <Image
      src={iconSrc}
      alt="icon"
      priority={false}
      width={iconWidth ? iconWidth : 20}
      height={iconHeight ? iconHeight : 20}
      className={iconClassName ? styles[iconClassName] : ""}
    />
  );
}
