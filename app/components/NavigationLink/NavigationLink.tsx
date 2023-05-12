import styles from "./NavigationLink.module.scss";
import IconComponent from "../IconComponent/IconComponent";

//DEFINE PROPS
interface Props {
  navIconSrc: string;
  navLinkContent: string;
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
      <IconComponent iconSrc={navIconSrc} />

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
