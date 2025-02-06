import { ChevronLeft, ChevronRight } from "react-feather";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (value: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange
}: PaginationProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <label className="text-sm text-gray-600">Show:</label>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="px-3 py-2 border rounded-md bg-white text-sm focus:ring-2 focus:ring-[#286672]"
        >
          {[12, 24, 48].map((value) => (
            <option key={value} value={value}>{value} per page</option>
          ))}
        </select>
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          className="px-4 py-2 bg-white border rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <ChevronLeft size={18} />
        </button>
        
        <span className="px-4 py-2 bg-white border rounded-md text-sm">
          Page {currentPage} of {totalPages}
        </span>
        
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          className="px-4 py-2 bg-white border rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
