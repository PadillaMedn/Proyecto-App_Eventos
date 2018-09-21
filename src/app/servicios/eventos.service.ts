import { Injectable } from '@angular/core';

import { AngularFireList, AngularFireDatabase} from 'angularfire2/database';
import { eventos} from '../models/eventos';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  listaeventos: AngularFireList<any>;

  // eventoSeleccionado= new eventos;
  constructor( private firebase:AngularFireDatabase) { }

  obtenereventos() {
    return this.listaeventos = this.firebase.list('eventos');
  }

  // insertar producto

  insertarevento(eventos: eventos) {
    this.listaeventos.push({
      nombre: eventos.nombre,
      hora: eventos.hora,
      fecha: eventos.fecha,
      descripcion: eventos.descripcion
    });
  }

  actualizarevento(eventos: eventos) {
    this.listaeventos.update(eventos.$key, {
      nombre: eventos.nombre,
      hora: eventos.hora,
      fecha: eventos.fecha,
      descripcion: eventos.descripcion
    });
  }

  eliminarevento($key: string) {
    this.listaeventos.remove($key);
  }
}
