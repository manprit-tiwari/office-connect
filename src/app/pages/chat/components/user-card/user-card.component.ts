import { Component, Input } from "@angular/core";

@Component({
    selector: 'chat-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.scss']
})
export class ChatUserCardComponent {

    @Input({ required: true }) user!: User;
 }