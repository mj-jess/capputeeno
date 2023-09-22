import { useProducts } from '@/hooks/useProducts';
import { ProductCard } from './product-card';
import styled from 'styled-components';

interface ProductsListProps {}

const ContainerGrid = styled.div`
  display: grid;
  grid-gap: 32px;
  max-width: 100%;
  margin-top: 32px;
  grid-template-columns: repeat(auto-fill, 256px);
`;

export function ProductsList(props: ProductsListProps) {
  const { products } = useProducts();

  return (
    <ContainerGrid>
      {products.map(({ id, image_url, name, price_in_cents }) => (
        <ProductCard key={id} image={image_url} title={name} price={price_in_cents} />
      ))}
    </ContainerGrid>
  );
}
