"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StyledMarkdown from "./StyledMarkdown";
import { theme } from "@/src/utils/theme";
import { formatDate } from "@/src/utils/date-helper";
import Link from "next/link";
import Image from "next/image";
import "../shared/input/input.css";

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
  fontSize: "22px",
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
    //TODO: ContainerとStackの部分はReflectionPostForm.tsxと同じなので、共通化を検討
    <Container maxWidth="sm" sx={{ my: 15 }}>
      <Stack m={{ md: 2 }}>
        <Box mb={3}>
          <Box display={"flex"} alignItems={"center"} my={1}>
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
                style={{ borderRadius: 100, marginRight: 8 }}
              />
              <Typography sx={link}>{username}</Typography>
            </Link>
            <AccessTimeIcon
              color={"disabled"}
              sx={{ ml: 1.5, mr: 0.5, fontSize: 13 }}
            />
            <Typography component={"time"} color={theme.palette.grey[600]}>
              {formatDate(createdAt)}
            </Typography>
          </Box>
          <Typography component={"h1"} sx={h1}>
            {title}
          </Typography>
        </Box>
        <StyledMarkdown
          dangerouslySetInnerHTML={{ __html: content }}
        ></StyledMarkdown>
      </Stack>
    </Container>
  );
};
