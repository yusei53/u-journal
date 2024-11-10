import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { theme } from "@/src/utils/theme/theme";
import { ReflectionWithUser } from "@/src/api/reflection-api";
import { formatDate } from "@/src/utils/date-helper";
import Image from "next/image";

type ReflectionCardWithIconProps = {
  reflection: ReflectionWithUser;
};

const ReflectionCardWithIcon: React.FC<ReflectionCardWithIconProps> = ({
  reflection,
}) => {
  return (
    <Box
      component={"article"}
      //MEMO: 文字をはみ出さないようにするため
      maxWidth={{
        xs: 300,
        sm: 240,
      }}
    >
      <Box
        component={Link}
        href={`/${reflection.user.username}/${reflection.reflectionCUID}`}
        sx={articleImage}
      >
        <Typography
          fontSize={26}
          position={"absolute"}
          left={"45%"}
          top={"40%"}
        >
          {reflection.charStamp}
        </Typography>
      </Box>
      <Box display={"flex"} flexDirection={"column"} mt={1} ml={0.5}>
        <Box display={"flex"} alignItems={"center"}>
          <Image
            src={reflection.user.image}
            alt={"アイコン"}
            width={25}
            height={25}
            style={{ borderRadius: 20 }}
          />
          <Typography
            component={Link}
            href={`/${reflection.user.username}/${reflection.reflectionCUID}`}
            ml={0.5}
            whiteSpace={"nowrap"}
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            sx={link}
          >
            {reflection.title}
          </Typography>
        </Box>
        <Box ml={"29px"} mt={-0.5}>
          <Typography
            component={"time"}
            color={theme.palette.grey[500]}
            fontSize={13}
          >
            {formatDate(reflection.createdAt)}
          </Typography>
          <Typography color={theme.palette.grey[500]} fontSize={13} mt={-0.5}>
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

export default ReflectionCardWithIcon;
