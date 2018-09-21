import { Component, OnInit } from '@angular/core';

import {EventosService} from '../../servicios/eventos.service';
import {NgForm} from '@angular/forms';
import {eventos} from '../../models/eventos';

// import {ToastService} from 'ngx-toastr'

@Component({
  selector: 'app-add-eventos',
  templateUrl: './add-eventos.component.html',
  styleUrls: ['./add-eventos.component.css']
})
export class AddEventosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
