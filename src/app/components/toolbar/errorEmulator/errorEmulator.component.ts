import { Component, EventEmitter, Output } from '@angular/core';

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

    @Output() errorValueChanged = new EventEmitter<number>();

    updateSliderValue() {
        this.sliderValue = Math.min(this.fieldValue, this.sliderMaxValue);
        this.setErrorValueChanged(this.sliderValue);
    }

    updateFieldValue() {
        this.fieldValue = this.sliderValue;
        this.setErrorValueChanged(this.fieldValue);
    }

    private setErrorValueChanged(value: number) {
        this.errorValueChanged.emit(value);
    }
}
