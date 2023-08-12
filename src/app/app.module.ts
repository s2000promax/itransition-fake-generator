import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { UsersTableViewModule } from './components/usersTableView/usersTableView.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ToolbarModule,
        UsersTableViewModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
