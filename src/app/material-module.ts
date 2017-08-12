import { NgModule } from '@angular/core';
import {
  MdButtonModule, MdButtonToggleModule, MdCardModule, MdIconModule, MdInputModule, MdToolbarModule,
  MdTooltipModule
} from "@angular/material";

@NgModule({
  imports: [
    MdButtonModule,
    MdCardModule,
    MdTooltipModule,
    MdToolbarModule,
    MdInputModule,
    MdButtonToggleModule,
    MdIconModule
  ],
  exports: [
    MdButtonModule,
    MdCardModule,
    MdTooltipModule,
    MdToolbarModule,
    MdInputModule,
    MdButtonToggleModule,
    MdIconModule
  ]
})
export class MaterialModule { }
