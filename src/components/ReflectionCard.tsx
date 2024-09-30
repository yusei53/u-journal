import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { ReflectionCardDataProps } from "../mock/ReflectionCardData";

type ReflectionCardProps = {
  ReflectionCardData: ReflectionCardDataProps;
};

const ReflectionCard: React.FC<ReflectionCardProps> = ({
  ReflectionCardData,
}) => {
  return (
    <Box mb={3}>
      <Link href={ReflectionCardData.href}>
        <Box
          bgcolor={"#f0f7ff"}
          width={252}
          height={157}
          borderRadius={3}
        ></Box>
      </Link>
      <Box my={1}>
        <Link href={ReflectionCardData.href} style={{ textDecoration: "none" }}>
          <Typography letterSpacing={2} color="black">
            {ReflectionCardData.title}
          </Typography>
        </Link>
      </Box>
      <Typography color="#8D9298" my={1}>
        {ReflectionCardData.day}
      </Typography>
    </Box>
  );
};

export default ReflectionCard;
