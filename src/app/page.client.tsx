"use client";
import { useState } from "react";
import { ReflectionWithUser } from "../api/reflection-api";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import ReflectionAllArea from "../components/reflection-all-list/list/ReflectionAllListArea";
import LogoutButton from "../components/auth/LogoutButton";
import SettingUsernameModalContainer from "../components/setting-username/SettingUsernameModalContainer";
import { Loading } from "../components/shared/loading";

type RootPageProps = {
  open: boolean;
  currentUsername: User["username"];
  reflections: ReflectionWithUser[];
  currentPage: number;
  totalPage: number;
};

const RootPage: React.FC<RootPageProps> = ({
  open,
  currentUsername,
  reflections,
  currentPage,
  totalPage,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = async (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setIsLoading(true);
    router.push(`?page=${value}`);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loading />}
      <SettingUsernameModalContainer
        open={open}
        currentUsername={currentUsername}
      />
      <ReflectionAllArea
        currentUsername={currentUsername}
        reflections={reflections}
        currentPage={currentPage}
        totalPage={totalPage}
        onChange={handleChange}
        isLoading={isLoading}
      />
      <LogoutButton />
    </>
  );
};

export default RootPage;
