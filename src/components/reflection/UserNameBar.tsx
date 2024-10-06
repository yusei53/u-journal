import { Box, Typography } from "@mui/material";
import Image from "next/image";

type UserNameBarProps = {
  userImage: string;
  username: string;
};

const UserNameBar: React.FC<UserNameBarProps> = ({ userImage, username }) => {
  return (
    <Box display={"flex"} alignItems={"center"} mx={{ xs: 4, md: 3 }}>
      {/* TODO: ここにGoogleアイコンやgithubアイコンが来る */}
      <Image
        src={userImage}
        alt={`${username}の画像`}
        width={40}
        height={40}
        style={{ borderRadius: 100, marginRight: 8 }}
      />
      <Typography fontSize={16}>{username}</Typography>
    </Box>
  );
};

export default UserNameBar;
