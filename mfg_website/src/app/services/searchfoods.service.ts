import { Injectable } from '@angular/core';
import { FoodSearchCriteria } from '../interfaces/food-search-criteria';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SearchfoodsService {
  FDAfoodURL = "https://api.nal.usda.gov/fdc/v1/foods/search?query="
  API_KEY= "&api_key=yFrR7YwKtH57j8KPW2DZLLEndwlooe1Tv327UWAX"
  limit = "&limit=1"
  // FDAfoodURL = 'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=yFrR7YwKtH57j8KPW2DZLLEndwlooe1Tv327UWAX&query='
  //FDAfoodURL = 'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=yFrR7YwKtH57j8KPW2DZLLEndwlooe1Tv327UWAX'

  constructor(private http: HttpClient) { }


  // getFood(Query: string):Observable<FoodSearchCriteria[]>{
  //   return this.http.get<FoodSearchCriteria[]>(this.FDAfoodURL)
  // }

  getFood(Query:String):Observable<any>{
      
      return  this.http.get(this.FDAfoodURL + Query + this.limit + this.API_KEY);

  }

}
