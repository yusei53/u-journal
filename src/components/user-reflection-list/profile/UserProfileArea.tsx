import { Loader } from "../../shared/loading";
import { UserAvatar } from "./avatar";
import dynamic from "next/dynamic";

const CalendarAreaFetcher = dynamic(
  () => import("./calendar").then((mod) => mod.CalendarAreaFetcher),
  {
    loading: () => <Loader />,
    ssr: false,
  }
);

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
