import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersTableViewComponent } from './usersTableView.component';
import { TableModule } from 'primeng/table';

@NgModule({
    declarations: [UsersTableViewComponent],
    imports: [CommonModule, TableModule],
    exports: [UsersTableViewComponent],
})
export class UsersTableViewModule {}
