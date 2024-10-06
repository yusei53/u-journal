"use client";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ReflectionCard from "./ReflectionCard";
import UserNameBar from "./UserNameBar";
import { Reflection } from "@/src/api/reflection-api";

type ReflectionCardAreaProps = {
  userImage: string;
  username: string;
  reflections: Reflection[];
};

const UserReflectionListArea: React.FC<ReflectionCardAreaProps> = ({
  userImage,
  username,
  reflections,
}) => {
  return (
    <Box>
      <Box mb={5}>
        <UserNameBar userImage={userImage} username={username} />
      </Box>
      <Grid container>
        {reflections.map((reflection) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={reflection.reflectionCUID}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            mb={2}
          >
            <ReflectionCard username={username} reflection={reflection} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UserReflectionListArea;
