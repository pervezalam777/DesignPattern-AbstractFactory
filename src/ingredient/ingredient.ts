import { IIngredient } from "../interfaces/i-ingredient";

export const INGREDIENT_NAMES = {
    SALT:"salt",
    BUTTER:"butter",
    SUGAR:"sugar",
    CHEESE:"cheese",
    PEPPER:"pepper",
    ONION:"onion",
    BROWN_SUGAR:"brown",
    TOMATO:"tomato",
    TOMATO_SAUCE:"tamato sauce"
}

export class Ingredient implements IIngredient {
    private name:string;
    private quantity:number;
    private measureIn:string;
    private cost:number;
    private taste:string;

    constructor(name:string = "salt", 
                quantity:number = 0.25, 
                measureIn:string="spoon", 
                cost:number=0.01,
                taste:string="salty"){

        this.name = name;
        this.quantity = quantity;
        this.measureIn = measureIn;
        this.cost = cost;
        this.taste = taste;
    }
    
    getName():string {
        return this.name;
    }

    getTaste():string {
        return "salty"
    }
}