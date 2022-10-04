import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { HijoComponent } from './components/input-output/hijo/hijo.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceParentComponent } from './components/service-parent/service-parent.component';
import { ServiceChildComponent } from './components/service-parent/service-child/service-child.component';
import { ResultadoService } from './services/resultado.service';
import { PokeListService } from './services/poke-list.service';
import { HttpClientModule } from '@angular/common/http';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { PokeDetailComponent } from './components/poke-list/poke-detail/poke-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BodyComponent,
    NavBarComponent,
    InputOutputComponent,
    HijoComponent,
    HomeComponent,
    ServiceParentComponent,
    ServiceChildComponent,
    PokeListComponent,
    PokeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    HttpClientModule
  ],
  providers: [ResultadoService, PokeListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
