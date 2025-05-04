import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Co2CalculatorService } from '../../services/co2-calculator.service';
import { Co2TableComponent } from "../co2-table/co2-table.component";

@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule, Co2TableComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  co2Form: FormGroup;
  result: number | null = null;

  constructor(private fb: FormBuilder,private calculator: Co2CalculatorService) {
    this.co2Form = this.fb.group({
      kmCar: [null, [Validators.required, Validators.min(0)]],
      electricity: [null, [Validators.required, Validators.min(0)]],
      heating: [null, [Validators.required, Validators.min(0)]],
      diet: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.co2Form.valid) {
      this.result = this.calculator.calculate(this.co2Form.value);
    }
  }
}
