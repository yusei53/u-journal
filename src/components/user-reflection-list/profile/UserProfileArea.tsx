import { Box } from "@mui/material";
import { UserAvatar } from "./avatar";
import { CalendarFetcher } from "./calendar";

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
      <Box my={5} mx={3}>
        <CalendarFetcher username={username} />
      </Box>
    </>
  );
};

export default UserProfileArea;
