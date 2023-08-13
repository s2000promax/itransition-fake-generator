import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../types/user.interface';
import { UsersGeneratorService } from './users-generator/users-generator.service';

@Injectable({
    providedIn: 'root',
})
export class AppService {
    private seedSubject = new BehaviorSubject<number>(0);

    private usersSubject = new BehaviorSubject<User[]>([]);
    users$ = this.usersSubject.asObservable();

    currentPage = new BehaviorSubject<number>(0);

    constructor(private usersGenerator: UsersGeneratorService) {
        this.setSeed(this.seedSubject.value);
    }

    get getSeed() {
        return this.seedSubject.value;
    }

    setSeed(seed: number) {
        this.seedSubject.next(seed);
        this.currentPage.next(0);
        this.usersGenerator.setSeed(seed);

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
            this.usersGenerator.setSeed(this.seedSubject.value);
            const newUsers = this.usersGenerator.getFakeUsersPage(page, 10);
            this.usersSubject.next([...this.usersSubject.value, ...newUsers]);
        }
    }
}
