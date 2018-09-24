import { Component, OnInit } from '@angular/core';
// import {EventosComponent } from '../../eventos/eventos.component'
import { EventosService } from '../../../servicios/eventos.service'
import { eventos } from '../../../models/eventos'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css']
})
export class ListaEventosComponent implements OnInit {
  listaeventos : eventos[];
  
  constructor(
    private eventosService: EventosService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.eventosService.obtenereventos()
    .snapshotChanges()
    .subscribe(item => {
      this.listaeventos = [];
      item.forEach(element => {
        const x = element.payload.toJSON();
        x['$key'] = element.key;
        this.listaeventos.push( x as eventos);
      });
    });
  }

  onEdit(eventos: eventos) {
    this.eventosService.eventoSeleccionado = Object.assign({}, eventos );
  }
  
  onDelete($key: string) {
    if (confirm('Seguro que desea eliminarlo')) {
      this.eventosService.eliminarevento($key);
      this.toastr.error('El contacto ha sido eliminado de Firebase', 'Contacto ELiminado');
    }

  }

}
