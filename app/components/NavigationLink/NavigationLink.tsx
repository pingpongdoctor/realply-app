import styles from "./NavigationLink.module.scss";
import NavigationBarIcon from "../NavigationBarIcon/NavigationBarIcon";

//DEFINE PROPS
interface Props {
  navIconSrc: string;
  navLinkContent: string;
  navTextClassName?: string;
  navLinkClassName?: string;
}

export default function NavigationLink({
  navIconSrc,
  navLinkContent,
  navLinkClassName,
}: Props) {
  return (
    <li className={styles.navLink}>
      {/* THE ICON OF THE LINK */}
      <NavigationBarIcon navBarIconSrc={navIconSrc} />

      {/* THE TEXT OF THE LINK */}
      <p
        className={`${styles.navLinkText} ${
          navLinkClassName ? styles[navLinkClassName] : ""
        }`}
      >
        {navLinkContent}
      </p>
    </li>
  );
}
