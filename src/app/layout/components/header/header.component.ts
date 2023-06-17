import { Component, OnInit } from "@angular/core";
import { IconRegisteryService } from "src/app/services/icon-registery/icon-registery.service";

@Component({
    selector: 'layout-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class LayoutHeaderComponent implements OnInit {

    constructor(
        private IconRegisteryService: IconRegisteryService
    ) { 
        this.registerIcon();
    }
    
    ngOnInit(): void {
    }

    private registerIcon = (): void => {
        this.IconRegisteryService.registerNewMatIcon('custome-chat', '../../../../assets/icons/chat-square-text.svg');
        this.IconRegisteryService.registerNewMatIcon('custome-contact', '../../../assets/icons/person-square.svg');
    }
}