"use client";

import Avatar from "@mui/material/Avatar";

interface Props {
  avatarAlt: string;
  avatarSrc: string;
  avatarWidthInPixel: number;
  avatarHeightInPixel: number;
}

export default function AvatarComponent({
  avatarAlt,
  avatarSrc,
  avatarWidthInPixel,
  avatarHeightInPixel,
}: Props) {
  return (
    <Avatar
      alt={avatarAlt}
      src={avatarSrc}
      sx={{ width: avatarWidthInPixel, height: avatarHeightInPixel }}
    />
  );
}
