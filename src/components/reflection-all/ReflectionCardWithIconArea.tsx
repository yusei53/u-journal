import Grid from "@mui/material/Grid2";
import { ReflectionAll } from "@/src/api/reflection-api";
import ReflectionCardWithIcon from "./ReflectionCardWithIcon";

type ReflectionCardListAreaProps = {
  reflections: ReflectionAll[];
};

const ReflectionCardListArea: React.FC<ReflectionCardListAreaProps> = ({
  reflections,
}) => {
  return (
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
          <ReflectionCardWithIcon reflection={reflection} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ReflectionCardListArea;
