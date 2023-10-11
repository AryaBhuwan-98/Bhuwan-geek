// Import necessary libraries and styles
import React from "react";
import "./pagination.css";

// Define the CustomPagination component with props
// Controls DeleteAll and pagination.
const CustomPagination = ({ totalPages, currentPage, onPageChange, onDeleteSelected }) => {
  // Define a function to handle page click
  const handlePageClick = (newPage) => {
    onPageChange(newPage);
  };

  // Return the JSX structure for the pagination component
  return (
    <div className="pagination">
      {/* Button to delete selected items */}
      <button className="deleteButton" onClick={onDeleteSelected}>
        Delete Selected
      </button>
      {/* List of pagination buttons */}
      <ul>
        {/* Button for the first page */}
        <li>
          <button onClick={() => handlePageClick(1)} disabled={currentPage === 1}>
            <i className="fa-solid fa-angles-left fa-xl"></i>
          </button>
        </li>
        {/* Button for the previous page */}
        <li>
          <button onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
        </li>
        {/* Generate buttons for each page */}
        {Array.from({ length: totalPages }, (v, i) => (
          <li key={i}>
            <button
              onClick={() => handlePageClick(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          </li>
        ))}
        {/* Button for the next page */}
        <li>
          <button onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}>
            <i className="fa-solid fa-angle-left fa-rotate-180 fa-xl"></i>
          </button>
        </li>
        {/* Button for the last page */}
        <li>
          <button onClick={() => handlePageClick(totalPages)} disabled={currentPage === totalPages}>
            <i className="fa-solid fa-angles-left fa-rotate-180 fa-xl"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

// Export the CustomPagination component for use in other files
export default CustomPagination;
