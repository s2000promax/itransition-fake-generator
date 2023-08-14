import { Component } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
    selector: 'mc-error-emulator',
    templateUrl: './errorEmulator.component.html',
})
export class ErrorEmulatorComponent {
    fieldValue: number = 0;
    fieldMaxValue: number = 1000;

    sliderValue: number = 0;
    sliderMaxValue: number = 10;
    sliderStep: number = 0.25;

    constructor(private appService: AppService) {}

    updateSliderValue() {
        this.sliderValue = Math.min(this.fieldValue, this.sliderMaxValue);
        this.setErrorValueChanged();
    }

    updateFieldValue() {
        this.fieldValue = this.sliderValue;
        this.setErrorValueChanged();
    }

    private setErrorValueChanged() {
        this.appService.setErrors(Math.max(this.fieldValue, this.sliderValue));
    }
}
