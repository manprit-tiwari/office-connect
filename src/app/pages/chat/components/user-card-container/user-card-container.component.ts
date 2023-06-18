import { Component, Input } from "@angular/core";

@Component({
    selector: 'chat-user-card-container',
    templateUrl: './user-card-container.component.html',
    styleUrls: ['./user-card-container.component.scss']
})
export class ChatUserCardContainerComponent {

    @Input({required: true}) userData: User[] = [];
}