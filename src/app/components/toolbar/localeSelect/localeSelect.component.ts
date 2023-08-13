import { Component, OnInit } from '@angular/core';
import { LocalesEnums } from '../../../types/localesEnums';
import { AppService } from '../../../services/app.service';

interface Locale {
    value: LocalesEnums;
    label: string;
    id: LocalesEnums;
}

@Component({
    selector: 'mc-locale-select',
    templateUrl: './localeSelect.component.html',
})
export class LocaleSelectComponent implements OnInit {
    selectedLocale: LocalesEnums = LocalesEnums.de_DE;

    countries!: Locale[];

    constructor(private appService: AppService) {}

    ngOnInit() {
        this.countries = [
            {
                value: LocalesEnums.de_DE,
                label: 'German',
                id: LocalesEnums.de_DE,
            },
            {
                value: LocalesEnums.it_IT,
                label: 'Italian',
                id: LocalesEnums.it_IT,
            },
            {
                value: LocalesEnums.uk_UK,
                label: 'Ukrainian',
                id: LocalesEnums.uk_UK,
            },
        ];

        this.onChangeCountry();
    }

    onChangeCountry() {
        this.appService.setLocale(this.selectedLocale);
    }
}
