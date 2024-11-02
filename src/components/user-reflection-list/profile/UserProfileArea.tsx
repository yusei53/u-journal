import { Box } from "@mui/material";
import { UserAvatar } from "./avatar";
import { CalendarAreaFetcher } from "./calendar";

type UserProfileAreaProps = {
  userImage: string;
  username: string;
};

const UserProfileArea: React.FC<UserProfileAreaProps> = ({
  userImage,
  username,
}) => {
  return (
    <>
      <UserAvatar userImage={userImage} username={username} />
      <CalendarAreaFetcher username={username} />
    </>
  );
};

export default UserProfileArea;
