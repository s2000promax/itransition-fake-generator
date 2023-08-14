import { User, UserField } from '../types/user.interface';
import { LocalesEnums } from '../types/localesEnums';
import {
    germanCharset,
    italianCharset,
    ukrainianCharset,
} from '../const/dictionary';

export class ErrorSimulator {
    private users: User[];
    private charSet: string;

    constructor(users: User[], errorsPerRecord: number, locale: LocalesEnums) {
        this.charSet = this.setChars(locale);

        this.users = users.map((user) =>
            this.introduceErrorsToUser(user, errorsPerRecord),
        );
    }

    get getUsers() {
        return this.users;
    }

    private introduceErrorsToUser(user: User, errorsPerRecord: number): User {
        const fixedErrors = Math.floor(errorsPerRecord);
        const additionalErrorProbability = errorsPerRecord - fixedErrors;

        const totalErrors =
            fixedErrors + (Math.random() < additionalErrorProbability ? 1 : 0);

        const fields: UserField[] = ['fullName', 'address', 'phone'];
        for (let i = 0; i < totalErrors; i += 1) {
            const field = fields[Math.floor(Math.random() * fields.length)];

            user[field] = this.introduceError(
                user[field] as string,
                field === 'phone',
            );
        }

        return user;
    }

    private introduceError(str: string, onlyDigits: boolean = false): string {
        const position = Math.floor(Math.random() * str.length);
        const errorType = ['insert', 'delete', 'swap'][
            Math.floor(Math.random() * 3)
        ];

        switch (errorType) {
            case 'insert':
                const charToInsert = onlyDigits
                    ? String.fromCharCode(Math.random() * 10 + 48)
                    : this.charSet[
                          Math.floor(Math.random() * this.charSet.length)
                      ];
                return (
                    str.slice(0, position) + charToInsert + str.slice(position)
                );
            case 'delete':
                return str.slice(0, position) + str.slice(position + 1);
            case 'swap':
                if (
                    position === 0 ||
                    position === str.length - 1 ||
                    (onlyDigits &&
                        (!this.isDigit(str[position]) ||
                            !this.isDigit(str[position - 1])))
                )
                    return str;
                return (
                    str.slice(0, position - 1) +
                    str.charAt(position) +
                    str.charAt(position - 1) +
                    str.slice(position + 1)
                );
        }

        return str;
    }

    private isDigit(char: string): boolean {
        return char >= '0' && char <= '9';
    }

    private setChars(locale: LocalesEnums) {
        switch (locale.toString()) {
            case LocalesEnums.it_IT:
                return italianCharset();
            case LocalesEnums.uk_UK:
                return ukrainianCharset();
            default:
                return germanCharset();
        }
    }
}
