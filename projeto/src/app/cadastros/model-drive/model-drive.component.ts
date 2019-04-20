import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-drive',
  templateUrl: './model-drive.component.html',
  styleUrls: ['./model-drive.component.css']
})
export class ModelDriveComponent implements OnInit {

  pageForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.pageForm = this.fb.group({
      nome: ['', Validators.required], // valor padrão, validadores 
      endereco: ['', Validators.required],
      idade: ['', [Validators.required, Validators.min(16)]]
    });
  }

}
