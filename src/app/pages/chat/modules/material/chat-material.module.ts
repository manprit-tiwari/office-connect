import { NgModule } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";

const mateials = [
    MatExpansionModule,
    MatIconModule
];

@NgModule({
    imports: [mateials],
    exports: [mateials]
})
export class ChatMaterialModule {}