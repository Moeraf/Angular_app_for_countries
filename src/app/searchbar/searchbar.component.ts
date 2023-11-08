import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { cardinfo } from '../Classes/country';
import { CountrySvc } from '../Classes/CountryService';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
 SearchCountry:string = ""
 @Output() SearchBTNclick = new EventEmitter<string>();
 cards : cardinfo[] = []
 constructor(private cs: CountrySvc) { }
 
  selectcountry(){
    this.SearchBTNclick.emit(this.SearchCountry)
  }

  ngOnInit(): void {
    this.cs.getdata((data:any)=>{this.cards = data})
  }
  SearchSpecificCountry(){
    this.SearchBTNclick.emit(this.SearchCountry)
  }
}
