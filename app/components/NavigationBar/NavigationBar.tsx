import styles from "./NavigationBar.module.scss";
import NavigationLink from "../NavigationLink/NavigationLink";

export default function NavigationBar() {
  //DEFINE THE ARR FOR LINK INFORMATION
  const linkInforArr: LinkInforObj[] = [
    { content: "Messages", src: "message.png" },
    { content: "Calendar", src: "calculator.png" },
    { content: "Campaigns", src: "flash.png" },
    { content: "Settings", src: "setting-3.png" },
    { content: "Helps?", src: "danger.png" },
  ];
  return (
    <ul className={styles.navBar}>
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
          navIconSrc={`/assets/icons/${linkObj.src}`}
          navLinkContent={linkObj.content}
        />
      ))}
    </ul>
  );
}
