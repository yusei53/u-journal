"use client";
import { Box, Container, Stack, styled, Typography } from "@mui/material";
import "../shared/input/input.css";
import StyledMarkdown from "./StyledMarkdown";
import { theme } from "@/src/utils/theme";
import Link from "next/link";
import { formatDate } from "@/src/utils/date-helper";
import Image from "next/image";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

type HtmlContentProps = {
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

const HtmlContent: React.FC<HtmlContentProps> = ({
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
        <Box>
          <Box display={"flex"} alignItems={"center"} mt={0.5}>
            <AccessTimeIcon color={"disabled"} sx={{ mr: 0.5, fontSize: 13 }} />
            <Typography
              fontSize={13}
              component={"time"}
              color={theme.palette.grey[500]}
            >
              {formatDate(createdAt)}
            </Typography>
          </Box>
          <Typography component={"h1"} className="custom-input">
            {title}
          </Typography>
        </Box>
        <Box mt={6}>
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
        </Box>
        <StyledMarkdown
          dangerouslySetInnerHTML={{ __html: content }}
        ></StyledMarkdown>
      </Stack>
    </Container>
  );
};

export default HtmlContent;
