import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ListService} from './services/list-service';
import {ListComponent} from './component/list/task.component';
import {SearchPipePipe} from './pipes/search-pipe';


@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        SearchPipePipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [ListService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
