"use client";
import LogoutButton from "../components/auth/LogoutButton";
import SettingUsernameModalContainer from "../components/setting-username/SettingUsernameModalContainer";
import { ReflectionWithUser } from "../api/reflection-api";
import ReflectionAllArea from "../components/reflection-all/ReflectionAllArea";
import { User } from "@prisma/client";
import { Box, Pagination } from "@mui/material";
import { useRouter } from "next/navigation";

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
        reflections={reflections}
        currentUsername={currentUsername}
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
      />

      <Box display={"flex"} justifyContent={"center"} mb={5}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handleChange}
          sx={{
            "& .Mui-selected": {
              backgroundColor: "#f0f7ff",
            },
          }}
        />
      </Box>
      <LogoutButton />
    </>
  );
};

export default RootPage;
