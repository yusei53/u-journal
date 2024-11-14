import { Pagination, PaginationItem } from "@mui/material";

type ArrowPaginationProps = {
  currentPage: number;
  totalPage: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
};

const ArrowPagination: React.FC<ArrowPaginationProps> = ({
  currentPage,
  totalPage,
  onChange,
}) => {
  return (
    <Pagination
      page={currentPage}
      count={totalPage}
      onChange={onChange}
      renderItem={(item) =>
        item.type === "previous" || item.type === "next" ? (
          <PaginationItem {...item} />
        ) : null
      }
      sx={{
        "& .MuiPaginationItem-page": {
          display: "none",
        },
      }}
    />
  );
};

export default ArrowPagination;
