import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
    selector: 'mc-seed',
    templateUrl: './seed.component.html',
})
export class SeedComponent implements OnInit {
    seedValue!: number;

    constructor(private appService: AppService) {}

    ngOnInit() {
        this.initializeValues();
    }

    private initializeValues() {
        this.seedValue = this.appService.getSeed;
    }

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
