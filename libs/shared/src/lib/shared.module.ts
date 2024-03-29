import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedButtonComponent } from './components/shared-button/shared-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SharedButtonComponent],
  exports: [SharedButtonComponent],
})
export class SharedModule {}
