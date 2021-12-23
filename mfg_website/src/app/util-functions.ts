import { Food } from "./interfaces/food";

// export interface Food {
//     readonly Food:string,
//     readonly Calories:number,
//     readonly Carbohydrates:number,
//     readonly Fats:number,
//     readonly Protein:number,
//     readonly Date:Date,
//     readonly Mealtime:string,
//     readonly UserId?:number
// }

export function totalNutritionDay(foods:Food[]):any{ //returns calories, carbohydrates, fats, protiens of array added up
    let results = {
        Calories: 0,
        Carbohydrates: 0,
        Fats: 0,
        Protien: 0
    }
    for(const food of foods){
        let {Calories, Carbohydrates, Fats, Protein} = food;
        results.Calories += Calories;
        results.Carbohydrates += Carbohydrates;
        results.Fats += Fats;
        results.Protien += Protein;
    }
    return results;
}