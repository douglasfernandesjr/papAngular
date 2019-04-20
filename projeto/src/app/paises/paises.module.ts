import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesListComponent } from './paises-list/paises-list.component';
import { PaisDisplayComponent } from './pais-display/pais-display.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PaisesListComponent, PaisDisplayComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [PaisesListComponent]
})
export class PaisesModule { }
