import { Suspense } from "react";
import { UserAvatar } from "./avatar";
import { CalendarAreaFetcher } from "./calendar";
import { LinearLoading } from "../../shared/loading";

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
      <Suspense fallback={<LinearLoading />}>
        <CalendarAreaFetcher username={username} />
      </Suspense>
    </>
  );
};

export default UserProfileArea;
