import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorEmulatorComponent } from './errorEmulator.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ErrorEmulatorComponent],
    imports: [CommonModule, InputNumberModule, SliderModule, FormsModule],
    exports: [ErrorEmulatorComponent],
})
export class ErrorEmulatorModule {}
