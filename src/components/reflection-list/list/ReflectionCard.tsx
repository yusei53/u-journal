import { Box, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Link from "next/link";
import { theme } from "@/src/utils/theme";
import { Reflection, ReflectionWithUser } from "@/src/api/reflection-api";
import { formatDate } from "@/src/utils/date-helper";
import Image from "next/image";
import { useEffect } from "react";

type ReflectionCardProps = {
  username: string;
  reflection: Reflection;
};

// MEMO: ここ書き換えたら、../../reflection-all/ReflectionCardWithUser.tsxも書き換える
const ReflectionCard: React.FC<ReflectionCardProps> = ({
  username,
  reflection,
}) => {
  return (
    <Box component={"article"} sx={{ cursor: "pointer" }}>
      <Box
        component={Link}
        href={`/${username}/${reflection.reflectionCUID}`}
        position={"relative"}
        p={2}
        sx={{
          textDecoration: "none",
          ...article,
        }}
      >
        <Box display={"flex"} mt={1.5}>
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
            <Typography fontSize={33}>{reflection.charStamp}</Typography>
          </Box>
          <Box
            component={"time"}
            display={"flex"}
            alignItems={"center"}
            position={"absolute"}
            bottom={{ xs: 12, sm: 15 }}
          >
            <CalendarTodayIcon
              fontSize={"small"}
              sx={{ color: theme.palette.grey[600] }}
            />
            <Typography color={theme.palette.grey[600]} ml={0.8}>
              {formatDate(reflection.createdAt)}
            </Typography>
            {!reflection.isPublic && (
              <Box mt={0.5} ml={1}>
                <Image
                  src="/lock.png"
                  alt="非公開マーク"
                  width={15}
                  height={15}
                />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
const article = {
  width: { xs: 295, sm: 380 },
  height: { xs: 110, sm: 110 },
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
export default ReflectionCard;
