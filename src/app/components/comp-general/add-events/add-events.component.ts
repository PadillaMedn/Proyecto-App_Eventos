import { Component, OnInit } from '@angular/core';


import {EventosService} from '../../../servicios/eventos.service';
import {NgForm} from '@angular/forms';
import {eventos} from '../../../models/eventos';

import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {

  constructor(
    private eventosService: EventosService,
    private toastrService: ToastrService
    ) { }

  ngOnInit() {
    this.eventosService.obtenereventos();
    this.resetForm();
  }

onSubmit(addeventsForm: NgForm){
  if (addeventsForm.value.$key == null) {
    this.eventosService.insertarevento(addeventsForm.value);
    this.toastrService.info('evento Agregado', 'Operacion Exitosa' );

  } else {
    this.eventosService.actualizarevento(addeventsForm.value);
    this.toastrService.warning('evento Modificado', 'Operacion Exitosa' );
  }
    this.resetForm(addeventsForm);

}

resetForm(addeventsForm?: NgForm){
if (addeventsForm != null) {
  addeventsForm.reset();
  this.eventosService.eventoSeleccionado = new eventos();
}
}
}


