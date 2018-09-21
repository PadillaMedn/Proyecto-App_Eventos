import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';

//tastr
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {ToastrModule } from 'ngx-toastr';

//config. Firebase
import {AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireModule } from 'angularfire2';
import {environment } from '../environments/environment';

import { EventosComponent } from './components/eventos/eventos.component';
import { AddEventosComponent } from './components/add-eventos/add-eventos.component';

//servicio
import {EventosService } from './servicios/eventos.service';
import { CompGeneralComponent } from './components/comp-general/comp-general.component';
import { AddEventsComponent } from './components/comp-general/add-events/add-events.component';
import { ListaEventosComponent } from './components/comp-general/lista-eventos/lista-eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    AddEventosComponent,
    EventosComponent,
    CompGeneralComponent,
    AddEventsComponent,
    ListaEventosComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    // ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    EventosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
