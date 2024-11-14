"use client";
import LogoutButton from "../components/auth/LogoutButton";
import SettingUsernameModalContainer from "../components/setting-username/SettingUsernameModalContainer";
import { ReflectionWithUser } from "../api/reflection-api";
import ReflectionAllArea from "../components/reflection-all/ReflectionAllArea";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import PaginationButton from "../components/pagination/PaginationButton";

type RootPageProps = {
  open: boolean;
  currentUsername: User["username"];
  reflections: ReflectionWithUser[];
  currentPage: number;
  totalPages: number;
};

const RootPage: React.FC<RootPageProps> = ({
  open,
  currentUsername,
  reflections,
  currentPage,
  totalPages,
}) => {
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`?page=${value}`);
  };
  return (
    <>
      <SettingUsernameModalContainer
        open={open}
        currentUsername={currentUsername}
      />

      <ReflectionAllArea
        currentUsername={currentUsername}
        reflections={reflections}
        currentPage={currentPage}
        totalPages={totalPages}
        handleChange={handleChange}
      />

      <PaginationButton
        currentPage={currentPage}
        totalPages={totalPages}
        handleChange={handleChange}
      />
      <LogoutButton />
    </>
  );
};

export default RootPage;
