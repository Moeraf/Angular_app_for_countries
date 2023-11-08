import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CountrySvc } from './Classes/CountryService';
import { CountriesComponent } from './countries/countries.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import {HttpClientModule} from '@angular/common/http'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './Classes/MyLoveIntercepteur';
import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { NotFoundComponent } from './not-found/not-found.component';





const routes :Routes = [
  {path:'', component :DashboardComponent},
  {path:'adctr', component :AddCountryComponent},
  {path:'**', component :NotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CountriesComponent,
    SearchbarComponent,
    DashboardComponent,
    AddCountryComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CountrySvc,
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
