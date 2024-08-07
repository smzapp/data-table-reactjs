import React from 'react'

export interface Column{
  key: string;
  label: string;
}

export interface ITableHeader{
  columns: Array<Column>;
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
