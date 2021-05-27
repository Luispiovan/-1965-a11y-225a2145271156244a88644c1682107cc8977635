import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoButtonComponent } from './yes-no-button.component';



@NgModule({
  declarations: [YesNoButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [YesNoButtonComponent]
})
export class YesNoButtonModule { }
