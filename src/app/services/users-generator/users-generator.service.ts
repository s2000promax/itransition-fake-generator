import { Injectable } from '@angular/core';
import * as Chance from 'chance';
import { User } from '../../types/user.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UsersGeneratorService {
    private mainChance!: Chance.Chance;

    setSeed(seed: number) {
        this.mainChance = new Chance(seed);
    }

    getFakeUsersPage(page: number, pageSize: number): User[] {
        const users: User[] = [];

        const combinedSeed: number = page + (this.mainChance.seed as number);
        const pageChance = new Chance(combinedSeed);

        for (let i = 0; i < pageSize; i += 1) {
            const index = page * pageSize + i + 1;
            users.push(this.getFakeUser(pageChance, index));
        }

        return users;
    }

    private getFakeUser(chanceInstance: Chance.Chance, index: number): User {
        const fullName = `${chanceInstance.first()} ${chanceInstance.first()} ${chanceInstance.last()}`;
        return {
            index,
            id: chanceInstance.guid(),
            fullName,
            address: chanceInstance.address(),
            phone: chanceInstance.phone(),
        };
    }
}
