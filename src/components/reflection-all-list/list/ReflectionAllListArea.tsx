import Grid from "@mui/material/Grid2";
import { ReflectionWithUser } from "@/src/api/reflection-api";
import ReflectionCardWithUser from "./ReflectionCardWithUser";
import { Box, CircularProgress } from "@mui/material";
import { User } from "@prisma/client";
import { ChangeEvent } from "react";
import { animation } from "../../shared/animation";
import { ReflectionAllHeader } from "../header";
import { ArrowPagination, NumberedPagination } from "../../shared/pagination";
import { Loading } from "../../shared/loading";

type ReflectionAllAreaProps = {
  currentUsername: User["username"];
  reflections: ReflectionWithUser[];
  currentPage: number;
  totalPage: number;
  onChange: (event: ChangeEvent<unknown>, value: number) => void;
  isLoading: boolean; // ローディング状態を受け取るプロップスを追加
};

const ReflectionAllArea: React.FC<ReflectionAllAreaProps> = ({
  currentUsername,
  reflections,
  currentPage,
  totalPage,
  onChange,
  isLoading, // ローディング状態を受け取る
}) => {
  return (
    <Box mt={12} position={"relative"}>
      <ReflectionAllHeader currentUsername={currentUsername} />
      <ArrowPagination
        currentPage={currentPage}
        totalPage={totalPage}
        onChange={onChange}
      />
      {isLoading && (
        <Box position={"fixed"} top={"50%"} left={{ xs: "45%", md: "48.5%" }}>
          <CircularProgress size={45} sx={{ color: "#8FC9F9" }} />
        </Box>
      )}
      <Grid container my={0.5}>
        {/* MEMO: indexはアニメーションのために必要 */}
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
            <ReflectionCardWithUser reflection={reflection} />
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
