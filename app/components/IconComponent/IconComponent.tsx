import styles from "./IconComponent.module.scss";
import Image from "next/image";

interface Props {
  IconSrc: string;
  IconClassName?: string;
}

export default function IconComponent({ IconSrc, IconClassName }: Props) {
  return (
    <Image
      src={IconSrc}
      alt="nav-bar-icon"
      priority={false}
      width={20}
      height={20}
      className={IconClassName ? styles[IconClassName] : ""}
    />
  );
}
