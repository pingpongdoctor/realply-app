import styles from "./NavigationLinks.module.scss";
import NavigationLink from "../NavigationLink/NavigationLink";

export default function NavigationLinks() {
  //DEFINE THE ARR FOR LINK INFORMATION
  const linkInforArr: LinkInforObj[] = [
    { content: "Messages", iconSrc: "message.png" },
    { content: "Calendar", iconSrc: "calculator.png" },
    { content: "Campaigns", iconSrc: "flash.png" },
    { content: "Settings", iconSrc: "setting-3.png" },
    { content: "Helps?", iconSrc: "danger.png" },
  ];
  return (
    <ul className={styles.navLinks}>
      {/* DASHBOARD LINK */}
      <NavigationLink
        navIconSrc="/assets/icons/grid-3.png"
        navLinkContent="Dashboard"
        navLinkClassName="navLinkSelected"
      />

      {/* THE OTHER LINKS */}
      {linkInforArr.map((linkObj, index) => (
        <NavigationLink
          key={index}
          navIconSrc={`/assets/icons/${linkObj.iconSrc}`}
          navLinkContent={linkObj.content}
        />
      ))}
    </ul>
  );
}
