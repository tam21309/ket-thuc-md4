import { Component } from '@angular/core';
import { TourService } from './../tour.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Tour } from '../tour';

@Component({
  selector: 'app-tour-add',
  templateUrl: './../templates/tour-add.component.html',
})
export class TourAddComponent {
  tour!:Tour;
  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _TourService:TourService,
    private _Router: Router
  ) {}
  handleSubmit(value:any):void {
    let tourData:Tour = {
      name: value.name,
      price: value.price,
    }
    this._TourService.save( tourData).subscribe(() => {
      //chuyen huong ve list
      this._Router.navigate(['/tours']);
    }, (e: any) => {
      console.log(e);
    });
    // this._ProductService.save(productData);
  }   
}
