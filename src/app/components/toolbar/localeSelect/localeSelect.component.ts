import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Countries {
    value: string;
    label: string;
    id: string;
}

@Component({
    selector: 'mc-locale-select',
    templateUrl: './localeSelect.component.html',
})
export class LocaleSelectComponent implements OnInit {
    selectedCountry: string = 'American';

    countries: Countries[] = [
        { value: 'American', label: 'USA', id: 'usa' },
        { value: 'Poland', label: 'PL', id: 'pl' },
        { value: 'Belarusian', label: 'BL', id: 'bl' },
    ];

    @Output() countryChanged = new EventEmitter<string>();

    ngOnInit() {
        this.onChangeCountry();
    }

    onChangeCountry() {
        this.countryChanged.emit(this.selectedCountry);
    }
}
