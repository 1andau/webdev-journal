import React, { useState } from 'react';
import './pagination.scss'; 

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Реализуйте функционал для загрузки соответствующей страницы данных
  }

  return (
<div className="center">
<div className="pagination">
<button disabled={currentPage === 1} onClick={() => handleClick(currentPage - 1)}>&laquo;</button>
<button className={currentPage === 1 ? 'active' : ''} onClick={() => handleClick(1)}>1</button>
<button className={currentPage === 2 ? 'active' : ''} onClick={() => handleClick(2)}>2</button>
<button className={currentPage === 3 ? 'active' : ''} onClick={() => handleClick(3)}>3</button>
<button className={currentPage === 4 ? 'active' : ''} onClick={() => handleClick(4)}>4</button>
<button className={currentPage === 5 ? 'active' : ''} onClick={() => handleClick(5)}>5</button>
<button className={currentPage === 6 ? 'active' : ''} onClick={() => handleClick(6)}>6</button>
<button disabled={currentPage === 6} onClick={() => handleClick(currentPage + 1)}>&raquo;</button>
</div>  
</div>


  );
};

export default Pagination;


