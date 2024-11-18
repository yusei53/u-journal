import { Box, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Link from "next/link";
import Image from "next/image";
import { theme } from "@/src/utils/theme";
import { ReflectionWithUser } from "@/src/api/reflection-api";
import { formatDate } from "@/src/utils/date-helper";

type ReflectionCardWithUserProps = {
  reflection: ReflectionWithUser;
};
const ReflectionCardWithUser: React.FC<ReflectionCardWithUserProps> = ({
  reflection,
}) => {
  return (
    <Box component={"article"}>
      <Box
        position={"relative"}
        p={2}
        sx={{
          textDecoration: "none",
          ...articleImage,
        }}
      >
        <Box display={"flex"} mt={1.2}>
          <Link
            href={`/${reflection.user.username}/${reflection.reflectionCUID}`}
            style={{ textDecoration: "none" }}
          >
            <Typography
              color={"black"}
              overflow={"hidden"}
              textOverflow={"ellipsis"}
              display={"-webkit-box"}
              pr={10}
              letterSpacing={0.9}
              lineHeight={1.4}
              sx={{
                // MEMO: 2行で切り捨てるためのcss
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
              }}
            >
              {reflection.title}
            </Typography>
            <Box
              position={"absolute"}
              right={20}
              top={20}
              borderRadius={10}
              width={55}
              height={55}
              bgcolor={theme.palette.primary.main}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Typography fontSize={35}>{reflection.charStamp}</Typography>
            </Box>
          </Link>
          <Box
            display={"flex"}
            alignItems={"center"}
            position={"absolute"}
            bottom={{ xs: 12, md: 15 }}
          >
            <Box display={"flex"} alignItems={"center"}>
              <Link
                href={`/${reflection.user.username}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  src={reflection.user.image ?? "/no-image.png"}
                  alt={`${reflection.user.username}のアイコン`}
                  width={22}
                  height={22}
                  style={{ borderRadius: 10 }}
                />
              </Link>
              <Typography
                component={Link}
                href={`/${reflection.user.username}`}
                color={theme.palette.grey[600]}
                ml={0.5}
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {reflection.user.username}
              </Typography>
            </Box>
            <Box
              component={"time"}
              display={"flex"}
              alignItems={"center"}
              position={"absolute"}
              left={{ xs: 110, md: 140 }}
            >
              <CalendarTodayIcon
                fontSize={"small"}
                sx={{ color: theme.palette.grey[600] }}
              />
              <Typography color={theme.palette.grey[600]} ml={0.8}>
                {formatDate(reflection.createdAt)}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
const articleImage = {
  width: { xs: 295, sm: 380 },
  height: 120,
  borderRadius: 3,
  display: "block", // aタグにblock要素を指定すると長方形が表示できる
  border: `1.2px solid ${theme.palette.primary.main}`,
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05), 0 1px 1px rgba(0, 0, 0, 0.03)",
  transition: "box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s",
  "&:hover": {
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)",
    transform: "translateY(-3px)",
  },
};
export default ReflectionCardWithUser;
