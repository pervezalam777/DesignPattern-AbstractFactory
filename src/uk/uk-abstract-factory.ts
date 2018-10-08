import { IAbstractBurgerFactory } from "../interfaces/i-abstract-burger-factory";
import { BurgerFactory } from "./uk-burger-factory";
import { IngredientFactory } from "./uk-ingredient-factory";
import { IBurgerFactory } from "../interfaces/i-burger-factory";
import { IIngredientFactory } from "../interfaces/i-ingredient-factory";

export class UKBurgerFactory implements IAbstractBurgerFactory {
    
    getBurgerFactory():IBurgerFactory {
        return new BurgerFactory();
    }

    getIngredientFactory():IIngredientFactory {
        return new IngredientFactory();
    }
    
}