import { Routes } from "@angular/router";

const Routing: Routes = [
    {
        path: "",
        loadChildren: () => import("./chat/chat.module").then((m) => m.ChatModule)
    }
];

export { Routing }