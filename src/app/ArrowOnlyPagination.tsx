import { Pagination, PaginationItem } from "@mui/material";

type ArrowOnlyPaginationProps = {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
};

const ArrowOnlyPagination: React.FC<ArrowOnlyPaginationProps> = ({
  count,
  page,
  onChange,
}) => {
  return (
    <Pagination
      count={count}
      page={page}
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

export default ArrowOnlyPagination;
