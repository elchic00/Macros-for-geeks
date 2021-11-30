export interface FoodSearchCriteria {
  query: string;
  generalSearchInput: string;
  pageNumber: number;
  numberOfResultsPerPage: number;
  pageSize: number;
  requireAllWords: boolean;
}
