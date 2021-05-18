import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidarCamposService } from '../validar-campos.service';

@Component({
  selector: 'dio-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent  {
  
  @Input() titulo: string;
  @Input() formGroup: FormGroup; // valor base
  @Input() controlName: string; //valor base

  constructor(public validacao: ValidarCamposService ) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }


}
