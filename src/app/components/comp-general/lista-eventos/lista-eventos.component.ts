import { Component, OnInit } from '@angular/core';
// import {EventosComponent } from '../../eventos/eventos.component'
import { EventosService } from '../../../servicios/eventos.service'
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css']
})
export class ListaEventosComponent implements OnInit {

  constructor(private eventosservice : EventosService) { }

  ngOnInit() {
  }

}
