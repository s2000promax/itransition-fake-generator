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

    constructor(private usersGenerator: UsersGeneratorService) {
        this.setSeed(this.seedSubject.value);
    }

    get getSeed() {
        return this.seedSubject.value;
    }

    setSeed(seed: number) {
        this.seedSubject.next(seed);
        this.setUsers(seed);
    }

    get getUsers$() {
        return this.users$;
    }

    setUsers(seed: number) {
        this.usersGenerator.setSeed(seed);

        const users = this.usersGenerator.getFakeUsersPage(0, 10);
        console.log(users);
        this.usersSubject.next(users);
    }
}
