import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ChatDummyUserService } from "../../services/dummy-users/dummy-users.service";

@Component({
    selector: 'chat-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class ChatSidebarComponent {

    searchForm: FormGroup = new FormGroup({
        'search': new FormControl("")
    });

    UserData: User[] = this.chatDummyUserService.users;

    constructor(
        private chatDummyUserService: ChatDummyUserService
    ) { }

}