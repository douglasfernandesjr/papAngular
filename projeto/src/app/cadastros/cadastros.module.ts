import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDriveComponent } from './template-drive/template-drive.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TemplateDriveComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [TemplateDriveComponent]
})
export class CadastrosModule { }
