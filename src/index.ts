import { IndianBurgerFactory } from "./india/indian-abstract-factory";
import { UKBurgerFactory } from "./uk/uk-abstract-factory";
import { IBurgerFactory } from "./interfaces/i-burger-factory";
import { IAbstractBurgerFactory } from "./interfaces/i-abstract-burger-factory";
import { IIngredientFactory } from "./interfaces/i-ingredient-factory";
import { IBurger } from "./interfaces/i-burger";
import { BURGER_TYPE } from "./burgers/burger";
import { IIngredient } from "./interfaces/i-ingredient";
import { INGREDIENT_NAMES } from "./ingredient/ingredient";

class Bootstrap {

    constructor(){  }

    initialize(){

        let factory:IAbstractBurgerFactory = this.getCountryFactory("uk");
        this.getBurgerInUK(factory);

        factory = this.getCountryFactory("india");
        this.getBurgerInIndia(factory);

    }

    getBurgerInUK(factory:IAbstractBurgerFactory){
        let burgerFactory:IBurgerFactory = factory.getBurgerFactory();
        let ingredientFactory:IIngredientFactory = factory.getIngredientFactory();

        let burger:IBurger = burgerFactory.create(BURGER_TYPE.AVOCADO)
        this.addIngredient(ingredientFactory, burger);

        console.log("My order burger order in UK: ")
        console.log(burger.getDescription());
    }

    getBurgerInIndia(factory:IAbstractBurgerFactory){
        let burgerFactory:IBurgerFactory = factory.getBurgerFactory();
        let ingredientFactory:IIngredientFactory = factory.getIngredientFactory();

        let burger:IBurger = burgerFactory.create(BURGER_TYPE.SPICY_CHIKEN)
        this.addIngredient(ingredientFactory, burger);

        console.log("My order burger order in India: ")
        console.log(burger.getDescription());
    }

    addIngredient(ingredientFactory:IIngredientFactory, burger:IBurger){
        let salt:IIngredient = ingredientFactory.create(INGREDIENT_NAMES.SALT);
        let pepper:IIngredient = ingredientFactory.create(INGREDIENT_NAMES.PEPPER);
        let tomato:IIngredient  = ingredientFactory.create(INGREDIENT_NAMES.TOMATO);
        let tomatoSauce:IIngredient  = ingredientFactory.create(INGREDIENT_NAMES.TOMATO_SAUCE);
        burger.addIngredient(salt);
        burger.addIngredient(pepper);
        burger.addIngredient(tomato);
        burger.addIngredient(tomatoSauce);
    }

    getCountryFactory(countryName:string):IAbstractBurgerFactory {
        if(countryName === "uk"){
            return new UKBurgerFactory();
        }
        return new IndianBurgerFactory();
    }
}   

let boot = new Bootstrap();
boot.initialize();  