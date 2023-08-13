import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../types/user.interface';
import { AppService } from '../../services/app.service';
import { Subscription } from 'rxjs';

interface Columns {
    field: string;
    header: string;
}

@Component({
    selector: 'mc-users-table-view',
    templateUrl: './usersTableView.component.html',
    styleUrls: ['./usersTableView.component.scss'],
})
export class UsersTableViewComponent implements OnInit, OnDestroy {
    users!: User[];
    virtualUsers!: User[];

    usersSubscription!: Subscription;

    cols!: Columns[];

    constructor(private appService: AppService) {}

    ngOnInit() {
        this.initializeValues();
    }

    private initializeValues() {
        this.usersSubscription = this.appService.getUsers$.subscribe(
            (users) => {
                this.users = users;
            },
        );

        this.virtualUsers = Array.from({ length: 10000 });

        this.cols = [
            { field: 'index', header: '№' },
            { field: 'id', header: 'ID' },
            { field: 'fullName', header: 'Full Name' },
            { field: 'address', header: 'Address' },
            { field: 'phone', header: 'Phone' },
        ];
    }

    onScrollDown() {
        const currentPage = this.appService.currentPage.value;
        if (currentPage === 0) {
            this.appService.currentPage.next(2);
            this.appService.setUsers(2);
        } else {
            this.appService.currentPage.next(currentPage + 1);
        }
        this.appService.setUsers(currentPage + 1);
    }

    onScrollUp() {
        this.appService.currentPage.next(0);
        this.appService.setUsers(0);
    }

    ngOnDestroy() {
        this.usersSubscription.unsubscribe();
    }
}
