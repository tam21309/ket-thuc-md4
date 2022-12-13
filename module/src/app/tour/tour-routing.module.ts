import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourAddComponent } from './components/tour-add.component';
import { ToursComponent } from './components/tours.component';
import { TourComponent } from './components/tour.component';
import { TourEditComponent } from './components/tour-edit.component';
import { TourDeleteComponent } from './components/tour-delete.component';


const routes: Routes = [
    { path: '', component: ToursComponent },
    { path: 'add', component: TourAddComponent},
    { path: ':id/show', component: TourComponent },
    { path: ':id/edit', component: TourEditComponent },
    { path: ':id/delete', component: TourDeleteComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TourRoutingModule { }