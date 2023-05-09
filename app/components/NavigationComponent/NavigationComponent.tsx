import LogoComponent from "../LogoComponent/LogoComponent";
import styles from "./NavigationComponent.module.scss";
import NavigationBar from "../NavigationBar/NavigationBar";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

export default function NavigationComponent() {
  return (
    <div className={styles.navigationComponent}>
      {/* LOGO COMPONENT */}
      <div className={styles.navigationComponentLogoWrapper}>
        <LogoComponent />
        <p className={styles.navigationComponentLogoText}>Realply</p>
      </div>
      {/* NAVIGATION BAR COMPONENT */}
      <NavigationBar />
      {/* FREE TRIAL INFORMATION */}
      <div className={styles.navigationComponentTrialWrapper}>
        <p className={styles.navigationComponentTrialText}>
          Your free trial is about to end in <br /> <span> 10 days</span>
        </p>
        <p className={styles.navigationComponentTrialSmallText}>
          You will not be billed during your free trial.
        </p>
        <p className={styles.navigationComponentTrialSmallText}>
          To keep your projects running after the trial end, upgrade to a paid
          option.
        </p>
        {/* BUTTON CLIENT COMPONENT */}
        <ButtonComponent btnContent="Upgrade" />
      </div>
    </div>
  );
}
