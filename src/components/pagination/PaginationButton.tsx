import { Box, Pagination } from "@mui/material";
import { ChangeEvent } from "react";

type PaginationButtonProps = {
  totalPages: number;
  currentPage: number;
  handleChange: (event: ChangeEvent<unknown>, value: number) => void;
};
const PaginationButton: React.FC<PaginationButtonProps> = ({
  totalPages,
  currentPage,
  handleChange,
}) => {
  return (
    <Box display={"flex"} justifyContent={"center"} mb={5}>
      <Pagination
        count={totalPages}
        page={currentPage}
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
