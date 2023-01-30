import { Component, OnInit} from '@angular/core';
import { IonCard } from '@ionic/angular';
import { Users } from 'src/app/common/interfaces/auth';
import { WaterService } from 'src/app/visualisation/services/water.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
 

  email = '';
  name = '';
  age = 18;
  diabetes = false;
  sexe = 'homme';
  cupGoal!: number;
  numCup !: number;


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
     * addCup - adds a cup of water to the user records
     */
  addCup = (b: IonCard)=>{
    if(this.currentUser.numberOfCup < this.cupGoal){
      this.currentUser.addCup();
      this.numCup = this.currentUser.numberOfCup;
      b.disabled = true;

      setTimeout(()=>{
        b.disabled = false;
      }, 5000)
    }

  }

  

  public data:Array<any> = this.waterService.data;

  constructor(private waterService: WaterService) { }

  ngOnInit() {
    this.numCup = this.currentUser.numberOfCup;
    this.cupGoal = Math.round(this.waterService.findNumberOfCups(this.sexe));
   
  }
  ngOnChanges(){
    this.numCup = this.currentUser.numberOfCup;
    this.cupGoal = Math.round(this.waterService.findNumberOfCups(this.sexe));
    
  }

}
