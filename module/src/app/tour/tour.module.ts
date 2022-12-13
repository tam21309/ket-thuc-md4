import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TourAddComponent } from './components/tour-add.component';
import { ToursComponent } from './components/tours.component';
import { TourComponent } from './components/tour.component';
import { TourEditComponent } from './components/tour-edit.component';
import { TourDeleteComponent } from './components/tour-delete.component';
import { TourRoutingModule } from './tour-routing.module';

@NgModule({
  declarations: [
    ToursComponent,
    TourComponent,
    TourAddComponent,
    TourEditComponent,
    TourDeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TourRoutingModule
    // TourService
  ]
})
export class TourModule { }