import { IIngredientFactory } from "../interfaces/i-ingredient-factory";
import { IIngredient } from "../interfaces/i-ingredient";
import { Ingredient, INGREDIENT_NAMES } from "../ingredient/ingredient";

const mapper:any = {}
mapper[INGREDIENT_NAMES.SALT] = {quantity:0.25, measureIn:"spoon", cost:0.01, taste:"salty"}
mapper[INGREDIENT_NAMES.BUTTER] = {quantity:0.25, measureIn:"spoon", cost:2, taste:"salty"}
mapper[INGREDIENT_NAMES.BROWN_SUGAR] = {quantity:0.5, measureIn:"spoon", cost:0.1, taste:"sweet"}
mapper[INGREDIENT_NAMES.CHEESE] = {quantity:1, measureIn:"piece", cost:5, taste:"salty"}
mapper[INGREDIENT_NAMES.ONION] = {quantity:2, measureIn:"piece", cost:1, taste:"not known"}
mapper[INGREDIENT_NAMES.SUGAR] = {quantity:0.5, measureIn:"spoon", cost:1, taste:"sweet"}
mapper[INGREDIENT_NAMES.TOMATO] = {quantity:2, measureIn:"piece", cost:5, taste:"sour"}
mapper[INGREDIENT_NAMES.TOMATO_SAUCE] = {quantity:2, measureIn:"spoon", cost:1, taste:"sour"}
mapper[INGREDIENT_NAMES.PEPPER] = {quantity:2, measureIn:"spoon", cost:1, taste:"spicy"}


export class IngredientFactory implements IIngredientFactory {
    
    create(name:string):IIngredient {
        let ingredient = mapper[name];
        return new Ingredient(name, 
            ingredient.quantity,
            ingredient.measureIn,
            ingredient.const,
            ingredient.taste
            );
    }
}