import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { PanelModule } from 'primeng/panel';
import { ErrorEmulatorModule } from './errorEmulator/errorEmulator.module';
import { LocaleSelectModule } from './localeSelect/localeSelect.module';
import { SeedModule } from './seed/seed.module';
import { ExportToCSVModule } from './export-to-csv/export-to-csv.module';

@NgModule({
    declarations: [ToolbarComponent],
    imports: [
        CommonModule,
        PanelModule,
        ErrorEmulatorModule,
        LocaleSelectModule,
        SeedModule,
        ExportToCSVModule,
    ],
    exports: [ToolbarComponent],
})
export class ToolbarModule {}
