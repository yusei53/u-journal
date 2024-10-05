import { Box, Grid, Typography } from "@mui/material";
import ReflectionCard from "./ReflectionCard";
import UserNameBar from "./UserNameBar";
import { ReflectionCardDataProps } from "../../../mock/reflection-card-data";

type ReflectionCardAreaProps = {
  ReflectionCardData: ReflectionCardDataProps[];
};

const ReflectionCardArea: React.FC<ReflectionCardAreaProps> = ({
  ReflectionCardData,
}) => {
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        my={5}
        flexDirection={"column"}
      >
        <Typography fontSize={20} textAlign={"center"}>
          振り返り一覧
        </Typography>
        <UserNameBar />
      </Box>
      <Grid container>
        {ReflectionCardData.map((data, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <ReflectionCard ReflectionCardData={data} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ReflectionCardArea;
