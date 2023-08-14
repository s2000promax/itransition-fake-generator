import { Component } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
    selector: 'mc-seed',
    templateUrl: './seed.component.html',
})
export class SeedComponent {
    seedValue: number = 0;

    constructor(private appService: AppService) {}

    updateSeedValue() {
        this.setSeed(this.seedValue);
    }

    getRandomSeed() {
        this.seedValue = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        this.setSeed(this.seedValue);
    }

    private setSeed(value: number) {
        this.appService.setSeed(value);
    }
}
