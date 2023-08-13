import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersTableViewComponent } from './usersTableView.component';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
    declarations: [UsersTableViewComponent],
    imports: [CommonModule, TableModule, SkeletonModule, InfiniteScrollModule],
    exports: [UsersTableViewComponent],
})
export class UsersTableViewModule {}
