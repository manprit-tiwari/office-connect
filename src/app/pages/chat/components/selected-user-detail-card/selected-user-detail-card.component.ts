import { Component } from "@angular/core";
import { IconRegisteryService } from "src/app/services/icon-registery/icon-registery.service";

@Component({
    selector: 'chat-selected-user-detail-card',
    templateUrl: './selected-user-detail-card.component.html',
    styleUrls: ['./selected-user-detail-card.component.scss']
})
export class ChatSelectedUserDetailCardComponent {
    
    constructor(
        private iconRegistryService: IconRegisteryService,
    ) { 
        this.registerNewMatIcon();
    }

    registerNewMatIcon = (): void => {
        this.iconRegistryService.registerNewMatIcon('custome-call', "../../../../../assets/icons/telephone.svg");
        this.iconRegistryService.registerNewMatIcon('custome-volume', "../../../../../assets/icons/volume-up.svg");
        this.iconRegistryService.registerNewMatIcon('custome-mute', "../../../../../assets/icons/volume-mute.svg");
        this.iconRegistryService.registerNewMatIcon('custome-vedio', "../../../../../assets/icons/camera-video.svg");
        this.iconRegistryService.registerNewMatIcon('custome-briefcase', "../../../../../assets/icons/briefcase.svg");
    }
}