import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
    providedIn: 'root'
})
export class IconRegisteryService { 

    constructor(
        private matIconRegistery: MatIconRegistry,
        private domSanitizer: DomSanitizer
    ) { }

    /**
     * 
     * @param name - Icon name to register SVG Image to it. It will be later used with `<mat-icon svgIcon=""></mat-icon>`
     * To provide in matIcon property.
     * @param path - SVG image path in assets Folder.
     * @returns - Function which will register MatIcon in MatIconRegistry.
     */
    registerNewMatIcon = (name: string, path: string): MatIconRegistry => {
        return this.matIconRegistery.addSvgIcon(
            name,
            this.domSanitizer.bypassSecurityTrustResourceUrl(path)
        );
    }
}