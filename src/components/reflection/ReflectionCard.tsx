import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { theme } from "@/src/utils/theme/theme";
import { Reflection } from "@/src/api/reflection-api";
import { formatDate } from "@/src/utils/date-helper";

type ReflectionCardProps = {
  username: string;
  reflection: Reflection;
};

const ReflectionCard: React.FC<ReflectionCardProps> = ({
  username,
  reflection,
}) => {
  return (
    <Box component={"article"}>
      <Box
        component={Link}
        href={`/${username}/${reflection.reflectionCUID}`}
        sx={articleImage}
      />
      <Box my={0.5} ml={0.5} display={"flex"} flexDirection={"column"}>
        <Typography
          component={Link}
          href={`/${username}/${reflection.reflectionCUID}`}
          sx={link}
        >
          {reflection.title}
        </Typography>
        <Typography component={"time"} color={theme.palette.grey[500]}>
          {formatDate(reflection.createdAt)}
        </Typography>
      </Box>
    </Box>
  );
};

const link = {
  textDecoration: "none",
  color: "black",
};

const articleImage = {
  width: { xs: 300, sm: 240 },
  height: { xs: 150, sm: 150 },
  borderRadius: 3,
  bgcolor: theme.palette.primary.main,
  display: "block", // aタグにblock要素を指定すると長方形が表示できる
};

export default ReflectionCard;
