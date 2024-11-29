"use client";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { theme } from "@/src/utils/theme";
import Image from "next/image";
import LogoutButton from "../../auth/LogoutButton";
import { User } from "@prisma/client";
import { CustomLink } from "./CustomLink";

type FooterProps = {
  currentUser: User["username"] | null;
};

export const Footer: React.FC<FooterProps> = ({ currentUser }) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component={"footer"}
      borderTop={`1.5px solid ${theme.palette.grey[400]}`}
      py={3}
    >
      <Container maxWidth={"md"}>
        <Box mx={{ xs: 1, sm: 5 }}>
          <Image
            src={"/favicon.svg"}
            alt={"リフティのロゴ"}
            width={70}
            height={70}
          />
          <Typography fontWeight={550} fontSize={16} mb={0.5}>
            リフティ
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <Box>
              <Typography
                fontSize={15}
                color={theme.palette.grey[600]}
                letterSpacing={0.8}
                mb={{ xs: 6, sm: 8 }}
              >
                日々の振り返りを手助けする振り返りアプリ
              </Typography>
              {!isSmallScreen && currentUser && <LogoutButton />}
            </Box>
            <Box display={"flex"} gap={8}>
              <Box display={"flex"} flexDirection={"column"} gap={2}>
                <CustomLink href="/">みんなの振り返り</CustomLink>
                <CustomLink href="/welcome">リフティとは</CustomLink>
              </Box>
              <Box display={"flex"} flexDirection={"column"} gap={2}>
                {currentUser ? (
                  <>
                    <CustomLink href={`/${currentUser}`}>マイページ</CustomLink>
                    <CustomLink href="/post">投稿する</CustomLink>
                  </>
                ) : (
                  <CustomLink href="/login">ログイン</CustomLink>
                )}
              </Box>
            </Box>
            {isSmallScreen && currentUser && (
              <Box mt={8}>
                <LogoutButton />
              </Box>
            )}
          </Box>
          <Typography
            color={theme.palette.grey[600]}
            textAlign={"center"}
            mt={4}
          >
            {`Copyright ${new Date().getFullYear()} yusei53`}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
