"use client";
import LoginForm from "../components/auth/LoginForm";
import LogoutButton from "../components/auth/LogoutButton";
import ReflectionCardWithIconArea from "../components/reflection-all/ReflectionCardWithIconArea";
import { ReflectionAll } from "../api/reflection-api";
import { User } from "@prisma/client";
import SettingUsernameModalContainer from "../components/setting-username/SettingUsernameModalContainer";

type RootPageProps = {
  open: boolean;
  username?: string;
  currentUser?: User["id"];
  reflections: ReflectionAll[];
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
