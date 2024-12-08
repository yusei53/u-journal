"use client";
import { Box, Typography } from "@mui/material";
import StyledMarkdown from "./StyledMarkdown";
import { theme } from "@/src/utils/theme";
import { formatDate } from "@/src/utils/date-helper";
import Link from "next/link";
import Image from "next/image";
import { animation } from "../shared/animation";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useRouter, useSearchParams } from "next/navigation";
import UserInformationSection from "./UserInformationSection";

type ReflectionDetailProps = {
  title: string;
  content: string;
  createdAt: string;
  userImage: string;
  username: string;
  reflectionCount: number;
};

const link = {
  color: "black",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
};

const h1 = {
  p: 0,
  width: "100%",
  fontSize: "21px",
  border: "none",
  outline: "none",
  marginBottom: 8,
};

export const ReflectionDetail: React.FC<ReflectionDetailProps> = ({
  title,
  content,
  createdAt,
  userImage,
  username,
  reflectionCount,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleBackNavigation = () => {
    // MEMO: 更新後のリダイレクトで来た場合と外部からきたときは/usernameに戻り、それ以外は普通に戻る
    if (searchParams.get("updated") === "true") {
      router.push(`/${username}`);
    } else if (window.history.length > 1) {
      router.back();
    } else {
      router.push(`/${username}`);
    }
  };

  return (
    <Box
      minHeight={"80vh"}
      my={10}
      mx={{ xs: 0.5, md: 12 }}
      position={"relative"}
      sx={{ ...animation(0.6) }}
    >
      <KeyboardBackspaceIcon
        onClick={handleBackNavigation}
        sx={{
          position: { xs: "absolute", md: "fixed" },
          left: { xs: 0, md: 20 },
          top: { xs: -60, md: 20 },
          cursor: "pointer",
        }}
      />
      {/* // TODO: articleタグとしてコンポーネント分割する */}
      <Box component={"article"}>
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
              style={{ borderRadius: 20, marginRight: 8 }}
            />
            <Typography sx={link} mr={1.5}>
              {username}
            </Typography>
          </Link>
          <Image
            src={"/calendar.svg"}
            alt={"カレンダーアイコン"}
            width={15}
            height={15}
          />
          <Typography
            component={"time"}
            color={theme.palette.grey[600]}
            ml={0.3}
          >
            {formatDate(createdAt)}
          </Typography>
        </Box>
        <Typography component={"h1"} sx={h1}>
          {title}
        </Typography>
        <StyledMarkdown dangerouslySetInnerHTML={{ __html: content }} />
      </Box>
      <Box component={"section"} mt={14} mb={10}>
        <UserInformationSection
          username={username}
          userImage={userImage}
          reflectionCount={reflectionCount}
          link={link}
        />
      </Box>
    </Box>
  );
};
