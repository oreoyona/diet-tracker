import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaterService {
  data = [
    { "ml": 2500, "jour": "2020-05-12T12:19:00+00:00" },
    { "ml": 2500, "jour": '2020-05-13T12:19:00+00:00' },
    { "ml": 3015, "jour": '2020-05-14T12:19:00+00:00' },
    { "ml": 0, "jour": '2020-05-15T15:19:00+00:00' },
    { "ml": 500, "jour": '2020-05-16T12:19:00+00:00'},
    { "ml": 2500, "jour": '2020-05-17T12:19:00+00:00' },
    { "ml": 1500, "jour": '2020-05-18T12:19:00+00:00'},
  ]
  numberOfCupBySexe: any;
  sexes = ['homme', 'femme'];

  findNumberOfCups(sexe: string) {
    return sexe === this.sexes[0] ? 15.5 : 11.5;
  }


  constructor() { }
}
