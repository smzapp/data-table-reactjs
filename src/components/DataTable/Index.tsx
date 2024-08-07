import React from 'react'
import TableHeader, { Column } from './TableHeader';
import DataTableProvider from './DataTableProvider';
import TableBody from './TableBody';
import DataPagination from './DataPagination';

export interface IDataTable {
  data: Array<any>;
  columns: Array<Column>;
  per_page?: number;
}

/**
 * @author: Samuel Amador
 * This is the starting point of data table
 */
const DataTable: React.FC<IDataTable> = ({
  data,
  columns,
  per_page = 10
}) => {
  return (
    <DataTableProvider data={data} per_page={per_page}>
      <div className='data-table-container'>
        <table className='data-table'>
          <TableHeader columns={columns}/>
          <TableBody columns={columns}/>
        </table>
        <DataPagination />
      </div>
    </DataTableProvider>
  )
}


export default DataTable
