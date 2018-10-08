import { IIngredient } from "./i-ingredient";

export interface IBurger {
    addIngredient(item:IIngredient):void
    getDescription():string
}