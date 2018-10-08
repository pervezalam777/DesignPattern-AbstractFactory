import { IBurgerFactory } from "../interfaces/i-burger-factory";
import { IBurger } from "../interfaces/i-burger";
import { Burger, BURGER_TYPE } from "../burgers/burger";

const priceMap:any = {}
priceMap[BURGER_TYPE.ALO_TIKKI] = 50;
priceMap[BURGER_TYPE.PANEER] = 80;
priceMap[BURGER_TYPE.SPICY_CHIKEN] = 120;
priceMap[BURGER_TYPE.FILET_O_FISH] = 120;

export class BurgerFactory implements IBurgerFactory {
    public create(name:string):IBurger {
        let price = priceMap[name] ||  -1;
        if(price === -1){
            console.log(`${name} not available`);
            return new Burger();
        } 
        return new Burger(name, price);
    }
}