export interface Product {
  id: string;
  name: string;
  image_url: string;
  price_in_cents: number;
}

export interface ProductsFetchResponse {
  data: {
    allProducts: Product[];
  };
}
