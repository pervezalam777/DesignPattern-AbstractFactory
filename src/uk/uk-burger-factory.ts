import { IBurgerFactory } from "../interfaces/i-burger-factory";
import { IBurger } from "../interfaces/i-burger";
import { Burger, BURGER_TYPE } from "../burgers/burger";

const priceMap:any = {}
priceMap[BURGER_TYPE.AVOCADO] = 5;
priceMap[BURGER_TYPE.BARBECUE] = 8;
priceMap[BURGER_TYPE.SPICY_CHIKEN] = 10;
priceMap[BURGER_TYPE.CARIBBEAN] = 12;
priceMap[BURGER_TYPE.CHORIZO] = 12;
priceMap[BURGER_TYPE.SPANISH] = 9;


export class BurgerFactory implements IBurgerFactory {
    public create(name:string):IBurger {
        let price:number = priceMap[name] || -1;
        if(price === -1){
            console.log(`${name} is not available`)
            return new Burger();
        }
        return new Burger(name, price);
    }
}