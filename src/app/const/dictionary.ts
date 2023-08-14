import { LocalesEnums } from '../types/localesEnums';
import { DictionaryType } from '../types/local.formats';

export const Dictionary = (): DictionaryType => ({
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
});

export const germanCharset = () =>
    'abcdefghijklmnopqrstuvwxyzäöüßABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ';

export const italianCharset = () =>
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const ukrainianCharset = () =>
    'абвгґдеєжзиіїйклмнопрстуфхцчшщьюяАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ';
