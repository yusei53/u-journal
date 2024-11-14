import { Pagination, PaginationItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type ArrowOnlyPaginationProps = {
  count: number; // 合計ページ数
  page: number; // 現在のページ
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
      renderItem={(item) => (
        <PaginationItem
          components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
          {...item}
          sx={{ minWidth: "auto" }} // アイコンのサイズ調整
        />
      )}
      // ページ番号を非表示にするスタイル
      sx={{
        "& .MuiPagination-ul": {
          gap: 2, // 矢印間のスペースを調整
        },
        "& .MuiPaginationItem-page": {
          display: "none", // ページ番号を非表示
        },
      }}
    />
  );
};

export default ArrowOnlyPagination;
