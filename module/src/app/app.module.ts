import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";

import { ProductModule } from './product/product.module';
import { TourModule } from './tour/tour.module';

import { HttpClientModule } from '@angular/common/http';
// import { ToursComponent } from './components/tours/tours.component';
// import { TourAddComponent } from './tour/components/tour-add/tour-add.component';
// import { TourEditComponent } from './tour/components/tour-edit/tour-edit.component';
// import { TourDeleteComponent } from './tour/components/tour-delete/tour-delete.component';
// import { TourComponent } from './tour/components/tour/tour.component';

@NgModule({
  declarations: [
    AppComponent,
    // ToursComponent,
    // TourAddComponent,
    // TourEditComponent,
    // TourDeleteComponent,
    // TourComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ProductModule,
    TourModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }