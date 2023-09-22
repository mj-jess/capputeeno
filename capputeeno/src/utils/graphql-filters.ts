import { FilterType, PriorityType } from '@/types/filter-types';

function getCategoryFilter(type: FilterType) {
  const hasCategory = type !== FilterType.ALL;
  return hasCategory ? `filter: { category: "${type}"}` : '';
}

function getSortByPriority(priority: PriorityType) {
  if (priority === PriorityType.NEWS) return { field: 'created_at', order: 'DESC' };
  if (priority === PriorityType.MINOR_PRICE) return { field: 'price_in_cents', order: 'ASC' };
  if (priority === PriorityType.BIGGEST_PRICE) return { field: 'price_in_cents', order: 'DESC' };

  return { field: 'sales', order: 'DESC' };
}

const getProperties = () => {
  return `
    id
    name
    sales
    category
    image_url
    price_in_cents
  `;
};

export const mountQuery = (type: FilterType, priority: PriorityType) => {
  const properties = getProperties();

  if (type === FilterType.ALL && priority === PriorityType.POPULARITY) {
    return `
      query {
        allProducts {
          ${properties}
        }
      }
    `;
  }

  const { field, order } = getSortByPriority(priority);
  const categoryFilter = getCategoryFilter(type);

  return `
    query {
      allProducts(sortField: "${field}", sortOrder: "${order}", ${categoryFilter}) {
        ${properties}
      }
    }
  `;
};
