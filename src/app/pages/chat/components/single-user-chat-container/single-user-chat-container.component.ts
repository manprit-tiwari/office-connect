import { Component } from "@angular/core";
import { IconRegisteryService } from "src/app/services/icon-registery/icon-registery.service";


@Component({
    selector: 'chat-single-user-chat-container',
    templateUrl: './single-user-chat-container.component.html',
    styleUrls: ['./single-user-chat-container.component.scss']
})
export class ChatSingleUserChatContainerComponent {

    constructor(
        private iconRegistryService: IconRegisteryService,
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