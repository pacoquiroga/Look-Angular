import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CustomSidenavComponent } from './custom-sidenav/custom-sidenav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { InventarioComponent } from './pages/inventario/inventario.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VentasComponent,
    InventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomSidenavComponent,
    SidenavComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
