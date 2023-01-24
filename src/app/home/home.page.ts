import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  page1 = true;
  page2 = false;
  page3 = false;

  /**
      * changeToPage1 - change the value of page1 to true
      * the classes on the view will be updated accordingly
      * Return: void
      */
  changeToPage1 = () => {
    this.page3 = false;
    this.page1 = true;
    setTimeout(this.changeToPage2, 6000);
  }

  /**
  * changeToPage2 - change the value of page2 to true
  * the classes on the view will be updated accordingly
  * Return: void
  */
  changeToPage2 = () => {
    this.page1 = false;
    this.page2 = true;
    setTimeout(this.changeToPage3, 6000);
  }

  /**
  * changeToPage2 - change the value of page3 to true
  * the classes on the view will be updated accordingly
  * Return: void
  */
  changeToPage3 = () => {
    this.page2 = false;
    this.page3 = true;
    setTimeout(this.changeToPage1, 6000);
  }


  constructor() { }

  ngOnInit(): void {
    setTimeout(this.changeToPage2, 6000);
  }
}

