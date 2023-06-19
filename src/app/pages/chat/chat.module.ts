import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ChatComponent } from "./chat.component";
import { ChatRoutingModule } from "./modules/routing/chat-routing.module";
import { ChatMaterialModule } from "./modules/material/chat-material.module";
import { ChatSidebarComponent } from "./components/sidebar/sidebar.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ChatUserCardContainerComponent } from "./components/user-card-container/user-card-container.component";
import { ChatUserCardComponent } from "./components/user-card/user-card.component";
import { ChatDummyUserService } from "./services/dummy-users/dummy-users.service";
import { ChatSingleUserChatContainerComponent } from "./components/single-user-chat-container/single-user-chat-container.component";
import { IconRegisteryService } from "src/app/services/icon-registery/icon-registery.service";


@NgModule({
    declarations: [
        ChatComponent,
        ChatSidebarComponent,
        ChatUserCardContainerComponent,
        ChatUserCardComponent,
        ChatSingleUserChatContainerComponent
    ],
    imports: [
        CommonModule,
        ChatRoutingModule,
        ChatMaterialModule,
        ReactiveFormsModule
    ],
    providers: [
        ChatDummyUserService
    ]
})
export class ChatModule {}