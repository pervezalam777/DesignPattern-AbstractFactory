import { IBurger } from "../interfaces/i-burger";
import { IIngredient } from "../interfaces/i-ingredient";

export const BURGER_TYPE = {
    BARBECUE:"Barbecue Burgers",
    CARIBBEAN:"Caribbean Burger",
    CHORIZO:"Chorizo Burger",
    AVOCADO:"Avocado Beef Burger",
    SPANISH:"Spanish Burger",
    ALO_TIKKI:"Alo Tikki Burger",
    PANEER:"Paneer Burger",
    SPICY_CHIKEN:"Spicy Chiken Burger",
    FILET_O_FISH: "filet-O-Fish Burger"
}

export class Burger implements IBurger {
    private ingredients:Array<IIngredient> = [];

    //Brown, Wheat & Multigrain
    private breadType:string;
    private cost:number;

    constructor(breadType:string = "Burger", 
                cost:number = 30){
        this.breadType = breadType
        this.cost = cost;
    }

    addIngredient(item:IIngredient){
        this.ingredients.push(item);
    }

    getDescription():string{
        let ingradient:string = this.ingredients.reduce((str, current) =>{
            return str+" "+current.getName();
        }, "")

        return `${this.breadType} with ${ingradient}`;
    }
}