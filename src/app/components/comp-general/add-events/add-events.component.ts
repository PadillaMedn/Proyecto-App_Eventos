import { Component, OnInit } from '@angular/core';


import {EventosService} from '../../../servicios/eventos.service';
import {NgForm} from '@angular/forms';
import {eventos} from '../../../models/eventos';
// import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {

  constructor(
    private eventosService: EventosService,
    // private toastrService: toastrService
    ) { }

  ngOnInit() {
    this.eventosService.obtenereventos();
    this.resetForm();
  }

onSubmit(eventoForm: NgForm){
  if (eventoForm.value.$key == null) {
    this.eventosService.insertarevento(eventoForm.value);
    // this.toastrService.info('evento Agregado', 'Operacion Exitosa' );

  } else {
    this.eventosService.actualizarevento(eventoForm.value);
    // this.toastrService.warning('evento Modificado', 'Operacion Exitosa' );
  }
    this.resetForm(eventoForm);

}

resetForm(eventoForm?: NgForm){
if (eventoForm != null) {
  eventoForm.reset();
  this.eventosService.eventoSeleccionado = new eventos();
}
}
}


