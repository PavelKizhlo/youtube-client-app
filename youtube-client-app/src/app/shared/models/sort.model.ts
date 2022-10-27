export type SortOrder = 'asc' | 'desc' | undefined;

export type SortBy = 'date' | 'views' | undefined;

export interface SortParams {
  type: SortBy;
  sort: SortOrder;
}
