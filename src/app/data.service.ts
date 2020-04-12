import { Injectable } from "@angular/core";
import { Country } from "./country";
import { Car } from "./car";

@Injectable()
export class DataService {
  
  getCategoricalSource(): Array<Country> {
    return [
        { country: "Germany", amount: 15, secondVal: 14, thirdVal: 24, impact: 0, year: 0 },
        { country: "France", amount: 13, secondVal: 23, thirdVal: 25, impact: 0, year: 0 },
        { country: "Bulgaria", amount: 24, secondVal: 17, thirdVal: 23, impact: 0, year: 0 },
        { country: "Spain", amount: 11, secondVal: 19, thirdVal: 24, impact: 0, year: 0 },
        { country: "USA", amount: 18, secondVal: 8, thirdVal: 21, impact: 0, year: 0 }
    ];
}
  getPieSource(): Array<Car> {
  return [
      { brand: "Audi", amount: 10 },
      { brand: "Mercedes", amount: 76 },
      { brand: "Fiat", amount: 60 },
      { brand: "BMW", amount: 24 },
      { brand: "Crysler", amount: 40 }
  ];
}
}
