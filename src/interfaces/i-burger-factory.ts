import { IBurger } from "./i-burger";

export interface IBurgerFactory {
    create(name:string):IBurger
}