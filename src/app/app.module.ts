import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
<<<<<<< HEAD
import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './pages/index/index.component';
import { DetalleComponent } from './page/detalle/detalle.component';
=======
>>>>>>> 220c2f7d2e4315c30d9125557910111ba5a41e25

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
<<<<<<< HEAD
    IndexComponent,
    DetalleComponent
=======
>>>>>>> 220c2f7d2e4315c30d9125557910111ba5a41e25
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
