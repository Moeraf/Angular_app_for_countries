import { Injectable } from '@angular/core';
import { cardinfo } from './country';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CountrySvc {

    cards : cardinfo[] = [];
    CountryToSearch:string = ''

    constructor(private ApiCaller:HttpClient){

    }
    getdata(filldata:any){
        this.cards = []
        var url = "";
        if (this.CountryToSearch == "") {
          url +="https://restcountries.com/v3.1/all"
        } else {
          url = "https://restcountries.com/v3.1/name/" + this.CountryToSearch
        }
        this.ApiCaller.get(url).subscribe((json:any) =>{
          json.forEach((country:any) => {
            let c = new cardinfo()
            c.name = country.name.common;
            c.region = country.region;
            c.imgsrc = country.flags.png;
            c.population = country.population;
            this.cards.push(c)
          });
          if(filldata !=null){filldata(this.cards)}
        })
//         fetch(url)
//             .then(response => response.json())
//             .then(json => {
//               json.forEach((country:any) => {
//                 let c = new cardinfo()
//                 c.name = country.name.common;
//                 c.region = country.region;
//                 c.imgsrc = country.flags.png;
//                 c.population = country.population;
//                 this.cards.push(c)
//               });
//               if(filldata !=null){filldata(this.cards)}
//             })
      }
 }