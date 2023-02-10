import { Component, OnInit } from '@angular/core';
import { IonCard } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { Users } from 'src/app/common/classes/Users';
import { WaterService } from 'src/app/visualisation/services/water.service';

@Component({
  selector: 'app-water-page',
  templateUrl: './water.page.html',
  styleUrls: ['./water.page.scss'],
})
export class WaterPage implements OnInit {

  email = ''; name = ''; age = 18; diabetes = false; sexe = 'homme'; cupGoal!: number; numCup !: number;
  data:Array<Users> = [];
  datum$!: Observable<Users>;

  currentUser = new Users(
    this.name,
    this.age,
    this.email,
    this.diabetes,
    0,
    undefined,
    undefined,
    this.sexe
  )

  /**
   * updateData - updates the data in localStorage
   */
  updateData() {
    localStorage.removeItem("currentUser");
    localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    this.updateDataBis();
  }

  /**
   * addCup - adds a cup of water to the user records
   */
  addCup = (b: IonCard) => {
    if (this.currentUser.numberOfCup < this.cupGoal) {
      this.currentUser.addCup();
      this.numCup = this.currentUser.numberOfCup;
      b.disabled = true;

      setTimeout(() => {
        b.disabled = false;
      }, 5000)
    }

    this.updateData();


  }

  updateDataBis() {
    let brute = localStorage.getItem("currentUser");
    if (brute) {
      this.datum$ = of(JSON.parse(brute))
    }
    this.datum$.subscribe((el:Users) => {
      this.data.push(el);
    })

  }

  







  constructor(private waterService: WaterService) { }

  async ngOnInit() {
    this.numCup = this.currentUser.numberOfCup;
    this.cupGoal = Math.round(this.waterService.findNumberOfCups(this.sexe));
    this.currentUser.CupGoalSetter(this.cupGoal);
    localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    this.updateDataBis();
  }
  async ngOnChanges() {
    this.numCup = this.currentUser.numberOfCup;
    this.cupGoal = Math.round(this.waterService.findNumberOfCups(this.sexe));
    this.currentUser.numberOfCup = this.numCup;
    this.updateDataBis();




  }




}
