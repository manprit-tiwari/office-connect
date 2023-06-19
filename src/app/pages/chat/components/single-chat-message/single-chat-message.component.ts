import { Component, Input } from "@angular/core";

@Component({
    selector: 'chat-single-chat-message',
    templateUrl: './single-chat-message.component.html',
    styleUrls: ['./single-chat-message.component.scss']
})
export class ChatSingleChatMessageComponent {

    @Input({ required: true }) message!: Message;
    userId: string = '2';

}