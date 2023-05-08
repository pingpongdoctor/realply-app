import styles from "./LogoComponent.module.scss";
import logo from "../../../public/assets/icons/logo.svg";

interface Props {
  logoClassName?: string;
}

export default function LogoComponent({ logoClassName }: Props) {
  return <img src={logo} alt="logo-icon" className={styles.logoClassName} />;
}
