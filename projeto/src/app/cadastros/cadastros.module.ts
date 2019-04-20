import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDriveComponent } from './template-drive/template-drive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelDriveComponent } from './model-drive/model-drive.component';

@NgModule({
  declarations: [TemplateDriveComponent, ModelDriveComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [TemplateDriveComponent, ModelDriveComponent]
})
export class CadastrosModule { }
