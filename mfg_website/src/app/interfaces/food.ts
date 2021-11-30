import { FoodNutrient } from '../interfaces/food-nutrient';

export interface Food {
  fdcId: number;
  description: string;
  lowercaseDescription: string;
  dataType: string;
  gtinUpc: string;
  publishedDate: string;
  brandOwner: string;
  ingredients: string;
  marketCountry: string;
  foodCategory: string;
  modifiedDate: string;
  dataSource: string;
  servingSizeUnit: string;
  servingSize: number;
  householdServingFullText: string;
  allHighlightFields: string;
  score: number;
  foodNutrients: FoodNutrient[];
  finalFoodInputFoods: any[];
  foodMeasures: any[];
  foodAttributes: any[];
  foodAttributeTypes: any[];
  foodVersionIds: any[];
  brandName: string;
  packageWeight: string;
}
