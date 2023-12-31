'use client';

import styled from 'styled-components';
import { FilterByPriority, FilterByType } from '.';

interface FilterBarProps {}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export function FilterBar(props: FilterBarProps) {
  return (
    <Container>
      <FilterByType />
      <FilterByPriority />
    </Container>
  );
}
