import { Box, Typography } from "@mui/material";
import Link from "next/link";

type PostCardProps = {
  title: string;
  day: string;
  href: string;
};

const PostCard: React.FC<PostCardProps> = ({ title, day, href }) => {
  return (
    <Box marginBottom={3}>
      <Link href={href}>
        <Box
          bgcolor={"#f0f7ff"}
          width={252}
          height={157}
          borderRadius={3}
        ></Box>
      </Link>
      <Box my={1}>
        <Link href={href} style={{ textDecoration: "none" }}>
          <Typography letterSpacing={2} color="black">
            {title}
          </Typography>
        </Link>
      </Box>
      <Typography color="#8D9298" marginY={1}>
        {day}
      </Typography>
    </Box>
  );
};

export default PostCard;
