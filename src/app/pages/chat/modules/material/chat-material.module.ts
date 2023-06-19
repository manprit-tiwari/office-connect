import { NgModule } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

const mateials = [
    MatExpansionModule,
    MatIconModule,
    MatButtonModule
];

@NgModule({
    imports: [mateials],
    exports: [mateials]
})
export class ChatMaterialModule {}