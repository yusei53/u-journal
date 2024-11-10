"use client";
import LogoutButton from "../components/auth/LogoutButton";
import SettingUsernameModalContainer from "../components/setting-username/SettingUsernameModalContainer";
import { ReflectionWithUser } from "../api/reflection-api";
import ReflectionAllArea from "../components/reflection-all/ReflectionAllArea";
import { User } from "@prisma/client";

type RootPageProps = {
  open: boolean;
  currentUsername: User["username"];
  reflections: ReflectionWithUser[];
};

const RootPage: React.FC<RootPageProps> = ({
  open,
  currentUsername,
  reflections,
}) => {
  return (
    <>
      <SettingUsernameModalContainer
        open={open}
        currentUsername={currentUsername}
      />
      <ReflectionAllArea
        reflections={reflections}
        currentUsername={currentUsername}
      />
      <LogoutButton />
    </>
  );
};

export default RootPage;
