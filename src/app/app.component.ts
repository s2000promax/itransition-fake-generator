import { Component } from '@angular/core';
import { UsersGeneratorService } from './services/users-generator/users-generator.service';
import { AppService } from './services/app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    constructor(private appService: AppService) {}
}
