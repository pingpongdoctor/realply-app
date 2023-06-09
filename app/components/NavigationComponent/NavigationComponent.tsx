import LogoComponent from "../LogoComponent/LogoComponent";
import styles from "./NavigationComponent.module.scss";
import NavigationLinks from "../NavigationLinks/NavigationLinks";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import IconComponent from "../IconComponent/IconComponent";

export default function NavigationComponent() {
  return (
    <div className={styles.navigationComponent}>
      {/* LOGO COMPONENT */}
      <div className={styles.navigationComponentLogoWrapper}>
        <LogoComponent />
        <p className={styles.navigationComponentLogoText}>Realply</p>
      </div>

      {/* NAVIGATION BAR COMPONENT */}
      <NavigationLinks />

      {/* FREE TRIAL BOX */}
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

      {/* LOGOUT LINK */}
      <div className={styles.navigationComponentLogoutDiv}>
        <IconComponent iconSrc="/assets/icons/send-square.svg" />
        <p className={styles.navigationComponentLogoutText}>Logout</p>
      </div>
    </div>
  );
}
