"use client";
import { theme } from "@/src/utils/theme";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Button } from "../../shared/button";

const FirstView = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      my={{ xs: 8, md: 10 }}
    >
      <Typography
        component={"h1"}
        fontWeight={"bold"}
        letterSpacing={1}
        // MEMO: 開発環境は折り返してるけど、本番は折り返さない文字の大きさだから22でOK
        fontSize={{
          xs: 21,
          md: 40,
        }}
      >
        毎日の足跡を、そっと書き留める
      </Typography>
      <Typography
        textAlign={"center"}
        letterSpacing={0.8}
        my={3}
        lineHeight={1.8}
        fontSize={{ md: 18 }}
      >
        {isSmallScreen ? (
          <>
            リフティは、日々の気づきや感情を記録し、さまざまな人の多くの視点や価値観に触れることで新たな発見や自己成長を促す場所です。
          </>
        ) : (
          <>
            リフティは、日々の気づきや感情を記録したり、
            <br />
            多様な価値観に触れ、新しい発見と自己成長を支える場所です。
          </>
        )}
      </Typography>
      <Box display={"flex"} gap={{ xs: 1, md: 3 }}>
        <Button href={"/login"}>さっそくはじめる</Button>
        <Button href={"/"}>みんなの振り返り</Button>
      </Box>
    </Box>
  );
};

export default FirstView;
