import React from "react";
import { Pagination as MuiPagination } from "@mui/material";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    onPageChange(page);
  };

  return (
    <MuiPagination
      count={totalPages}
      page={currentPage}
      onChange={handlePageChange}
      color="primary"
      showFirstButton
      showLastButton
    />
  );
};

export default Pagination;
