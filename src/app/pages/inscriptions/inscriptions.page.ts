import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { Auth } from 'src/app/common/interfaces/auth';
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

  signUpWithGoogle = ()=>{
    
  }
  connexionForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('')
  })

  inscriptionForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])

  });

  /**
   * newUser - register a new user to the application
   * @param value : the infromations about the new user 
   */
  newUser = (value: Partial<{ email: string | null; password: string | null; }>) =>{
    if(value.email && value.password)
    {
        const val: Auth = {
            email: value.email,
            password: value.password
          }

          console.log("les donnes a envoyer sont", val);
          this.router.navigate(['inscription/options']);
    }

    
      


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



  constructor(private auth: AuthService, private router: Router) {
      const date = new Date();
      const hour = date.getHours();
      this.getStartMessage(hour);
  }

  ngOnInit(): void {
      
  }


}
