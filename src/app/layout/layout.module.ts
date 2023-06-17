import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { CommonModule } from "@angular/common";
import { LayoutRoutingModule } from "./modules/routing/layout-routing.module";
import { LayoutSidebarComponent } from "./components/sidebar/sidebar.component";
import { LayoutHeaderComponent } from "./components/header/header.component";

@NgModule({
    declarations: [
        LayoutComponent,
        LayoutHeaderComponent,
        LayoutSidebarComponent
    ],
    imports: [
        CommonModule,
        LayoutRoutingModule
    ]
})
export class LayoutModule { }