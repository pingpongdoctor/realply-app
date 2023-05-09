import LogoComponent from "../LogoComponent/LogoComponent";
import styles from "./NavigationComponent.module.scss";
import NavigationBar from "../NavigationBar/NavigationBar";

export default function NavigationComponent() {
  return (
    <div className={styles.navigationComponent}>
      <div className={styles.navigationComponentLogoWrapper}>
        <LogoComponent />
        <p className={styles.navigationComponentLogoText}>Realply</p>
      </div>
      <NavigationBar />
    </div>
  );
}
