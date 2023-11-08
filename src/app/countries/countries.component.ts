import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { cardinfo } from '../Classes/country';
import { CountrySvc } from '../Classes/CountryService';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  cards : cardinfo[] = []
  @Input() CountryToSearch=""
  constructor(private cs: CountrySvc){
    // let c1 = new cardinfo()
    // c1.name = "moemen";
    // c1.description = "hello i am";
    // c1.imgsrc = "https://cdn.pixabay.com/photo/2022/10/24/18/10/street-7544046_960_720.jpg";
    // this.cards.push(c1)
    this.cs.getdata((data:any)=>{this.cards = data})
  }

  ngOnChanges(){
    this.cs.CountryToSearch = this.CountryToSearch
    this.cs.getdata((data:any)=>{this.cards = data})
  }

  ngOnInit(): void {
  }

}
