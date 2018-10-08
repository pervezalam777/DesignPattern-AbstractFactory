import { IAbstractBurgerFactory } from "../interfaces/i-abstract-burger-factory";
import { BurgerFactory } from "./indian-burger-factory";
import { IngredientFactory } from "./indian-ingredient-factory";
import { IBurgerFactory } from "../interfaces/i-burger-factory";
import { IIngredientFactory } from "../interfaces/i-ingredient-factory";

export class IndianBurgerFactory implements IAbstractBurgerFactory {
    
    getBurgerFactory():IBurgerFactory {
        return new BurgerFactory();
    }

    getIngredientFactory():IIngredientFactory {
        return new IngredientFactory();
    }
    
}