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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FormsComponent,
    LogoComponent,
    GridComponent
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
