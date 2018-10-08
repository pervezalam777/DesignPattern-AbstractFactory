import { IBurgerFactory } from "./i-burger-factory";
import { IIngredientFactory } from "./i-ingredient-factory";

export interface IAbstractBurgerFactory {
    getBurgerFactory():IBurgerFactory
    getIngredientFactory():IIngredientFactory
}