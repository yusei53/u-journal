import { Box, Typography } from "@mui/material";
import Image from "next/image";

type UserAvatarProps = {
  userImage: string;
  username: string;
};

export const UserAvatar: React.FC<UserAvatarProps> = ({
  userImage,
  username,
}) => {
  return (
    <Box display={"flex"} alignItems={"center"} mx={{ xs: 4, md: 3 }}>
      <Image
        src={userImage}
        alt={`${username}の画像`}
        width={40}
        height={40}
        priority
        style={{ borderRadius: 100, marginRight: 8 }}
      />
      <Typography fontSize={16}>{username}</Typography>
    </Box>
  );
};
