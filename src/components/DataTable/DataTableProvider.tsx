import React, { createContext, ReactNode, useContext, useState } from 'react'

export interface IDataTableContext {
  data: Array<any>;
  itemsPerPage: number;
  setItemsPerPage: (count: number) => void;
}

const DataTableContext = createContext<IDataTableContext | undefined>(undefined);

export const useDataTableContext = () => {
  const context = useContext(DataTableContext);
  if(!context) {
    throw new Error('Error while applying useDataTableContext');
  }
  return context;
}

const DataTableProvider : React.FC<{children: ReactNode, data : Array<any>}> = ({
  children,
  data
}) => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  return (
    <DataTableContext.Provider
      value={{
        data,
        itemsPerPage,
        setItemsPerPage
      }}
    >{children}</DataTableContext.Provider>
  )
}

export default DataTableProvider
