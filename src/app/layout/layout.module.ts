import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { CommonModule } from "@angular/common";
import { LayoutRoutingModule } from "./modules/routing/layout-routing.module";
import { LayoutSidebarComponent } from "./components/sidebar/sidebar.component";
import { LayoutHeaderComponent } from "./components/header/header.component";
import { LayoutMaterialModule } from "./modules/material/layout-material.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        LayoutComponent,
        LayoutHeaderComponent,
        LayoutSidebarComponent
    ],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        LayoutMaterialModule,
        HttpClientModule
    ]
})
export class LayoutModule { }