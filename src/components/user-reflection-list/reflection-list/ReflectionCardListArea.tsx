import Grid from "@mui/material/Grid2";
import ReflectionCard from "./ReflectionCard";
import { Reflection } from "@/src/api/reflection-api";
import { PostNavigationButton } from "../../shared/button";

type ReflectionCardListAreaProps = {
  username: string;
  reflections: Reflection[];
};

const ReflectionCardListArea: React.FC<ReflectionCardListAreaProps> = ({
  username,
  reflections,
}) => {
  return (
    <>
      <Grid container sx={{ position: "relative" }}>
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
      <PostNavigationButton
        sx={{
          position: "fixed",
          right: { xs: 40, md: 100 },
          bottom: 50,
        }}
      />
    </>
  );
};

export default ReflectionCardListArea;
