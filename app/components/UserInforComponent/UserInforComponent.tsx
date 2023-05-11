import styles from "./UserInforComponent.module.scss";
import AvatarComponent from "../AvatarComponent/AvatarComponent";
import IconComponent from "../IconComponent/IconComponent";

export default function UserInforComponent() {
  const avaSrc = process.env.AVATAR_URL || "";

  return (
    <div className={styles.userInforComponent}>
      {/* USER AVATAR */}
      <AvatarComponent
        avatarSrc={avaSrc}
        avatarAlt="user-avatar"
        avatarWidthInPixel={45}
        avatarHeightInPixel={45}
      />

      {/* USER NAME */}
      <p className={styles.userInforComponentText}>Jacob Frost</p>

      {/* USER ICON */}
      <IconComponent
        iconSrc="/assets/icons/arrow-square-down.png"
        iconWidth={18}
        iconHeight={18}
      />
    </div>
  );
}
