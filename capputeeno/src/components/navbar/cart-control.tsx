'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import styled from 'styled-components';
import { CartIcon } from '../icons';

const Container = styled.div`
  position: relative;
`;

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;

  padding: 0 5px;
  font-size: 10px;
  margin-left: -10px;

  color: white;
  background-color: var(--delete-color);
`;

export function CartControl() {
  const [cartItems] = useLocalStorage<any[]>('cart-items');

  return (
    <Container>
      <CartIcon />
      {cartItems.length && <CartCount>{cartItems.length}</CartCount>}
    </Container>
  );
}
