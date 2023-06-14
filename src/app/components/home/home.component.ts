import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormControl } from '@angular/forms';

import { Coordinate } from './../../models/coordinate.model';
import { CoordinatesService } from './../../core/coordinates/coordinates.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  form!: FormGroup;
  errorMessage!: string;
  jsonData!: string;

  constructor(
    private formBuilder: FormBuilder,
    private coordinatesService: CoordinatesService,
  ){
    this.buildForm();
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      latitud: ["",[]],
      longitud: ["",[]]
    });
  }


  submitForm(event: Event){
    event.preventDefault();

    //Llamado al servicio y retiro de datos del form
    //en caso de error se contempla especialmente el 404
    this.coordinatesService.getCoordinate(this.form.value.latitud, this.form.value.longitud).subscribe(
    (coordinate) => {
      this.errorMessage = "";
      this.jsonData = JSON.stringify(coordinate, null, 2);
    },
    (error: HttpErrorResponse) => {
      this.jsonData = "";

      if (error.status === 404) {
        this.errorMessage = 'Not Found';
      } else {
        this.errorMessage = 'error';
      }
      }
    );
  }
}
