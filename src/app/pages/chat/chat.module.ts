import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ChatComponent } from "./chat.component";
import { ChatRoutingModule } from "./modules/routing/chat-routing.module";
import { ChatMaterialModule } from "./modules/material/chat-material.module";
import { ChatSidebarComponent } from "./components/sidebar/sidebar.component";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        ChatComponent,
        ChatSidebarComponent
    ],
    imports: [
        CommonModule,
        ChatRoutingModule,
        ChatMaterialModule,
        ReactiveFormsModule
    ],
})
export class ChatModule {}