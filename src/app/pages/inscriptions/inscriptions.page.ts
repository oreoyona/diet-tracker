import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from "@angular/forms";
import { AuthService } from 'src/app/common/services/auth.service';
@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.page.html',
  styleUrls: ['./inscriptions.page.scss'],
})
export class InscriptionsPage implements OnInit {

  startMessage = "Bonjour";
  visible = false;
  inscription = true;
  connexionFrom = false;
  hide = true;
  todo = {
    title: "",
    description: ""
  }
  logForm() {
    console.log(this.todo)
  }

  connexionForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
  })

  inscriptionForm = new FormGroup({
      email: new FormControl(''),
      nom: new FormControl(''),
      mdp: new FormGroup(
          {
              password: new FormControl(''),
              password2: new FormControl('')
          }
      )
  });

  /**
   * newUser - register a new user to the application
   * @param value : the infromations about the new user 
   */
  newUser = (value: any) =>{
      console.log(value)
  }

  
  /**
   * - connexion: makes an HTTP request to login the user
   * @value : the object containg the credentials of the user
   */
  connexion = (value: any) => {
      this.auth.login(value).subscribe( res => {
          console.log(res)
      })
   
  }


  /**
   * logInscriptionForm - charges the inscription form on the view
   */
  logInscriptionForm = () => {
      this.inscription = !this.inscription;
  }

  /**
   * changeVisibility - change the visibility of the password
   */
  changeVisibility() {
      this.visible = !this.visible;
  }

  /**
   * getStartMessage - return a greeting message
   * Depending on the hour
   * @param hour The current hour  
   */
  getStartMessage = (hour: number) => {
      hour < 16 ? this.startMessage = "Bonjour" : this.startMessage = "Bonsoir"
  }



  constructor(private auth: AuthService) {
      const date = new Date();
      const hour = date.getHours();
      this.getStartMessage(hour);
  }

  ngOnInit(): void {
      
  }


}
