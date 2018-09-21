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

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    AddEventosComponent,
    EventosComponent
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
