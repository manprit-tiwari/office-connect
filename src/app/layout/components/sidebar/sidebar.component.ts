import { Component } from "@angular/core";
import { IconRegisteryService } from "src/app/services/icon-registery/icon-registery.service";

@Component({
    selector: 'layout-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class LayoutSidebarComponent {
    constructor(
        private IconRegisteryService: IconRegisteryService
    ) {
        this.registerIcon();
    }
    private registerIcon = (): void => {
        this.IconRegisteryService.registerNewMatIcon('custome-pinned', '../../../../assets/icons/app-indicator.svg');
        this.IconRegisteryService.registerNewMatIcon('custome-multi-chats', '../../../../assets/icons/multi-chat-icon.svg');
        this.IconRegisteryService.registerNewMatIcon('custome-blocked', '../../../../assets/icons/blocked.svg');
        this.IconRegisteryService.registerNewMatIcon('custome-trash', '../../../../assets/icons/trash.svg');
    }
}