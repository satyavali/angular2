import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { starComponent } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    starComponent
  ],
  exports: [
    starComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
