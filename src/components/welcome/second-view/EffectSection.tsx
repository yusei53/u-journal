"use client";
import { theme } from "@/src/utils/theme";
import { Box, styled, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type EffectSectionProps = {
  image: string;
  title: string;
  description: string;
  isEvenNumber?: boolean;
  isShareSection?: boolean;
};

const EffectSection: React.FC<EffectSectionProps> = ({
  image,
  title,
  description,
  isEvenNumber = false,
  isShareSection = false,
}) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      display={"flex"}
      flexDirection={{
        xs: "column",
        md: isEvenNumber ? "row-reverse" : "row",
      }}
      gap={4}
      my={{ xs: 8, md: 12 }}
    >
      {!isSmallScreen && (
        <CustomImage
          src={image}
          alt={"feature image"}
          width={350}
          height={350}
        />
      )}
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={{ md: "center" }}
      >
        <Typography
          component={"h2"}
          fontSize={{ xs: 20, md: 28 }}
          fontWeight={"bold"}
          letterSpacing={{ xs: 1, md: 0.8 }}
          whiteSpace={"pre-line"}
          mb={{ md: 1.5 }}
        >
          {title}
        </Typography>
        {isSmallScreen && (
          <CustomImage
            src={image}
            alt={"feature image"}
            width={360}
            height={360}
          />
        )}
        <Typography
          letterSpacing={0.5}
          fontSize={{ xs: 14, md: 15 }}
          whiteSpace={"pre-line"}
        >
          {description}
        </Typography>
        {isShareSection && (
          <Link
            href={"/"}
            style={{
              color: "black",
              textAlign: "right",
              marginTop: 6,
              fontSize: 14,
              marginRight: 6,
            }}
          >
            みんなの振り返りはこちら
          </Link>
        )}
      </Box>
    </Box>
  );
};

const CustomImage = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: 180,
    height: 180,
    margin: "15px 0px",
  },
}));

export default EffectSection;
