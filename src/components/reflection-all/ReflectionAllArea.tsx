import Grid from "@mui/material/Grid2";
import { ReflectionWithUser } from "@/src/api/reflection-api";
import ReflectionCardWithIcon from "./ReflectionCardWithIcon";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { theme } from "@/src/utils/theme";
import ToOtherPageButton from "./ToOtherPageButton";
import { User } from "@prisma/client";
import { ChangeEvent } from "react";
import { animation } from "../shared/animation";
import ArrowPagination from "@/src/components/pagination/ArrowPagination";
import ReflectionAllHeader from "../pagination/ReflectionAllHeader";

type ReflectionAllAreaProps = {
  currentUsername: User["username"];
  reflections: ReflectionWithUser[];
  currentPage: number;
  totalPage: number;
  handleChange: (event: ChangeEvent<unknown>, value: number) => void;
};

const ReflectionAllArea: React.FC<ReflectionAllAreaProps> = ({
  currentUsername,
  reflections,
  currentPage,
  totalPage,
  handleChange,
}) => {
  return (
    <Box mt={12} position={"relative"}>
      <ReflectionAllHeader
        currentUsername={currentUsername}
        currentPage={currentPage}
        totalPage={totalPage}
        handleChange={handleChange}
      />
      <Grid container my={{ xs: 4, md: 8 }}>
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
            <ReflectionCardWithIcon reflection={reflection} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ReflectionAllArea;
