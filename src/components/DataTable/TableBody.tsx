import React from 'react'
import { useDataTableContext } from './DataTableProvider'
import { ITableHeader } from './TableHeader';


const TableBody: React.FC<ITableHeader>= ({ columns }) => {
  const {data, itemsPerPage, currentPage} = useDataTableContext();

  const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <tbody>
      {paginatedData?.map((item) => (
        <tr key={item.id}>
          {columns?.map((column) => (
            <td key={column.key}>
              {item[column.key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody