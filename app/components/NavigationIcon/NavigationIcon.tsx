import styles from "./NavigationIcon.module.scss";
import Image from "next/image";

interface Props {
  navBarIconSrc: string;
  navBarIconClassName?: string;
}

export default function NavigationIcon({
  navBarIconSrc,
  navBarIconClassName,
}: Props) {
  return (
    <Image
      src={navBarIconSrc}
      alt="nav-bar-icon"
      priority={false}
      width={20}
      height={20}
      className={navBarIconClassName ? styles[navBarIconClassName] : ""}
    />
  );
}
