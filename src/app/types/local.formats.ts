import { LocalesEnums } from './localesEnums';

export interface LocalFormats {
    country: string;
    phoneFormat: string[];
    locationType: string[];
}

export type DictionaryType = Record<LocalesEnums, LocalFormats>;
