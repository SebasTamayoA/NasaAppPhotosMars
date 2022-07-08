import React from 'react';

// Create label with the text "Page 1 of 2"
const PageNumber = ({ page, totalPages }) => {
  return (
    <div className="text-center">
      <p>Page {page} of {totalPages}</p>
    </div>
  );
}

export default PageNumber;