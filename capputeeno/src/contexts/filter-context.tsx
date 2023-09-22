'use client';

import { FilterType, PriorityType } from '@/types/filter-types';
import { ReactNode, createContext, useState } from 'react';

interface ProviderProps {
  children: ReactNode;
}

export const FilterContext = createContext({
  page: 0,
  search: '',
  type: FilterType.ALL,
  priority: PriorityType.NEWS,
  setPage: (page: number) => {},
  setSearch: (value: string) => {},
  setType: (type: FilterType) => {},
  setPriority: (type: PriorityType) => {},
});

export function FilterContextProvider({ children }: ProviderProps) {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [type, setType] = useState(FilterType.ALL);
  const [priority, setPriority] = useState(PriorityType.NEWS);

  return (
    <FilterContext.Provider
      value={{
        page,
        type,
        search,
        priority,
        setPage,
        setType,
        setSearch,
        setPriority,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
