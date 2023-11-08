import { Component, OnInit } from '@angular/core';
import { cardinfo } from '../Classes/country';
import {Router} from '@angular/router'
@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {
  CountryToBeAdded :cardinfo = new cardinfo()


  constructor(private aya:Router) { }

  ngOnInit(): void {
  }
  
  SaveCountry(){
      console.log(this.CountryToBeAdded);
      this.aya.navigate([''])
  }
}
