import Grid from "@mui/material/Grid2";
import { ReflectionWithUser } from "@/src/api/reflection-api";
import ReflectionCardWithIcon from "./ReflectionCardWithIcon";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { theme } from "@/src/utils/theme";
import ToOtherPageButton from "./ToOtherPageButton";
import { User } from "@prisma/client";
import ArrowOnlyPagination from "@/src/components/pagination/ArrowOnlyPagination";
import { ChangeEvent } from "react";

type ReflectionAllAreaProps = {
  reflections: ReflectionWithUser[];
  currentUsername: User["username"];
  currentPage: number;
  totalPages: number;
  handleChange: (event: ChangeEvent<unknown>, value: number) => void;
};

const ReflectionAllArea: React.FC<ReflectionAllAreaProps> = ({
  reflections,
  currentUsername,
  currentPage,
  totalPages,
  handleChange,
}) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const Header = () => (
    <>
      {isSmallScreen && (
        <Box position={"absolute"} top={-45} right={30}>
          <ToOtherPageButton currentUsername={currentUsername} />
        </Box>
      )}
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        mx={{ xs: 4, md: 3 }}
      >
        <Typography component={"h1"} fontSize={17} letterSpacing={1}>
          みんなの振り返り(公開のみ)
        </Typography>
        {!isSmallScreen && (
          <ToOtherPageButton currentUsername={currentUsername} />
        )}
      </Box>
    </>
  );

  return (
    <Box mt={12} position={"relative"}>
      <Header />
      <Box position={"absolute"} mt={2} right={18}>
        <ArrowOnlyPagination
          page={currentPage}
          count={totalPages}
          onChange={handleChange}
        />
      </Box>
      <Grid container mt={6}>
        {reflections.map((reflection) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={reflection.reflectionCUID}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            mb={3.5}
          >
            <ReflectionCardWithIcon reflection={reflection} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ReflectionAllArea;
