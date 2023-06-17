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

    registerNewMatIcon = (name: string, path: string): MatIconRegistry => {
        return this.matIconRegistery.addSvgIcon(
            name,
            this.domSanitizer.bypassSecurityTrustResourceUrl(path)
        );
    }
}