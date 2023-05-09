import styles from "./LogoComponent.module.scss";
import Image from "next/image";

interface Props {
  logoClassName?: string;
}

export default function LogoComponent({ logoClassName }: Props) {
  return (
    <Image
      className={`${logoClassName ? styles[logoClassName] : ""}`}
      src="/assets/icons/logo.svg"
      alt="logo"
      priority={true}
      width={33.29}
      height={32}
    />
  );
}
