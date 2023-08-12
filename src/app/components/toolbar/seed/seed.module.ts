import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeedComponent } from './seed.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [SeedComponent],
    imports: [CommonModule, InputNumberModule, FormsModule, ButtonModule],
    exports: [SeedComponent],
})
export class SeedModule {}
