import { useFilter } from '@/hooks/useFilter';
import { FilterType } from '@/types/filter-types';
import styled from 'styled-components';

interface FilterByTypeProps {}

interface FilterItemProps {
  selected?: boolean;
}

const FilterList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const FilterItem = styled.li<FilterItemProps>`
  cursor: pointer;

  font-size: 16px;
  line-height: 22px;
  font-family: inherit;
  font-weight: ${(props) => (props?.selected ? 600 : 400)};

  text-align: center;
  text-transform: uppercase;

  color: var(--text-dark);
  border-bottom: ${(props) => (props?.selected ? '4px solid var(--orange-low)' : 'none')};
`;

const categories = [
  { label: 'Todos os produtos', type: FilterType.ALL },
  { label: 'Camisetas', type: FilterType.SHIRT },
  { label: 'Canecas', type: FilterType.MUG },
];

export function FilterByType(props: FilterByTypeProps) {
  const { type, setType } = useFilter();

  const onChangeType = (type: FilterType) => setType(type);

  return (
    <FilterList>
      {categories.map((category) => (
        <FilterItem
          key={category.type}
          selected={type === category.type}
          onClick={() => onChangeType(category.type)}
        >
          {category.label}
        </FilterItem>
      ))}
    </FilterList>
  );
}
