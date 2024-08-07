import React from 'react'

export interface ITableHeader{
  columns: {
    key: string;
    label: string;
  } [];
}

const TableHeader : React.FC<ITableHeader> = ({columns}) => {
  return (
    <thead>
      <tr>
        {columns?.map((column) => (
          <th key={column.key}>{column.label}</th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHeader
