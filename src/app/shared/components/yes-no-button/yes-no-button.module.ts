import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoButtonComponent } from './yes-no-button.component';
import { KeyboardManagerModule } from '../../directives/keyboard-manager/keyboard-manager.module';

@NgModule({
  declarations: [YesNoButtonComponent],
  imports: [CommonModule, KeyboardManagerModule],
  exports: [YesNoButtonComponent],
})
export class YesNoButtonModule {}
