import { Box, Pagination } from "@mui/material";
import { ChangeEvent } from "react";

type PaginationButtonProps = {
  currentPage: number;
  totalPage: number;
  handleChange: (event: ChangeEvent<unknown>, value: number) => void;
};
const PaginationButton: React.FC<PaginationButtonProps> = ({
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

export default PaginationButton;
