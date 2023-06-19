import { Component } from "@angular/core";
import { IconRegisteryService } from "src/app/services/icon-registery/icon-registery.service";
import { ChatDummyChatService } from "../../services/dummy-chat/dummy-chat.service";


@Component({
    selector: 'chat-single-user-chat-container',
    templateUrl: './single-user-chat-container.component.html',
    styleUrls: ['./single-user-chat-container.component.scss']
})
export class ChatSingleUserChatContainerComponent {

    chatMessage: Message[] = this.chatDummyChatService.chatData;

    constructor(
        private iconRegistryService: IconRegisteryService,
        private chatDummyChatService: ChatDummyChatService
    ) { 
        this.registerMatIcon();
    }

    registerMatIcon = (): void => {
        this.iconRegistryService.registerNewMatIcon('custome-send', '../../../../../assets/icons/send.svg');
        this.iconRegistryService.registerNewMatIcon('custome-image', '../../../../../assets/icons/image.svg');
        this.iconRegistryService.registerNewMatIcon('custome-link', '../../../../../assets/icons/link.svg');
        this.iconRegistryService.registerNewMatIcon('custome-paperclip', '../../../../../assets/icons/paperclip.svg');
    }
}