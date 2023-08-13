import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../types/user.interface';
import { LocalesEnums } from '../types/localesEnums';
import { UsersGeneratorFakerService } from './users-generator/users-generator-faker.service';

@Injectable({
    providedIn: 'root',
})
export class AppService {
    private seedSubject = new BehaviorSubject<number>(0);

    private locale = new BehaviorSubject<LocalesEnums>(LocalesEnums.de_DE);

    private usersSubject = new BehaviorSubject<User[]>([]);
    users$ = this.usersSubject.asObservable();

    currentPage = new BehaviorSubject<number>(0);

    constructor(private usersGenerator: UsersGeneratorFakerService) {
        this.setSeed(this.seedSubject.value);
    }

    get getSeed() {
        return this.seedSubject.value;
    }

    setSeed(seed: number) {
        this.seedSubject.next(seed);
        this.currentPage.next(0);
        this.usersGenerator.setSeedAndLocale(seed, this.locale.value);

        this.setUsers();
    }

    setLocale(locale: LocalesEnums) {
        this.locale.next(locale);
        this.currentPage.next(0);
        this.usersGenerator.setSeedAndLocale(this.seedSubject.value, locale);

        this.setUsers();
    }

    get getUsers$() {
        return this.users$;
    }

    setUsers(page: number = 0) {
        if (page === 0) {
            const newUsers = this.usersGenerator.getFakeUsersPage(page, 20);
            this.usersSubject.next(newUsers);
        } else {
            this.usersGenerator.setSeedAndLocale(
                this.seedSubject.value,
                this.locale.value,
            );
            const newUsers = this.usersGenerator.getFakeUsersPage(page, 10);
            this.usersSubject.next([...this.usersSubject.value, ...newUsers]);
        }
    }
}
