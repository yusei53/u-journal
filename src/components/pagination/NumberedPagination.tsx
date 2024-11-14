import { Box, Pagination } from "@mui/material";
import { ChangeEvent } from "react";

type NumberedPaginationProps = {
  currentPage: number;
  totalPage: number;
  handleChange: (event: ChangeEvent<unknown>, value: number) => void;
};
const NumberedPagination: React.FC<NumberedPaginationProps> = ({
  currentPage,
  totalPage,
  handleChange,
}) => {
  return (
    <Box display={"flex"} justifyContent={"center"} mb={5}>
      <Pagination
        page={currentPage}
        count={totalPage}
        onChange={handleChange}
        sx={{
          "& .Mui-selected": {
            backgroundColor: "#f0f7ff",
          },
        }}
      />
    </Box>
  );
};

export default NumberedPagination;
