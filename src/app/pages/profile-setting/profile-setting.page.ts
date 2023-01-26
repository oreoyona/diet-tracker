import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.page.html',
  styleUrls: ['./profile-setting.page.scss'],
})

export class ProfileSettingPage implements OnInit {
  configMsg = true;
  showOptionTwo = false;
  showOptionThree = false;
  showLastStep = false;
  showOptions = ()=>{
    this.configMsg = false;
  }
  optionTwo = ()=>{
    this.showOptionTwo = true;
    this.showOptionThree = false;
    this.configMsg = false;
  }
  optionThree = ()=>{
    this.showOptionThree = true;
    this.showOptionTwo = false;
    this.configMsg = false;
  }

  lastStep = ()=>{

  }
  optionForm = new FormGroup({
    sexe: new FormControl('', Validators.required),
    age: new FormControl(''),
    name: new FormControl(''),
    diabetes: new FormControl('')

  })

  addProfile =(data: FormGroup)=>{
    if (data.valid){
      console.log(data.value);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
