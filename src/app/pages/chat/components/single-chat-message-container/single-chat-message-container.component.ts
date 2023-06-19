import { Component, Input } from "@angular/core";


@Component({
    selector: 'chat-single-chat-message-container',
    templateUrl: './single-chat-message-container.component.html',
    styleUrls: ['./single-chat-message-container.component.scss']
})
export class ChatSingleChatMessageContainerComponent {

    @Input({ required: true }) chatMessages: Message[] = [];
    
}