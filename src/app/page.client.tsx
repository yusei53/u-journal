"use client";
import LoginForm from "../components/auth/LoginForm";
import LogoutButton from "../components/auth/LogoutButton";
import ReflectionCardWithIconArea from "../components/reflection-all/ReflectionCardWithIconArea";
import { User } from "@prisma/client";
import SettingUsernameModalContainer from "../components/setting-username/SettingUsernameModalContainer";
import { ReflectionWithUser } from "../api/reflection-api";

type RootPageProps = {
  open: boolean;
  username?: string;
  currentUser?: User["id"];
  reflections: ReflectionWithUser[];
};

const RootPage: React.FC<RootPageProps> = ({
  open,
  username,
  currentUser,
  reflections,
}) => {
  if (currentUser === undefined) {
    return <LoginForm />;
  }

  return (
    <>
      <SettingUsernameModalContainer open={open} username={username} />
      <ReflectionCardWithIconArea reflections={reflections} />
      <LogoutButton />
    </>
  );
};

export default RootPage;
