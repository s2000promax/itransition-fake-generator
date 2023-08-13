import { Injectable } from '@angular/core';
import { User } from '../../types/user.interface';
import {
    Faker,
    fakerEN_US,
    en_US,
    de,
    it,
    uk,
    LocaleDefinition,
} from '@faker-js/faker';
import { LocalesEnums } from '../../types/localesEnums';

interface LocalFormats {
    country: string;
    phoneFormat: string[];
    locationType: string[];
}

@Injectable({
    providedIn: 'root',
})
export class UsersGeneratorFakerService {
    private faker!: Faker;
    private seed: number = 0;
    private locale: LocaleDefinition = de;

    private dictionary: Record<LocalesEnums, LocalFormats>;
    private country!: string;
    private phoneFormat!: string[];
    private locationType!: string[];

    constructor() {
        this.dictionary = this.getDictionary();
    }

    setSeedAndLocale(seed: number, locale: LocalesEnums) {
        this.locale = this.getLocaleDefinition(locale);
        this.country = this.dictionary[locale].country;
        this.phoneFormat = this.dictionary[locale].phoneFormat;
        this.locationType = this.dictionary[locale].locationType;

        this.seed = seed;

        this.locale !== en_US
            ? (this.faker = new Faker({ locale: this.locale }))
            : fakerEN_US;
        this.seed = this.faker.seed(this.seed);
    }

    getFakeUsersPage(page: number, pageSize: number): User[] {
        const users: User[] = [];

        const combinedSeed: number = page + this.seed;
        const pageSeed = this.faker.seed(combinedSeed);

        for (let i = 0; i < pageSize; i += 1) {
            const index = page * pageSize + i + 1;
            users.push(this.getFakeUser(index));
        }

        return users;
    }

    private getFakeUser(index: number): User {
        return {
            index,
            id: this.faker.string.uuid(),
            fullName: this.generateFullName(),
            address: this.generateAddress(),
            phone: this.generatePhoneNumber(),
        };
    }

    private generateFullName(): string {
        return `${this.faker.person.firstName()} ${this.faker.person.firstName(
            'male',
        )} ${this.faker.person.lastName()}`;
    }

    private generateAddress(): string {
        const country = this.country;
        const postalCode = this.faker.location.zipCode();

        const cityName = this.faker.location.city();
        const cityType = this.faker.helpers.arrayElement(this.locationType);
        const indexOfCityType = this.locationType.findIndex(
            (el) => el === cityType,
        );

        const apartmentNumber =
            indexOfCityType === 0
                ? this.faker.number.int({ min: 1, max: 500 })
                : null;
        const houseNumber = this.faker.number.int({ min: 1, max: 100 });

        const street = this.faker.location.street();

        return [
            apartmentNumber,
            houseNumber,
            street,
            cityType,
            cityName,
            postalCode,
            country,
        ]
            .filter((el) => el !== null)
            .join(', ');
    }

    private generatePhoneNumber(): string {
        const phoneFormat = this.faker.helpers.arrayElement(this.phoneFormat);
        return this.faker.phone.number(phoneFormat);
    }

    private getLocaleDefinition(locale: LocalesEnums) {
        switch (locale.toString()) {
            case LocalesEnums.it_IT:
                return it;
            case LocalesEnums.uk_UK:
                return uk;
            default:
                return de;
        }
    }

    private getDictionary() {
        return {
            [LocalesEnums.de_DE]: {
                country: 'Duitsland',
                locationType: ['Stad', 'Dorp', 'Gemeente'],
                phoneFormat: [
                    '+49 (###) ## ###-##-##',
                    '+49-###-##-###-##-##',
                    '+49(###) ### ## ## ##',
                    '(0##) ####-####',
                ],
            },
            [LocalesEnums.it_IT]: {
                country: 'Italia',
                locationType: ['Città', 'Villaggio', 'Comune'],
                phoneFormat: [
                    '####-####',
                    '+39-06-####-####',
                    '+39(###) ### ## ## ##',
                    '06 6 ####-####',
                ],
            },
            [LocalesEnums.uk_UK]: {
                country: 'Україна',
                locationType: ['Місто', 'Село', 'Містечко'],
                phoneFormat: [
                    '+380 (###) ###-##-##',
                    '+380-###-###-##-##',
                    '+380 692 ### ## ##',
                    '+380 65 ####-####',
                ],
            },
        };
    }
}
