import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
@Input() name:string = ""
@Input() region:string = ""
@Input() imgsrc:string = ""
@Input() population:number = -1


ShowPopulation(){
  alert(this.population)
}


  constructor() { }
  ngOnInit(): void {
  }
}
