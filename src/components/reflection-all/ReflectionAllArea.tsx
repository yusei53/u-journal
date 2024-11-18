import Grid from "@mui/material/Grid2";
import { ReflectionWithUser } from "@/src/api/reflection-api";
import ReflectionCardWithIcon from "./ReflectionCardWithIcon";
import { Box } from "@mui/material";
import { User } from "@prisma/client";
import { ChangeEvent } from "react";
import { animation } from "../shared/animation";
import ArrowPagination from "../pagination/ArrowPagination";
import NumberedPagination from "../pagination/NumberedPagination";
import ReflectionAllHeader from "./ReflectionAllHeader";

type ReflectionAllAreaProps = {
  currentUsername: User["username"];
  reflections: ReflectionWithUser[];
  currentPage: number;
  totalPage: number;
  onChange: (event: ChangeEvent<unknown>, value: number) => void;
};

const ReflectionAllArea: React.FC<ReflectionAllAreaProps> = ({
  currentUsername,
  reflections,
  currentPage,
  totalPage,
  onChange,
}) => {
  return (
    <Box mt={12}>
      <ReflectionAllHeader currentUsername={currentUsername} />
      <ArrowPagination
        currentPage={currentPage}
        totalPage={totalPage}
        onChange={onChange}
      />
      <Grid container my={0.5}>
        {reflections.map((reflection, index) => (
          <Grid
            key={reflection.reflectionCUID}
            size={{ xs: 12, md: 6 }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            mb={3.5}
            sx={animation(index)}
          >
            <ReflectionCardWithIcon reflection={reflection} />
          </Grid>
        ))}
      </Grid>
      <NumberedPagination
        currentPage={currentPage}
        totalPage={totalPage}
        onChange={onChange}
      />
    </Box>
  );
};

export default ReflectionAllArea;
