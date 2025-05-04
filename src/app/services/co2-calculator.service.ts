import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Co2CalculatorService {

  constructor() { }

  calculate(data: {
    kmCar: number;
    electricity: number;
    heating: number;
    diet: string;
  }): number {
    const car = data.kmCar * 0.21 * 52 / 1000; // km/Woche → t/Jahr
    const electricity = data.electricity * 12 * 0.42 / 1000; // Monat → Jahr
    const heating = data.heating * 12 * 0.25 / 1000;

    let diet = 0;
    switch (data.diet) {
      case 'vegan':
        diet = 1;
        break;
      case 'vegetarisch':
        diet = 1.5;
        break;
      case 'gemischt':
        diet = 2;
        break;
    }

    const total = car + electricity + heating + diet;
    return Math.round(total * 100) / 100; // auf 2 Nachkommastellen runden
  }
}
