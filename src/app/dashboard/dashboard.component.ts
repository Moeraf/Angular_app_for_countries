import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // title = "app01"
  SpecificCountryToSearch = ""
  ListenToChild(_count:string){
    this.SpecificCountryToSearch = _count;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
