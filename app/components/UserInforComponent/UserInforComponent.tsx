import styles from "./UserInforComponent.module.scss";
import AvatarComponent from "../AvatarComponent/AvatarComponent";
import IconComponent from "../IconComponent/IconComponent";

export default function UserInforComponent() {
  const avaSrc =
    "https://s3-alpha-sig.figma.com/img/0c24/cc1a/1ed8f65b55764405e0b51330a1614a25?Expires=1684713600&Signature=E9eid3i6wUPNHa3KDsUeznCzM0pm~aBCeuBNwbFvUnuKEvmhTN8k2qB7vZDWPZ8jn4qowuDSKB3tMwusvK2p4ug5ZFfY0ndMV2htozEuIZnj~yOdkB1WUpvI5zgjBYkP3FdmesaIv5q2EKgEnWoQ-Dox6mA010~CRZriGOCZsp3Q9CXK9PXQ3UdHDsGeQpcO2L2hY-BpJydxOVH4KApj0mLmxOekPTD1yea9lug5VObUCItY4GXu1rHuYRI8GVFQg7N5NrilsodEWwNdOTI2xHhpuUXGe7vIPh9~uPBrm9JNaG-iUorgXUBTZemQwUfhi7UBNNl9JeU7CWsoG4~OnQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

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
