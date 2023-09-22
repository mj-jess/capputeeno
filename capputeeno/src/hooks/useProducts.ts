import { ProductsFetchResponse } from '@/types/products';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';
import { useFilter } from './useFilter';
import { mountQuery } from '@/utils/graphql-filters';
import { useDeferredValue } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const getProducts = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, { query });
};

export function useProducts() {
  const { search, type, priority } = useFilter();
  const query = mountQuery(type, priority);
  const searchedDeferred = useDeferredValue(search).toLowerCase();

  const { data } = useQuery({
    queryFn: () => getProducts(query),
    queryKey: ['products', type, priority],
  });

  const products = data?.data?.data?.allProducts ?? [];
  const filteredProducts = products.filter((p) => p.name.toLowerCase().includes(searchedDeferred));

  return {
    products: filteredProducts,
  };
}
