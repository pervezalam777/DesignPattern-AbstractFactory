import { IIngredient } from "./i-ingredient";

export interface IIngredientFactory {
    create(name:string):IIngredient
}