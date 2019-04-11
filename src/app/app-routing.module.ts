import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { GridComponent } from './grid/grid.component';
import { ElementsComponent } from './elements/elements.component';
import { PersonalizationComponent } from './personalization/personalization.component';
import { SystemNav1Component } from './systemnav1/systemnav1.component';
import { SystemNav2Component } from './systemnav2/systemnav2.component';



const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'forms',
        component: FormsComponent
    },
    {
        path: 'grid',
        component: GridComponent
    },
    {
        path: 'elements',
        component: ElementsComponent
    },
    {
        path: 'personalization',
        component: PersonalizationComponent
    },
    {
        path: 'systemnav1',
        component: SystemNav1Component
    },
    {
        path: 'systemnav2',
        component: SystemNav2Component
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
