import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  quotes: Array<string> = [
    '"If you don\'t control pawns, you are one."',
    '"Do you have a longing? Would you like one?"',
    '"Secrets are sharper than blades."',
    '"Every problem is an opportunity."',
    '"I like to leave a lasting impression."',
    '"Wealth is valuable only as a means to power."',
    '"Come, look me in the eyes."'
  ];
  quote: string = this.quotes[Math.floor(Math.random() * Math.floor(7))]
  constructor() { }

  ngOnInit() {
  }
  
}
