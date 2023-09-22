import styled from 'styled-components';
import { ArrowDownIcon } from '../icons';
import { useState } from 'react';
import { useFilter } from '@/hooks/useFilter';
import { PriorityType } from '@/types/filter-types';

interface FilterByPriorityProps {}

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    border: none;
    cursor: pointer;
    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    font-family: inherit;

    color: var(--text-dark);

    svg {
      margin-left: 8px;
    }
  }
`;

const SortByList = styled.ul`
  list-style: none;
  position: absolute;
  top: 100%;

  width: 250px;
  padding: 12px 16px;
  border-radius: 4px;

  background-color: white;
  box-shadow: 0px 4px 12px 0px #0000001a;

  li + li {
    margin-top: 4px;
  }
`;

const SortItem = styled.li`
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: var(--text-dark);
`;

const sortItems = [
  { label: 'Novidades', type: PriorityType.NEWS },
  { label: 'Preço: Maior - menor', type: PriorityType.BIGGEST_PRICE },
  { label: 'Preço: Menor - maior', type: PriorityType.MINOR_PRICE },
  { label: 'Mais vendidos', type: PriorityType.POPULARITY },
];

export function FilterByPriority(props: FilterByPriorityProps) {
  const { setPriority } = useFilter();

  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen((open) => !open);

  const onChangePriority = (priority: PriorityType) => {
    setPriority(priority);
    setIsOpen(false);
  };

  return (
    <Container>
      <button onClick={onOpen}>
        Organizar por
        <ArrowDownIcon />
      </button>

      {isOpen && (
        <SortByList>
          {sortItems.map((sortItem, index) => (
            <SortItem key={index} onClick={() => onChangePriority(sortItem.type)}>
              {sortItem.label}
            </SortItem>
          ))}
        </SortByList>
      )}
    </Container>
  );
}
