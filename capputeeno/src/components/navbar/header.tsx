'use client';

import { Saira_Stencil_One } from 'next/font/google';
import styled from 'styled-components';
import { CartControl } from '.';
import { PrimaryInputWSearchIcon } from '../inputs';

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'],
});

interface HeaderProps {}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`;

const Logo = styled.a`
  font-size: 40px;
  font-weight: 400;
  line-height: 150%;
  color: var(--logo-color);
`;

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>capputeeno</Logo>

      <div>
        <PrimaryInputWSearchIcon placeholder="Procurando por algo específico?" />
        <CartControl />
      </div>
    </TagHeader>
  );
}
