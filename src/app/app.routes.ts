import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ConoceKashComponent } from "./pages/conoce-kash/conoce-kash.component";

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "conoce-kash", component: ConoceKashComponent }
];
