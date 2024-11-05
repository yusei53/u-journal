import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { theme } from "@/src/utils/theme/theme";
import { Reflection, ReflectionAll } from "@/src/api/reflection-api";
import { formatDate } from "@/src/utils/date-helper";

type ReflectionCardProps = {
  reflection: ReflectionAll;
};

const ReflectionCard: React.FC<ReflectionCardProps> = ({ reflection }) => {
  return (
    <Box component={"article"}>
      <Box
        component={Link}
        href={`/${reflection.user.username}/${reflection.reflectionCUID}`}
        sx={articleImage}
      >
        <Typography
          fontSize={{ xs: 26, sm: 26 }}
          position={"absolute"}
          left={"45%"}
          top={"40%"}
        >
          {reflection.charStamp}
        </Typography>
      </Box>
      <Box display={"flex"} mt={1} ml={0.5}>
        <img
          src={reflection.user.image}
          width={25}
          height={25}
          style={{ borderRadius: 20 }}
        />
        <Box flexDirection={"column"} display={"flex"} ml={1}>
          <Typography
            component={Link}
            href={`/${reflection.user.username}/${reflection.reflectionCUID}`}
            sx={{
              ...link,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "200px", // 適宜調整
            }}
          >
            {reflection.title}
          </Typography>
          <Typography
            component={"time"}
            color={theme.palette.grey[500]}
            fontSize={13}
          >
            {formatDate(reflection.createdAt)}
          </Typography>
          <Typography color={theme.palette.grey[500]} fontSize={13}>
            {reflection.user.username}
          </Typography>
        </Box>
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
  position: "relative",
};

export default ReflectionCard;
