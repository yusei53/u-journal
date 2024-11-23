"use client";
import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";

export type AppealCardProps = {
  image: string;
  title: string;
  description: string;
};

const AppealCard: React.FC<AppealCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={{ xs: "row", sm: "column" }}
    >
      <CustomImage
        src={`/lp/appeal/${image}`}
        alt={"feature image"}
        width={90}
        height={90}
      />
      <Box textAlign={{ xs: "left", sm: "center" }}>
        <Typography
          component={"h4"}
          fontSize={{ xs: 15, md: 18 }}
          fontWeight={"bold"}
          my={{ xs: 0.5, sm: 1.5 }}
        >
          {title}
        </Typography>
        <Typography fontSize={13}>{description}</Typography>
      </Box>
    </Box>
  );
};

const CustomImage = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
}));

export default AppealCard;
