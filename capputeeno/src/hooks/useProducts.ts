import { ProductsFetchResponse } from '@/types/products';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';
import { useFilter } from './useFilter';
import { mountQuery } from '@/utils/graphql-filters';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const getProducts = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, { query });
};

export function useProducts() {
  const { type, priority } = useFilter();
  const query = mountQuery(type, priority);

  const { data } = useQuery({
    queryFn: () => getProducts(query),
    queryKey: ['products', type, priority],
  });

  return {
    products: data?.data?.data?.allProducts ?? [],
  };
}
