import { Box, Grid, Typography } from "@mui/material";
import ReflectionCard from "./ReflectionCard";
import UserNameBar from "./UserNameBar";
import { ReflectionCardDataProps } from "@/app/const/ReflectionCardData";

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
      <Box px={{ xs: 10, md: 35 }}>
        <Grid container>
          {ReflectionCardData.map((data, index) => (
            <Grid item xs={12} sm={4} key={index}>
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
    </Box>
  );
};

export default ReflectionCardArea;
