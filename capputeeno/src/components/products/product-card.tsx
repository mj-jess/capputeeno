import { useMemo } from 'react';
import styled from 'styled-components';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 256px;

  backdrop-filter: blur(10px);
  border-radius: 0px 0px 4px 4px;
  background: rgba(255, 255, 255, 0.4);

  img {
    width: 100%;
    height: 300px;
    border-radius: 8px 8px 0 0;
  }

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shapes-dark);
  }

  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 8px 0;

    > div {
      width: 228px;
      height: 1px;
      margin: 8px 0;
      padding: 0px;
      background: var(--shapes);
    }
  }
`;

export function ProductCard({ title, price, image }: ProductCardProps) {
  const formattedPrice = useMemo(() => {
    const valueInRS = price / 100;

    return valueInRS.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }, [price]);

  return (
    <Card>
      <img src={image} alt={title} />

      <div>
        <h3>{title}</h3>
        <div></div>
        <p>{formattedPrice}</p>
      </div>
    </Card>
  );
}
