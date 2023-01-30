import { Component, OnInit, Input } from '@angular/core';
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

  public data:Array<any> = this.waterService.data;

  constructor(private waterService: WaterService) { }

  ngOnInit() {
    this.cupGoal = Math.round(this.waterService.findNumberOfCups(this.sexe));
   
  }

}
