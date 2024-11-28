"use client";
import { Box, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import StyledMarkdown from "./StyledMarkdown";
import { theme } from "@/src/utils/theme";
import { formatDate } from "@/src/utils/date-helper";
import Link from "next/link";
import Image from "next/image";
import { animation } from "../shared/animation";

type ReflectionDetailProps = {
  title: string;
  content: string;
  createdAt: string;
  userImage: string;
  username: string;
};

const link = {
  color: "black",
  "&:hover": {
    textDecoration: "underline",
  },
};

// MEMO: ../shared/input/input.cssで定義したスタイルを適用させる
// MEMO: 本番でたまにここのcssが効かないので、importでclassNameを使わず以下をsxで指定する
const h1 = {
  p: 0,
  width: "100%",
  fontSize: "21px",
  border: "none",
  outline: "none",
};

export const ReflectionDetail: React.FC<ReflectionDetailProps> = ({
  title,
  userImage,
  username,
  content,
  createdAt,
}) => {
  return (
    <Box my={10} mx={{ xs: 0.5, md: 12 }} sx={{ ...animation(0.6) }}>
      <Box mb={5}>
        <Box display={"flex"} alignItems={"center"} my={0.5}>
          <Link
            href={`/${username}`}
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src={userImage}
              alt={`${username}の画像`}
              width={25}
              height={25}
              priority
              style={{ borderRadius: 10, marginRight: 8 }}
            />
            <Typography sx={link}>{username}</Typography>
          </Link>
          <CalendarTodayIcon
            sx={{
              color: theme.palette.grey[600],
              ml: 1.5,
              mr: 0.3,
              fontSize: 13,
            }}
          />
          <Typography component={"time"} color={theme.palette.grey[600]}>
            {formatDate(createdAt)}
          </Typography>
        </Box>
        <Typography component={"h1"} sx={h1}>
          {title}
        </Typography>
      </Box>
      <StyledMarkdown dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  );
};
