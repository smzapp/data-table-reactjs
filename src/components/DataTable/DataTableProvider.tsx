import React, { createContext, ReactNode, useContext, useState } from 'react'

export interface IDataTableContext {
  data: Array<any>;
  itemsPerPage: number;
  setItemsPerPage: (count: number) => void;
  currentPage: number;
  setCurrentPage: (count: number) => void;
}

const DataTableContext = createContext<IDataTableContext | undefined>(undefined);

export const useDataTableContext = () => {
  const context = useContext(DataTableContext);
  if(!context) {
    throw new Error('Error while applying useDataTableContext');
  }
  return context;
}

const DataTableProvider : React.FC<{children: ReactNode, data : Array<any>, per_page: number}> = ({
  children,
  data,
  per_page = 10
}) => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(per_page);
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <DataTableContext.Provider
      value={{
        data,
        itemsPerPage,
        setItemsPerPage,
        currentPage,
        setCurrentPage
      }}
    >{children}</DataTableContext.Provider>
  )
}

export default DataTableProvider
