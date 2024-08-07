import React from 'react'
import { useDataTableContext } from './DataTableProvider'

const DataPagination = () => {

  const {setCurrentPage, itemsPerPage, data, currentPage} = useDataTableContext();

  const range = 5;

  const totalPages = data.length / itemsPerPage;
  const startPage = Math.max(currentPage - range, 1);
  const endPage = Math.min(currentPage + range, totalPages);
  
  const numbers = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);


  const handlePaging = (current: number) => {
    if(current > 0 && current <= totalPages) {
      setCurrentPage(current);
    }
  } 

  return (
    <ul className='pagination'>
      {numbers.map((number) => (
        <li 
          key={number}
          onClick={() => handlePaging(number)}
          className={(number === currentPage)? 'active' : ''}
        >
          {number}
        </li>
      ))}
    </ul>
  )
}

export default DataPagination