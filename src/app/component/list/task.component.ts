import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ListService} from 'app/services/list-service';


@Component({
    selector: 'app-list',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class ListComponent implements OnInit {
    @Input() displayList: any;
    searchText: String = '';
    searchProp: any = 'title';
    lang: any = 'en';
    var: any;
    count = 0;
    statuses = [
        {
            en: 'pending',
            es: 'pendiente'
        },
        {
            en: 'completed',
            es: 'terminado'
        },
        {
            en: 'archived',
            es: 'archivado'
        }

    ];

    constructor(private toDoListService: ListService) {
        this.displayList = [];
        toDoListService.getToDoList().subscribe((data) => {
            console.log('Data', data);
        });
    }

    ngOnInit() {
        this.toDoListService.getToDoList().subscribe(value => {
            console.log('On Init Value List', value.list);
            this.displayList = value.list;

            for (this.count; this.count < this.displayList.length; this.count++) {
                if (this.displayList.completed === 'true') {
                    this.count = this.count++;
                    console.log('count', this.count);
                }
                this.count = this.count;
            }
            console.log('Status', this.statuses[this.displayList[0].status][this.lang]);
        });
        console.log('lang', this.lang);
    }

    update(evt, list, index) {
        console.log(evt, index, list);
        if (evt) {
            list.status = 1;
            --this.count;
        } else {
            list.status = 0;
            ++this.count;
        }
    }

    onSelect(evt) {
        console.log(evt);
        this.searchProp = evt;
        console.log('Search Value', this.searchProp);
    }
}
