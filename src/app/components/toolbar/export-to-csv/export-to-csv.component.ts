import { Component } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
    selector: 'mc-export-to-csv',
    templateUrl: './export-to-csv.component.html',
})
export class ExportToCsvComponent {
    constructor(private appService: AppService) {}

    onExportToCSV() {
        this.appService.exportToCSV();
    }
}
