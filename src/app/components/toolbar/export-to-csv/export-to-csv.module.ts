import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportToCsvComponent } from './export-to-csv.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [ExportToCsvComponent],
    imports: [CommonModule, ButtonModule],
    exports: [ExportToCsvComponent],
})
export class ExportToCSVModule {}
