import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.page.html',
  styleUrls: ['./profile-setting.page.scss'],
})

export class ProfileSettingPage implements OnInit {
  optionForm = new FormGroup({
    sexe: new FormControl(''),
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
