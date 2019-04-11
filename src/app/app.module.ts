import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//App Router Navigation
import { AppRoutingModule } from './app-routing.module';


//Ng bootstrap dependency
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Main components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { LogoComponent } from './header/logo/logo.component';
import { GridComponent } from './grid/grid.component';
import { ElementsComponent } from './elements/elements.component';
import { PersonalizationComponent } from './personalization/personalization.component';
import { SystemNav1Component } from './systemnav1/systemnav1.component';
import { SystemNav2Component } from './systemnav2/systemnav2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FormsComponent,
    LogoComponent,
    GridComponent,
    ElementsComponent,
    PersonalizationComponent,
    SystemNav1Component,
    SystemNav2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
