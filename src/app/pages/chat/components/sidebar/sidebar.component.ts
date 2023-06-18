import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'chat-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class ChatSidebarComponent {

    searchForm: FormGroup = new FormGroup({
        'search': new FormControl("")
    });

    constructor() { }

}