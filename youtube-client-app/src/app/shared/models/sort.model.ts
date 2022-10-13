export type SortOrder = 'asc' | 'desc' | undefined;

export type SortBy = 'date' | 'views';

export interface SortParams {
  type: SortBy;
  sort: SortOrder;
}
