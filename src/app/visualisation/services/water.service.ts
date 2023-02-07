import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaterService {
  data = [];
  numberOfCupBySexe: any;
  sexes = ['homme', 'femme'];

  /**
   * findNumberOfCups - find the number of cups a person
   * needs to drink accordingly to his sexe
   * @param sexe(str) : the sexe of the person
   * @returns the quantity of water to drink
   */
  findNumberOfCups(sexe: string) {
    return sexe === this.sexes[0] ? 15.5 : 11.5;
  }


  /**
   * converter - converts a cup of water to ml
   * @param numberOfCup the number of cup to be converted
   * @returns the equivalent in ml
   */
  converter(numberOfCup: number){
    return 200 * numberOfCup
  }

  /**
   * findTheDates - computers the times of a day
   * a person needs to drink water
   * @returns 
   */
  findTheDates(){
    let start = new Date()
    
  }




  constructor() { }
}
