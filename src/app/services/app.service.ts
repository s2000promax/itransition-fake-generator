import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../types/user.interface';
import { LocalesEnums } from '../types/localesEnums';
import { UsersGeneratorFakerService } from './users-generator/users-generator-faker.service';
import { ErrorSimulator } from '../libs/error-simulator';

@Injectable({
    providedIn: 'root',
})
export class AppService {
    private errors = new BehaviorSubject<number>(0);

    private seed = new BehaviorSubject<number>(0);

    private locale = new BehaviorSubject<LocalesEnums>(LocalesEnums.de_DE);

    private usersSubject = new BehaviorSubject<User[]>([]);
    users$ = this.usersSubject.asObservable();

    currentPage = new BehaviorSubject<number>(0);

    constructor(private usersGenerator: UsersGeneratorFakerService) {
        this.initializeValues();
    }

    initializeValues() {
        this.regenerateUsers();
    }

    setLocale(locale: LocalesEnums) {
        this.locale.next(locale);

        this.regenerateUsers();
    }

    setErrors(value: number) {
        this.errors.next(value);

        this.regenerateUsers();
    }

    setSeed(seed: number) {
        this.seed.next(seed);

        this.regenerateUsers();
    }

    private regenerateUsers() {
        this.currentPage.next(0);
        this.usersGenerator.setSeedLocaleErrors(
            this.seed.value,
            this.locale.value,
        );
        this.setUsers();

        if (!!this.errors.value) {
            const errorSimulatedUsers = new ErrorSimulator(
                this.usersSubject.value,
                this.errors.value,
                this.locale.value,
            ).getUsers;
            this.usersSubject.next(errorSimulatedUsers);
        }
    }

    get getUsers$() {
        return this.users$;
    }

    setUsers(page: number = 0) {
        if (page === 0) {
            const newUsers = this.usersGenerator.getFakeUsersPage(page, 20);
            this.usersSubject.next(newUsers);
        } else {
            this.usersGenerator.setSeedLocaleErrors(
                this.seed.value,
                this.locale.value,
            );
            const newUsers = this.usersGenerator.getFakeUsersPage(page, 10);
            this.usersSubject.next([...this.usersSubject.value, ...newUsers]);

            if (!!this.errors.value) {
                const errorSimulatedUsers = new ErrorSimulator(
                    this.usersSubject.value,
                    this.errors.value,
                    this.locale.value,
                ).getUsers;
                this.usersSubject.next(errorSimulatedUsers);
            }
        }
    }
}
