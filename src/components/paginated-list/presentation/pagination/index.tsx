import Button from "src/presentation/ui/button";
import { PaginationProps } from "./models/types";
import "./pagination.scss";
export default function Pagination({ page, totalPages, handleNext, handlePrevious }: PaginationProps) {
  return (
    <div className="pagination-controls">
      {page > 1 && (
        <Button onClick={handlePrevious} disabled={page === 1}>
          Prev
        </Button>
      )}
      <span>
        Page {page} of {totalPages}
      </span>
      {page !== totalPages && (
        <Button onClick={handleNext} disabled={page === totalPages}>
          Next
        </Button>
      )}
    </div>
  );
}
