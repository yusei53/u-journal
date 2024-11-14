import Grid from "@mui/material/Grid2";
import ReflectionCard from "./ReflectionCard";
import { Reflection } from "@/src/api/reflection-api";
import { PostNavigationButton } from "../../shared/button";
import { animation } from "../../shared/animation";

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
        {reflections.map((reflection, index) => (
          <Grid
            key={reflection.reflectionCUID}
            size={{ xs: 12, sm: 6, md: 4 }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            mb={3.5}
            sx={animation(index)}
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
