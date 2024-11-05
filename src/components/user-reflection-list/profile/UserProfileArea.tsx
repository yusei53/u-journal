import { ReflectionsCount } from "@/src/api/reflections-count-api";
import { LinearLoading } from "../../shared/loading";
import { UserAvatar } from "./avatar";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";

const CalendarAreaFetcher = dynamic(
  () => import("./calendar").then((mod) => mod.CalendarAreaFetcher),
  {
    loading: () => <LinearLoading />,
    ssr: false,
  }
);

type UserProfileAreaProps = {
  userImage: string;
  username: string;
  reflectionCount: ReflectionsCount;
};

const UserProfileArea: React.FC<UserProfileAreaProps> = ({
  userImage,
  username,
  reflectionCount,
}) => {
  return (
    <Box mx={3}>
      <UserAvatar userImage={userImage} username={username} />
      <CalendarAreaFetcher reflectionCount={reflectionCount} />
    </Box>
  );
};

export default UserProfileArea;
