import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  viewMode = 'about'
  subViewMode = 'overview'
  constructor() { }

  ngOnInit(): void {
    console.log(this.viewMode)
    console.log(this.subViewMode)
  }

}
