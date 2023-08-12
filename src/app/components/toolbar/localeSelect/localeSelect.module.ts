import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocaleSelectComponent } from './localeSelect.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [LocaleSelectComponent],
    imports: [CommonModule, RadioButtonModule, FormsModule],
    exports: [LocaleSelectComponent],
})
export class LocaleSelectModule {}
