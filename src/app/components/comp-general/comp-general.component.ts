import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../servicios/eventos.service';

@Component({
  selector: 'app-comp-general',
  templateUrl: './comp-general.component.html',
  styleUrls: ['./comp-general.component.css']
})
export class CompGeneralComponent implements OnInit {

  constructor(private eventosservice:EventosService) { }

  ngOnInit() {
  }

}
