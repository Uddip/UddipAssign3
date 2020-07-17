import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  imgSrc;

  constructor() { }

  ngOnInit(): void {
    this.rollDice();
  }

  rollDice() {
    let random = Math.floor((Math.random() * 6) + 1);
    this.imgSrc = "../assets/dice/side_" + random + ".png";
  }

}
