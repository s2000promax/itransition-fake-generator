import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../types/user.interface';
import { AppService } from '../../services/app.service';

@Component({
    selector: 'mc-users-table-view',
    templateUrl: './usersTableView.component.html',
})
export class UsersTableViewComponent implements OnInit {
    users$!: Observable<User[]>;

    constructor(private appService: AppService) {}

    ngOnInit() {
        this.initializeValues();
    }

    private initializeValues() {
        this.users$ = this.appService.getUsers$;
    }
}
