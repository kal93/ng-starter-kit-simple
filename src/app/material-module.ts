import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatIconModule, MatInputModule, MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonToggleModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonToggleModule,
    MatIconModule
  ]
})
export class MaterialModule { }
